import "@/styles/_globals.scss";

export const metadata = {
  title: "Mikołaj Jakubowski | Portfolio",
  description:
    "Looking for someone to help you create a modern website? You came to the right place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
