import { Outlet } from "react-router-dom";
import { useAuth } from "../../_hooks/auth";
import { Header } from "../../_components/Header";
import { Navigation } from "../../_components/Navigation";
import { useNotificationStore } from "../../_stores/notification";

export const Home = ()=>{
    const { user } = useAuth();
    const {addNotification} = useNotificationStore()
    return (!user ? 
        <div>
            <Header.Root>
                <Header.Empty />
                <span>Logo</span>
                <Navigation.Root>
                    <Navigation.Item to={'/test'} text="Test"/>
                    <Navigation.Item to={'login'} text="Login"/>
                </Navigation.Root>
            </Header.Root>
            <button onClick={()=>{
                addNotification({id: 'aaa', message:'aasda'})
            }} >test Notification</button>
            <Outlet />
        </div>
        :
        <h1>Welcome, {user.name}</h1>
    )
}