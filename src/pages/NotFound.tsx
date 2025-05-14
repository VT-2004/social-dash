
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-[#0f0f25] text-white">
      <div className="text-center glass-card p-12 rounded-xl">
        <h1 className="text-4xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-gray-300 mb-8">Oops! Page not found</p>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="bg-primary/80 hover:bg-primary px-6 py-3 rounded-lg transition-colors">
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
