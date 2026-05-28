import "./globals.css";

export const metadata = {
  title: "NeoStream",
  description: "Modern OTT Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}