// alx-project-0x00/pages/landing.tsx
import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>

      {/* Button variants demo */}
      <div className="mt-8 flex flex-wrap gap-4">
        <Button title="Small"  styles="text-sm  rounded-sm"   />
        <Button title="Medium" styles="text-base rounded-md"  />
        <Button title="Large"  styles="text-lg  rounded-full" />
      </div>
    </div>
  );
};

export default Landing;