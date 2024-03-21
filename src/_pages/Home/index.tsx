import { Outlet } from "react-router-dom";
import { useAuth } from "../../_hooks/auth";
import { Header } from "../../_components/Header";
import { Navigation } from "../../_components/Navigation";

export const Home = ()=>{
    const { user } = useAuth();
    return (!user ? 
        <div>
            <Header.Root>
                <Header.Empty />
                <span>Logo</span>
                <Navigation.Root>
                    <Navigation.Item to={'/test'} text="Test"/>
                    <Navigation.Item to={'cart'} text="cart"/>
                </Navigation.Root>
            </Header.Root>
            <Outlet />
        </div>
        :
        <h1>Welcome, {user.name}</h1>
    )
}