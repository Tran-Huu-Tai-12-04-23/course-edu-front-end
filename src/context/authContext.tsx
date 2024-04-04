import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { IUser } from '../model/User.model';
import helper from '../helper';
import { Roles } from '../App';
import { IToken } from '../model/Token.model';

interface AuthContextProps {
    children: ReactNode;
}

interface AuthContextValue {
    user: IUser | null;
    isAuthenticated: boolean;
    login: (user: IUser, token: IToken) => void;
    logout: () => void;
    role: Roles | null;
    onUpdateUser: (user: IUser) => void;
}

export enum typeTheme {
    DARK_MODE = 'dark',
    LIGHT_MODE = 'light',
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<any>(null);
    const [user, setUser] = useState<IUser | null>(null);
    const [role, setRole] = useState<Roles | null>(Roles.STUDENT);
    const login = (user: IUser, token: IToken) => {
        setIsAuthenticated(true);
        setUser(user);
        setRole(Roles.ADMIN);
        helper.login(token);
        helper.saveUserData(user);
    };
    const logout = () => {
        helper.logout();
        setIsAuthenticated(false);
        setUser(null);
        setRole(null);
    };

    const onUpdateUser = (user: IUser) => {
        helper.saveUserData(user);
        setUser(user);
    };
    useEffect(() => {
        const accessToken = helper.getToken();
        const isAuth = accessToken !== null;
        setIsAuthenticated(isAuth);

        const user = helper.getUserData();

        user && setUser(user);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout, role, onUpdateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};
