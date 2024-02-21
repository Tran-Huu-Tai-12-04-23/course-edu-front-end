import { Navigate, Route, Routes } from 'react-router-dom';
import { learningRoutes, privateRoutes, protectedRoutes, publicRoutes, typeRole, typeRoute } from './routes/_routes';
import { path } from './enum/path';
import MainLayout from './layouts/MainLayout';
import { useEffect } from 'react';
import { useTheme } from './context/themeContext';
import LearningLayout from './layouts/LearningLayout';

export default function App() {
    const isAuthenticated = true;
    const isAllowed = typeRole.ADMIN === typeRole.ADMIN && isAuthenticated;
    const { theme } = useTheme();

    useEffect(() => {
        theme && localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <>
            <Routes>
                {/* Public Routes */}
                {publicRoutes.map((route, index) => (
                    <Route key={index} path={route.path} element={<MainLayout>{route.component}</MainLayout>} />
                ))}

                {/* Private Routes */}
                {privateRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            isAuthenticated ? (
                                <MainLayout>{route.component}</MainLayout>
                            ) : (
                                <Navigate to={path.AUTH.LOGIN} />
                            )
                        }
                    />
                ))}

                {/* learning routes */}
                {learningRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            isAuthenticated ? (
                                <LearningLayout>{route.component}</LearningLayout>
                            ) : (
                                <Navigate to={path.AUTH.LOGIN} />
                            )
                        }
                    />
                ))}

                {/* Protected Routes */}
                {protectedRoutes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            isAuthenticated && typeRole.ADMIN === typeRole.ADMIN ? (
                                route.component
                            ) : (
                                <Navigate to={path.HOME} />
                            )
                        }
                    />
                ))}
            </Routes>
        </>
    );
}
