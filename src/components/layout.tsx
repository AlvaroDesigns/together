import { Footer, Header } from "@/components";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col h-full">
      <Header />
      <div className="container flex-grow mx-auto max-w-7xl">
        {children}
        <Toaster
          richColors
          toastOptions={{
            className: "my-toast",
          }}
          mobileOffset={{ bottom: "16px" }}
          position="bottom-center"
        />
      </div>
      <Footer />
    </div>
  );
}
