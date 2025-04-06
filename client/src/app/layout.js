import Layout from "@/components/layout/Layout";
import "./globals.css";

export const metadata = {
  title: "Your Brand",
  description: "Your brand description here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
