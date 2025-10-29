import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'พรีออเดอร์เสื้อ - DY ESAN SHOP',
  description: 'เว็บไซต์พรีออเดอร์เสื้อ DY ESAN SHOP',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="th" className="h-full">
      <body className="h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 font-sans text-white">
        {/* Header */}
        <header className="bg-black/80 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10">
                <img
                  src="https://img5.pic.in.th/file/secure-sv1/448205987_. _. 819_n-removebg-preview.png"
                  alt="DY ESAN SHOP Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-2xl font-bold text-white">DY ESAN SHOP</h1>
            </div>

            <nav className="hidden md:flex space-x-6">
              <a href="/" className="text-gray-300 hover:text-red-400 transition-colors">
                หน้าหลัก
              </a>
              <a href="/products" className="text-gray-300 hover:text-red-400 transition-colors">
                สินค้า
              </a>
              <a href="/contact" className="text-gray-300 hover:text-red-400 transition-colors">
                ติดต่อ
              </a>
              <a href="/admin" className="text-gray-300 hover:text-red-400 transition-colors">
                🔧 Admin
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-700 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center">
                <img
                  src="https://img5.pic.in.th/file/secure-sv1/448205987_. _. 819_n-removebg-preview.png"
                  alt="DY ESAN SHOP Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold">DY ESAN SHOP</span>
            </div>
            <div className="flex justify-center space-x-6">
              <span>📱 0621759759</span>
              <span>📍 ขอนแก่น</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
