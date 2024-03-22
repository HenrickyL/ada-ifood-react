import { useEffect } from 'react';
import { NotificationContainer } from '../_components/NotificationContainer';
import {AuthProvider} from './auth';
import {ThemeProvider} from './theme';


export const Providers = ({ children }: { children: React.ReactNode })=>{
    useEffect(() => {
        document.title = import.meta.env.VITE_APP_NAME
      }, []);
    return (
        <AuthProvider>
            <ThemeProvider>
                {children}
                <NotificationContainer />
            </ThemeProvider>
        </AuthProvider>
    )
}