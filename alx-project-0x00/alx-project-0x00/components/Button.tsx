import React from "react";
import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ 
  title, 
  size = 'medium',
  shape = 'rounded-md',
  className = ''
}) => {
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base', 
    large: 'px-6 py-3 text-lg'
  };

  const baseStyles = 'font-medium bg-blue-500 text-white hover:bg-blue-600 transition-colors';

  return (
    <button className={`${baseStyles} ${sizeClasses[size]} ${shape} ${className}`}>
      {title}
    </button>
  );
};

export default Button;