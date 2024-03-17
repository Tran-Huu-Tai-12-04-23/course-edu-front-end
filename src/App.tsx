import { Navigate, Route, Routes } from 'react-router-dom';
import { learningRoutes, privateRoutes, protectedRoutes, publicRoutes, typeRole } from './routes/_routes';
import { path } from './enum/path';
import MainLayout from './layouts/MainLayout';
import { useEffect } from 'react';
import { useTheme } from './context/themeContext';
import LearningLayout from './layouts/LearningLayout';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/authContext';

export default function App() {
    const { isAuthenticated } = useAuth();
    // const isAllowed = typeRole.ADMIN === typeRole.ADMIN && isAuthenticated;
    const { theme } = useTheme();

    useEffect(() => {
        theme && localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <>
            <Toaster
                position="top-center"
                containerStyle={{
                    zIndex: 10000000,
                }}
                toastOptions={{
                    style: {
                        background: theme ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.5)',
                        color: theme ? 'white' : 'black',
                        backdropFilter: 'blur(20rem)',
                        userSelect: 'none',
                    },
                }}
            />
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
                    <Route key={index} path={route.path} element={route.component} />
                ))}
            </Routes>
        </>
    );
}
