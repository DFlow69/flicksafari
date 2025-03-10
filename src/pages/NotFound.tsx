
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Layout from "../components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container px-4 md:px-6 flex flex-col items-center justify-center min-h-[70vh] text-center">
        <div className="animate-slide-down">
          <div className="inline-block text-9xl font-bold mb-6 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
            404
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Page not found</h1>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
          </p>
          <Link 
            to="/movies" 
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
