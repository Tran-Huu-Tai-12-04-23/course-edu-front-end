import { ReactNode } from 'react';
import { path } from '../enum/path';
import Home from '../pages/home';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import Dashboard from '../pages/admin/dashboard';
import SummaryCourse from '../pages/course/Summary';
import Learning from '../pages/course/learning';
import CreatePost from '../pages/post/create';
import ViewPost from '../pages/post/view';
import CourseManagement from '../pages/admin/course';
import PostManagement from '../pages/admin/post';
import UserManagement from '../pages/admin/user';
import DetailPost from '../pages/post/detail';
import AddPost from '../pages/admin/post/add';
import AddCourse from '../pages/admin/course/add';
import UserManagerPost from '../pages/user/manager-post';
import ManagerCategory from '../pages/admin/course/manager-category';

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
    {
        path: path.POST.DETAIL + '/:id',
        component: <DetailPost />,
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
        path: path.ADMIN.COURSE + '/add',
        component: <AddCourse />,
        type: typeRoute.PROTECTED_ROUTE,
    },
    {
        path: path.ADMIN.MANAGER_COURSE_CATEGORY,
        component: <ManagerCategory />,
        type: typeRoute.PROTECTED_ROUTE,
    },
    {
        path: path.ADMIN.POST,
        component: <PostManagement />,
        type: typeRoute.PROTECTED_ROUTE,
    },
    {
        path: path.ADMIN.POST + '/add',
        component: <AddPost />,
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
    {
        path: path.USER.MANAGER_POST,
        component: <UserManagerPost />,
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
