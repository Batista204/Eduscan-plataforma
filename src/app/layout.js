import "./globals.css";

export const metadata = {
  title: "EduScan AI",
  description: "Plataforma Inteligente de Estudos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}