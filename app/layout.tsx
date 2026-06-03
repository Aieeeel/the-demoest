
import './globals.css';

export const metadata = {
  title: 'AIEL',
  description: 'Accumulate. Invest. Evolve. Legacy.'
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
