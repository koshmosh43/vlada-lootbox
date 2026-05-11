import "./styles/globals.css";

export const metadata = {
  title: 'Vlada Melnyk',
  description: 'Lootboxes Opening Simulator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
