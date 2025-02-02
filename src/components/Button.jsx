const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseStyles = "px-4 py-2 font-medium rounded-lg transition duration-200";
    const variants = {
      primary: "bg-blue-600 font-jura text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      danger: "bg-red-500 text-white hover:bg-red-600",
    };
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };

  export default Button;
  