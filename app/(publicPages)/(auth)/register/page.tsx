import { RegisterCard } from "@/components/featureSpecific/register-card";
import React from "react";

const page = () => {
  return (
    <section className="w-full min-h-[80vh] flex items-start justify-center pt-10 md:pt-12">
      <RegisterCard />
    </section>
  );
};

export default page;
