// app/page.tsx
export default function HomePage() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          พรีออเดอร์เสื้อ
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          ยินดีต้อนรับสู่ DY ESAN SHOP
        </p>
      </section>

      {/* Featured Product */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold text-center text-white mb-6">
          สินค้าแนะนำ
        </h3>
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/50 rounded-xl p-6 text-center">
          <div className="w-full max-w-xs h-[400px] mx-auto mb-6 bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center">
            <img
              src="https://img5.pic.in.th/file/secure-sv1/Black-and-White-Minimalist-T-Shirt-Instagram-Post-3.png"
              alt="NEW COLLECTION ESAN"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h4 className="text-xl font-bold text-red-400 mb-2">NEW COLLECTION ESAN</h4>
          <div className="text-2xl font-bold text-red-400 mb-4">฿259</div>
        </div>
      </section>
    </div>
  );
}
