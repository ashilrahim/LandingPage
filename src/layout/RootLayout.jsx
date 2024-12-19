import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';


export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}