import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>
      
      <div className="flex gap-4">
        <Button title="Button 1" shape="rounded-sm" />
        <Button title="Button 2" shape="rounded-md" />
        <Button title="Button 3" shape="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;