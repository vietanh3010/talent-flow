//primereact icon style
import 'primeicons/primeicons.css';
//primereact config
import PrimeReact from 'primereact/api';
//primereact core
import "primereact/resources/primereact.min.css";
import { memo } from 'react';
import './app.scss';
import useI18n from './hooks/useI18n';
import AppRouter from './routers/AppRouter';
//primereact theme
// import "primereact/resources/themes/lara-light-blue/theme.css";
import "./theme/customized-lara-light-blue-primereact.css";
import './i18n/i18n';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//use in a component
PrimeReact.inputStyle = 'filled';
PrimeReact.ripple = true;

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: true,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry: 1,
            retryDelay: 3000,
        },
    },
})

const App = (): JSX.Element => {
    useI18n();
    
    return (
        <QueryClientProvider client={queryClient}>
            <AppRouter/>
        </QueryClientProvider>
    )
}

export default memo(App)
