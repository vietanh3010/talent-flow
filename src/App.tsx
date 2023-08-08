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
//use in a component
PrimeReact.inputStyle = 'filled';
PrimeReact.ripple = true;

const App = (): JSX.Element => {
    useI18n();
    
    return (
        <>
            <AppRouter/>
        </>
    )
}

export default memo(App)
