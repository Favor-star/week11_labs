import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { SessionProvider } from "next-auth/react";

const HomePagesLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <main className="w-full mx-auto max-w-screen-xl px-4">
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </main>
      <Footer />
    </>
  );
};

export default HomePagesLayout;
