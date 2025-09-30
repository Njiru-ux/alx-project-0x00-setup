import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-extralight mb-6">Landing Page</h1>

      {/* Explicit buttons with each required shape */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Button Shapes:</h2>
        
        {/* Individual buttons with each shape */}
        <Button title="Button with rounded-sm" shape="rounded-sm" />
        <Button title="Button with rounded-md" shape="rounded-md" />
        <Button title="Button with rounded-full" shape="rounded-full" />
        
        {/* Group of buttons showing all shapes together */}
        <div className="flex gap-4 mt-4">
          <Button title="rounded-sm" shape="rounded-sm" />
          <Button title="rounded-md" shape="rounded-md" />
          <Button title="rounded-full" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;