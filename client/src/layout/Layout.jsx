import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Matrix Design Studio & Labs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
