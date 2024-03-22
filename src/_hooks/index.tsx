import { useEffect } from 'react';
import { NotificationContainer } from '../_components/NotificationContainer';
import {AuthProvider} from './auth';
import {ThemeProvider} from './theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            gcTime: 5 * 60_000,
            staleTime: 5_000
        }
    }
});

export const Providers = ({ children }: { children: React.ReactNode })=>{
    useEffect(() => {
        document.title = import.meta.env.VITE_APP_NAME
      }, []);
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <ThemeProvider>
                    {children}
                    <NotificationContainer />
                </ThemeProvider>
            </AuthProvider>
        </QueryClientProvider>
    )
}