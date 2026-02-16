export const metadata = {
  title: "Understanding adult social care",
  description: "A calm guide to how adult social care usually works in your area."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#fff" }}>{children}</body>
    </html>
  );
}
