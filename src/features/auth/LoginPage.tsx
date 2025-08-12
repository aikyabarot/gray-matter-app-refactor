import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAppContext();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simplified login - in a real app you'd validate password
    if (password === "password" || password === "") {
      login(email);
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex">
      {/* Left Panel */}
      <div className="w-1/2 h-full bg-slate-900 p-12 text-white flex flex-col justify-between">
        <h1 className="text-3xl font-bold">Gray Matter</h1>
        <p className="text-4xl font-bold leading-tight">Transform Recruitment into a Strategic Advantage.</p>
        <div/>
      </div>
      {/* Right Panel */}
      <div className="w-1/2 h-full bg-slate-50 flex items-center justify-center">
        <div className="w-full max-w-sm p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Welcome Back</h2>
          <p className="text-sm text-slate-500 mb-8">Sign in to continue</p>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
              <input 
                id="email" 
                type="email" 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Try: admin@graymatter.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
              <input 
                id="password" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Use 'password' or leave empty"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button type="submit" className="w-full py-3 text-white bg-teal-600 hover:bg-teal-700 rounded-md">Sign In</button>
          </form>
          
          <div className="mt-6 text-xs text-slate-500">
            <p>Demo accounts:</p>
            <ul className="mt-1 space-y-1">
              <li>admin@graymatter.com</li>
              <li>recruiter@graymatter.com</li>
              <li>manager@graymatter.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;