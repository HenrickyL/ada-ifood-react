import { NotificationContainer } from '../_components/NotificationContainer';
import {AuthProvider} from './auth';
import {ThemeProvider} from './theme';


export const Providers = ({ children }: { children: React.ReactNode })=>{
    return (
        <AuthProvider>
            <ThemeProvider>
                {children}
                <NotificationContainer />
            </ThemeProvider>
        </AuthProvider>
    )
}