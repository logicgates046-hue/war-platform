import "./globals.css";

export const metadata = {
  title: "WAR — Which Are You In?",
  description: "WAR — Which Are You In?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
