import { useAppContext } from './context/AppContext';
import LoginPage from './features/auth/LoginPage';
import RootLayout from './layouts/RootLayout';

const App: React.FC = () => {
  const { activeUser } = useAppContext();

  if (!activeUser) {
    return <LoginPage />;
  }

  return (
    <RootLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Welcome, {activeUser.name}!
        </h1>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
          <p>Gray Matter Application is now running successfully.</p>
          <p className="mt-2">Role: <span className="font-medium">{activeUser.role}</span></p>
        </div>
      </div>
    </RootLayout>
  );
};

export default App;