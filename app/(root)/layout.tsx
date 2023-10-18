import "../globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mt-24">{children}</main>
      </body>
    </html>
  );
}
