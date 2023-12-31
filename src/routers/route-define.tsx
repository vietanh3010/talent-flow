import MainLayout from '@/layouts/MainLayout';
import { RouteExtends } from '@/types/route.type';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// pages
const HomeModule = lazy(() => import('@/pages/Home'));
const CurriculumVitaeModule = lazy(() => import('@/pages/CurriculumVitae'));
//404
const NotFoundModule = lazy(() => import('@/pages/NotFound'));

const routes: RouteExtends[] = [
    {
        path: '/',
        element: (
            <MainLayout/>
        ),
        children: [
            {
                path: '',
                index: true,
                element: <Navigate to="/home"/>,
            },
            {
                path: 'home',
                element: <HomeModule/>,
            },
            {
                path: 'cv',
                element: <CurriculumVitaeModule/>,
            },
            {
                path: '*',
                element: <NotFoundModule />,
            },
        ],
        // handle:{
        //     crumb: () => <BreadCrumbLink linkTo={"sessions"} label="ekyc-session-managements"/>,
        // }
    },
]

export default routes;