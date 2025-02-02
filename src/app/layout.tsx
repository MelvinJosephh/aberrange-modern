// src/app/layout.tsx
import Header from '@/components/header';   // Import the Header component
import Footer from '@/components/footer';   // Import the Footer component
import '@/styles/globals.scss'; 
import 'font-awesome/css/font-awesome.min.css';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Aberrange</title>
        {/* Other head elements like metadata, fonts, etc. */}
      </head>
      <body>
        <Header />   {/* Always show Header */}
        <main>
          {children}  {/* This is where the content of each page will be injected */}
        </main>
        <Footer />   {/* Always show Footer */}
      </body>
    </html>
  );
}
