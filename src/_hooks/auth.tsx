import { createContext, useContext, useMemo, useState } from "react";
import { IUser } from "../_interfaces/user";
import { StorageKeys, StorageMiddleware } from "../_middlewares/StorageMiddleware";
import { AuthLoginCredentials, AuthSignInCredentials, create, list } from "../_network/api/users";
import { PaginationResponse } from "../_interfaces/pagination";


interface AuthContextData {
    user: IUser | null;
    logIn(credentials: AuthLoginCredentials): Promise<void>;
    signIn(credentials: AuthSignInCredentials): Promise<void>;
    signOut(): Promise<void> | void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/* ---------------------- */

export const AuthProvider = ( {children}:{ children: React.ReactNode})=>{
    const [user, setUser] = useState<IUser | null>(StorageMiddleware.getContent<IUser>(StorageKeys.USER))
    function signOut() {
        StorageMiddleware.removeContent(StorageKeys.USER)
        setUser(null);
    }
    async function logIn({ email, password }: AuthLoginCredentials) {
        const response = await list();
        let data: IUser[] = []
        if (Array.isArray(data)) {
            data = response as IUser[]
        } else {
            const paginationData = response as PaginationResponse<IUser>
            data = paginationData.data  
        }
        const currentUser = data.find(user => user.password === password && user.email.toLocaleLowerCase() == email.toLocaleLowerCase())
        if (data.length == 0 || !currentUser) {
            throw new Error('Invalid credentials!');
        }
        StorageMiddleware.setContent<IUser>(StorageKeys.USER, currentUser)
        setUser(currentUser);
    }
    async function signIn(data: AuthSignInCredentials){
        await create(data)
    }

    // memoize
    const providerData = useMemo(
        () => ({
            user,
            logIn,
            signIn,
            signOut
        }),
        [user]
    );

    return (
        <AuthContext.Provider value={providerData}>
            {children}
        </AuthContext.Provider>
    );

}

export const useAuth = () :AuthContextData =>{
    const context = useContext(AuthContext);
    if (!context)
        throw new Error('useAuth must be used within an AuthProvider');
    return context;
}