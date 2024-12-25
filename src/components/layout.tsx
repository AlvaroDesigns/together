import { Footer, Header } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col h-full">
      <Header />
      <div className="container flex-grow mx-auto max-w-7xl">{children}</div>
      <Footer />
    </div>
  );
}
