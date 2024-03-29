import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../_hooks/auth";
import { Header } from "../../_components/Header";
import { Navigation } from "../../_components/Navigation";
import { CartButton } from "../../_components/CartButton";
import { Icon } from "../../_components/Icon";
import { 
    FaSignInAlt as LoginIcon,
    FaSignOutAlt as LogoutIcon } from "react-icons/fa";
import { useProductStore } from "../../_stores/product";
export const Home = ()=>{
    const { user, signOut } = useAuth();
    const {cart} = useProductStore()
    const navigate = useNavigate()
    return (
        <div>
            <Header.Root>
                <Header.Logo src="logo.png"/>
                <Navigation.Root>
                    <Navigation.Item to='' text="Home" />
                    <Navigation.Item to='/products' text="Produtos" />

                    {!user ? 
                        <Navigation.Item type="primary" to='login' >
                            <Icon icon={LoginIcon} size={18}/>
                            <span>Login</span>
                        </Navigation.Item>:  
                        <Header.Button onClick={()=> {signOut();navigate('/')}} 
                            size={18} icon={LogoutIcon} text="Logout" />
                    }
                    <Navigation.Item to='/cart'>
                        <CartButton value={cart.length}/>
                    </Navigation.Item>
                </Navigation.Root>
            </Header.Root>
            <main>
                <Outlet />
            </main>
        </div>
    )
}