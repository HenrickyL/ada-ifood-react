import { createContext, useContext, useMemo, useState } from "react";
import { User } from "../_interfaces/user";
import { client} from '../_network/api'
import { StorageKeys, StorageMiddleware } from "../_middlewares/StorageMiddleware";
import { AuthLoginCredentials, AuthSignInCredentials } from "../_network/api/users";



interface AuthContextData {
    user: User | null;
    logIn(credentials: AuthLoginCredentials): Promise<void>;
    signIn(credentials: AuthSignInCredentials): Promise<void>;
    signOut(): Promise<void> | void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

/* ---------------------- */

export const AuthProvider = ( {children}:{ children: React.ReactNode})=>{
    const [user, setUser] = useState<User | null>(StorageMiddleware.getContent<User>(StorageKeys.USER))
    function signOut() {
        StorageMiddleware.removeContent(StorageKeys.USER)
        setUser(null);
    }
    async function logIn({ email, password }: AuthLoginCredentials) {
        const { data } = await client.get<User[]>(`users?email=${email}`);

        if (data.length == 0 || data[0].password !== password) {
            throw new Error('Invalid credentials!');
        }
        const currentUser =data[0]
        StorageMiddleware.setContent<User>(StorageKeys.USER, currentUser)
        setUser(currentUser);
    }
    async function signIn(data: AuthSignInCredentials){

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