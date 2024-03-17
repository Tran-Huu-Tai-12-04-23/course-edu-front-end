import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { IUser } from '../model/User.model';
import helper from '../helper';

interface AuthContextProps {
    children: ReactNode;
}

interface AuthContextValue {
    user: IUser | null;
    isAuthenticated: boolean;
    login: (user: IUser) => void;
    logout: () => void;
}

export enum typeTheme {
    DARK_MODE = 'dark',
    LIGHT_MODE = 'light',
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<any>(null);
    const [user, setUser] = useState<IUser | null>(null);
    const login = (user: IUser) => {
        setIsAuthenticated(true);
        setUser(user);
    };
    const logout = () => {
        helper.logout();
        setIsAuthenticated(false);
        setUser(null);
    };
    useEffect(() => {
        const accessToken = helper.getToken();
        const isAuth = accessToken !== null;
        setIsAuthenticated(isAuth);
    }, []);

    return <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};
