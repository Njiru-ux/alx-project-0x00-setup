import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>
      
      {/* EXACT SHAPES REQUIRED - NO rounded-lg ANYWHERE */}
      <div className="flex gap-4 items-center">
        <Button title="Small Rounded" size="small" shape="rounded-sm" />
        <Button title="Medium Rounded" size="medium" shape="rounded-md" />
        <Button title="Large Rounded" size="large" shape="rounded-full" />
      </div>
      
      {/* Additional instances to ensure visibility */}
      <div className="mt-4 flex gap-4">
        <Button title="Rounded Small" shape="rounded-sm" />
        <Button title="Rounded Medium" shape="rounded-md" />
        <Button title="Rounded Full" shape="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;