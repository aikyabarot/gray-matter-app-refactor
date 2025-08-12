import React from 'react';
import { useAppData } from './hooks/useAppData';
import LoginPage from './pages/LoginPage';
import RootLayout from './layouts/RootLayout';
import { AppProvider } from './context/AppContext';

// The main App component now wraps the logic in the provider
const AppWithProvider = () => {
  const { activeUser, login, logout } = useAppData();

  if (!activeUser) {
    return <LoginPage onLogin={login} />;
  }

  return <RootLayout user={activeUser} onLogout={logout} />;
}

// App renders the provider and the main logic
export default function App() {
  return (
    <AppProvider>
      <AppWithProvider />
    </AppProvider>
  )
}