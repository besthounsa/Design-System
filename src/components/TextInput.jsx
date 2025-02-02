const TextInput = ({ label, type = "text", placeholder, value, onChange, className = "" }) => {
    return (
      <div className={`flex flex-col space-y-1 ${className}`}>
        {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    );
  };
  
  export default TextInput;
  