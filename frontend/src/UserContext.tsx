import React, { createContext, useState, useContext, ReactNode } from 'react';

// define shape of context
interface User {
    user: string | null;
}

// create type
interface UserContextType {
    user: User | null;
    login: (user : User) => void;
    logout: () => void;
}

// create context
const UserContext = createContext<UserContextType | undefined>(undefined);

// create provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (user: User) => setUser(user);
    const logout = () => setUser(null);

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  };