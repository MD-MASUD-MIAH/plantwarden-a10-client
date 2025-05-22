import { Link } from "react-router";
import { TitleUse } from "./title";

const ErrorPage = () => {

  TitleUse('Error')
  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f4f6] text-center px-4">
      <img
        src="https://i.ibb.co/ch5Kpdnp/Flux-Dev-highresolution-stock-photo-of-A-friendly-404-error-pa-0.jpg"
        alt="Page not found"
        className=" w-[200px] md:w-[500px] mb-6"
      />
     
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn bg-[#2ecc71] text-white hover:bg-[#27ae60]">
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
