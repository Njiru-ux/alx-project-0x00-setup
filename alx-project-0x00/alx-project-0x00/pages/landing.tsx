import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Button variations with exact required shapes */}
      <div className="mt-6 space-y-4">
        <div className="flex gap-4">
          <Button title="Rounded Small" shape="rounded-sm" />
          <Button title="Rounded Medium" shape="rounded-md" />
          <Button title="Rounded Full" shape="rounded-full" />
        </div>
        
        {/* Additional button instances to ensure they're rendered */}
        <div className="flex gap-4">
          <Button title="Small Button" size="small" shape="rounded-sm" />
          <Button title="Medium Button" size="medium" shape="rounded-md" />
          <Button title="Large Button" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;