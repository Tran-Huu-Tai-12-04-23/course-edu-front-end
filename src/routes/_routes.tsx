import { ReactNode } from 'react';
import { path } from '../enum/path';
import Home from '../pages/home';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Dashboard from '../pages/admin';
import SummaryCourse from '../pages/course/Summary';
import Learning from '../pages/course/learning';
import CreatePost from '../pages/post/create';
import ViewPost from '../pages/post/view';
import CourseManagement from '../pages/admin/course';
import PostManagement from '../pages/admin/post';
import UserManagement from '../pages/admin/user';

export type routeProps = {
    path: string;
    component: ReactNode;
    type: typeRoute;
};
export enum typeRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST',
}
export enum typeRoute {
    PRIVATE_ROUTE = 'private_route',
    PROTECTED_ROUTE = 'protected_route',
    PUBLIC_ROUTE = 'public_route',
}
export const publicRoutes: routeProps[] = [
    {
        path: path.HOME,
        component: <Home />,
        type: typeRoute.PUBLIC_ROUTE,
    },
    {
        path: path.AUTH.LOGIN,
        component: <Login />,
        type: typeRoute.PUBLIC_ROUTE,
    },
    {
        path: path.AUTH.REGISTER,
        component: <Register />,
        type: typeRoute.PUBLIC_ROUTE,
    },
];
export const protectedRoutes: routeProps[] = [
    {
        path: path.ADMIN.DASHBOARD,
        component: <Dashboard />,
        type: typeRoute.PROTECTED_ROUTE,
    },
    {
        path: path.ADMIN.COURSE,
        component: <CourseManagement />,
        type: typeRoute.PROTECTED_ROUTE,
    },
    {
        path: path.ADMIN.POST,
        component: <PostManagement />,
        type: typeRoute.PROTECTED_ROUTE,
    },
    {
        path: path.ADMIN.USER,
        component: <UserManagement />,
        type: typeRoute.PROTECTED_ROUTE,
    },
];
export const privateRoutes: routeProps[] = [
    {
        path: path.COURSE.SUMMARY + '/:courseId',
        component: <SummaryCourse />,
        type: typeRoute.PRIVATE_ROUTE,
    },
    {
        path: path.POST.CREATE,
        component: <CreatePost />,
        type: typeRoute.PRIVATE_ROUTE,
    },
    {
        path: path.POST.VIEW,
        component: <ViewPost />,
        type: typeRoute.PRIVATE_ROUTE,
    },
];

export const learningRoutes: routeProps[] = [
    {
        path: path.COURSE.LEARNING + '/:courseId',
        component: <Learning />,
        type: typeRoute.PRIVATE_ROUTE,
    },
];
