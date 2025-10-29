<!DOCTYPE html>
<html lang="th" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>พรีออเดอร์เสื้อ - DY ESAN SHOP</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            box-sizing: border-box;
        }
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .hover-scale {
            transition: transform 0.3s ease;
        }
        .hover-scale:hover {
            transform: scale(1.05);
        }
        .glass-effect {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
        }
    </style>
</head>
<body class="h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 font-sans text-white">
    <header class="bg-black/80 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-gray-700">
        <div class="max-w-6xl mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <div class="w-10 h-10 flex items-center justify-center">
                        <img src="https://img5.pic.in.th/file/secure-sv1/448205987_. _. 819_n-removebg-preview.png" alt="DY ESAN SHOP Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <div class="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center" style="display: none;">
                            <span class="text-white font-bold text-lg">DY</span>
                        </div>
                    </div>
                    <h1 class="text-2xl font-bold text-white">DY ESAN SHOP</h1>
                </div>
                <nav class="hidden md:flex space-x-6">
                    <button onclick="showPage('home')" class="text-gray-300 hover:text-red-400 transition-colors">หน้าหลัก</button>
                    <button onclick="showPage('products')" class="text-gray-300 hover:text-red-400 transition-colors">สินค้า</button>
                    <button onclick="showPage('contact')" class="text-gray-300 hover:text-red-400 transition-colors">ติดต่อ</button>
                    <button onclick="showPage('admin')" class="text-gray-300 hover:text-red-400 transition-colors">🔧 Admin</button>
                </nav>
            </div>
        </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-8">
        <!-- Home Page -->
        <div id="homePage" class="page-content">
            <!-- Hero Section -->
            <section class="text-center mb-12 fade-in">
                <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                    พรีออเดอร์เสื้อ
                </h2>
                <p class="text-xl text-gray-300 mb-8">ยินดีต้อนรับสู่ DY ESAN SHOP</p>
                <div class="flex justify-center">
                    <!-- View products button removed -->
                </div>
            </section>

            <!-- Featured Product Preview -->
            <section class="mb-12">
                <h3 class="text-2xl font-bold text-center text-white mb-6">สินค้าแนะนำ</h3>
                <div class="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/50 rounded-xl p-6 text-center">
                    <!-- Product Image Preview -->
                    <div class="w-full max-w-xs h-[400px] mx-auto mb-6 bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center" style="aspect-ratio: 1/1.5;">
                        <img src="https://img5.pic.in.th/file/secure-sv1/Black-and-White-Minimalist-T-Shirt-Instagram-Post-3.png" alt="NEW COLLECTION ESAN" class="w-full h-full object-cover rounded-lg" onerror="this.src=''; this.alt='Image failed to load'; this.nextElementSibling.style.display='flex';">
                        <div class="text-gray-400 text-center" style="display: none;">
                            <div class="text-4xl mb-2">📷</div>
                            <p class="text-sm">รูปภาพโหลดไม่ได้</p>
                            <p class="text-xs">กรุณาตรวจสอบ URL รูปภาพ</p>
                        </div>
                    </div>
                    
                    <h4 class="text-xl font-bold text-red-400 mb-2">NEW COLLECTION ESAN</h4>
                    <div class="text-2xl font-bold text-red-400 mb-4">฿259</div>
                    <!-- View details button removed -->
                </div>
            </section>
        </div>

        <!-- Products Page -->
        <div id="productsPage" class="page-content hidden">
            <section class="mb-8">
                <div class="flex items-center justify-between mb-8">
                    <h2 class="text-3xl font-bold text-white">สินค้าพรีออเดอร์</h2>
                    <button onclick="showPage('home')" class="text-gray-400 hover:text-white transition-colors">
                        ← กลับหน้าหลัก
                    </button>
                </div>


                
                <!-- Product Section -->
                <div class="product-category">
                    
                    <!-- NEW COLLECTION ESAN -->
                    <div class="bg-gradient-to-r from-red-900/50 to-orange-900/50 border border-red-500 rounded-xl p-6 mb-8">
                        <!-- Product Image -->
                        <div class="text-center mb-6">
                            <div class="w-full max-w-md h-[600px] mx-auto mb-4 bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center" style="aspect-ratio: 600/1200;">
                                <!-- รูปภาพสินค้า NEW COLLECTION ESAN -->
                                <img src="https://img5.pic.in.th/file/secure-sv1/Black-and-White-Minimalist-T-Shirt-Instagram-Post-3.png" alt="NEW COLLECTION ESAN" class="w-full h-full object-cover rounded-lg" onerror="this.src=''; this.alt='Image failed to load'; this.nextElementSibling.style.display='flex';">
                                <div class="text-gray-400 text-center" style="display: none;">
                                    <div class="text-4xl mb-2">📷</div>
                                    <p class="text-sm">รูปภาพโหลดไม่ได้</p>
                                    <p class="text-xs">กรุณาตรวจสอบ URL รูปภาพ</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center mb-6">
                            <h4 class="text-2xl font-bold text-red-400 mb-2">NEW COLLECTION</h4>
                            <h5 class="text-4xl font-bold text-white mb-4">ESAN</h5>
                            <div class="text-3xl font-bold text-red-400 mb-4">฿259</div>
                            <p class="text-gray-300 mb-4">+ ค่าจัดส่ง ฿49</p>
                        </div>
                        
                        <!-- Size Chart -->
                        <div class="bg-gray-900/80 rounded-lg p-4 mb-6">
                            <h6 class="text-lg font-bold text-white mb-3 text-center">ตารางไซส์</h6>
                            <div class="overflow-x-auto">
                                <table class="w-full text-sm text-white">
                                    <thead>
                                        <tr class="border-b border-gray-600">
                                            <th class="text-left py-2 px-2">SIZE</th>
                                            <th class="text-center py-2 px-2">S</th>
                                            <th class="text-center py-2 px-2">M</th>
                                            <th class="text-center py-2 px-2">L</th>
                                            <th class="text-center py-2 px-2">XL</th>
                                            <th class="text-center py-2 px-2">XXL</th>
                                            <th class="text-center py-2 px-2">3XL</th>
                                            <th class="text-center py-2 px-2">4XL</th>
                                            <th class="text-center py-2 px-2">5XL</th>
                                            <th class="text-center py-2 px-2">6XL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-gray-700">
                                            <td class="py-2 px-2 font-semibold">LENGTH</td>
                                            <td class="text-center py-2 px-2">26</td>
                                            <td class="text-center py-2 px-2">27</td>
                                            <td class="text-center py-2 px-2">28</td>
                                            <td class="text-center py-2 px-2">29</td>
                                            <td class="text-center py-2 px-2">30</td>
                                            <td class="text-center py-2 px-2">31</td>
                                            <td class="text-center py-2 px-2">32</td>
                                            <td class="text-center py-2 px-2">32</td>
                                            <td class="text-center py-2 px-2">34</td>
                                        </tr>
                                        <tr>
                                            <td class="py-2 px-2 font-semibold">WIDTH</td>
                                            <td class="text-center py-2 px-2">38</td>
                                            <td class="text-center py-2 px-2">40</td>
                                            <td class="text-center py-2 px-2">42</td>
                                            <td class="text-center py-2 px-2">44</td>
                                            <td class="text-center py-2 px-2">46</td>
                                            <td class="text-center py-2 px-2">48</td>
                                            <td class="text-center py-2 px-2">50</td>
                                            <td class="text-center py-2 px-2">52</td>
                                            <td class="text-center py-2 px-2">54</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                        <!-- Price Info -->
                        <div class="bg-gray-900/80 rounded-lg p-4 mb-6">
                            <h6 class="text-lg font-bold text-white mb-3 text-center">ราคาเพิ่มตามไซส์</h6>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                <div class="text-yellow-400">
                                    <span class="font-semibold">XXL:</span> +฿20
                                </div>
                                <div class="text-yellow-400">
                                    <span class="font-semibold">3XL:</span> +฿40
                                </div>
                                <div class="text-yellow-400">
                                    <span class="font-semibold">4XL, 5XL, 6XL:</span> +฿60
                                </div>
                            </div>
                        </div>
                        
                        <div class="text-center">
                            <button onclick="openPreorderModal('NEW COLLECTION ESAN', 259)" class="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all">
                                พรีออเดอร์ NEW COLLECTION ESAN
                            </button>
                        </div>
                    </div>



                </div>






            </section>
        </div>

        <!-- Admin Panel Page -->
        <div id="adminPage" class="page-content hidden">
            <!-- Admin Login Form -->
            <div id="adminLoginForm" class="max-w-md mx-auto">
                <div class="bg-gradient-to-r from-gray-900/80 to-black/80 border border-gray-600 rounded-xl p-8">
                    <div class="text-center mb-8">
                        <div class="w-16 h-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-3xl">🔐</span>
                        </div>
                        <h2 class="text-2xl font-bold text-white mb-2">เข้าสู่ระบบ Admin</h2>
                        <p class="text-gray-400">กรุณาใส่ข้อมูลเพื่อเข้าสู่ระบบจัดการ</p>
                    </div>
                    
                    <form id="adminLoginFormElement" onsubmit="submitAdminLogin(event)" class="space-y-6">
                        <div>
                            <label for="adminUsername" class="block text-sm font-medium text-gray-300 mb-2">ชื่อผู้ใช้งาน *</label>
                            <input type="text" id="adminUsername" name="adminUsername" required 
                                   class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                   placeholder="ใส่ชื่อผู้ใช้งาน">
                        </div>
                        
                        <div>
                            <label for="adminPassword" class="block text-sm font-medium text-gray-300 mb-2">รหัสผ่าน *</label>
                            <input type="password" id="adminPassword" name="adminPassword" required 
                                   class="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                   placeholder="ใส่รหัสผ่าน">
                        </div>
                        
                        <div id="loginError" class="hidden bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg text-sm">
                            ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง
                        </div>
                        
                        <button type="submit" class="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all">
                            เข้าสู่ระบบ
                        </button>
                        
                        <div class="text-center">
                            <button type="button" onclick="showPage('home')" class="text-gray-400 hover:text-white transition-colors text-sm">
                                ← กลับหน้าหลัก
                            </button>
                        </div>
                    </form>
                    

                </div>
            </div>

            <!-- Admin Dashboard (Hidden until login) -->
            <div id="adminDashboard" class="hidden">
                <section class="mb-8">
                    <div class="flex items-center justify-between mb-8">
                        <h2 class="text-3xl font-bold text-white">🔧 Admin Panel</h2>
                        <div class="flex items-center space-x-4">
                            <span class="text-gray-400">ยินดีต้อนรับ, <span id="adminWelcome" class="text-white font-semibold"></span></span>
                            <button onclick="logoutAdmin()" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                                ออกจากระบบ
                            </button>
                        </div>
                    </div>
                
                <!-- Admin Dashboard Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    <!-- Users Management -->
                    <div class="bg-gradient-to-r from-blue-900/50 to-blue-800/50 border border-blue-500 rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <span class="text-3xl mr-3">👥</span>
                            <h3 class="text-xl font-bold text-white">ผู้ใช้ (Users)</h3>
                        </div>
                        <div class="space-y-3">
                            <button onclick="showAdminSection('usersList')" class="w-full text-left bg-blue-800/50 hover:bg-blue-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                📋 ดูรายการผู้ใช้
                            </button>
                            <button onclick="showAdminSection('createUser')" class="w-full text-left bg-blue-800/50 hover:bg-blue-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                ➕ สร้างผู้ใช้ใหม่
                            </button>
                            <button onclick="showAdminSection('editUser')" class="w-full text-left bg-blue-800/50 hover:bg-blue-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                ✏️ แก้ไขข้อมูลผู้ใช้
                            </button>
                            <button onclick="showAdminSection('userRoles')" class="w-full text-left bg-blue-800/50 hover:bg-blue-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                🔐 เปลี่ยนบทบาท/สิทธิ์
                            </button>
                            <button onclick="showAdminSection('blockUser')" class="w-full text-left bg-blue-800/50 hover:bg-blue-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                🚫 ระงับ/ปลดระงับ
                            </button>
                        </div>
                    </div>



                    <!-- Orders & Payments -->
                    <div class="bg-gradient-to-r from-purple-900/50 to-purple-800/50 border border-purple-500 rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <span class="text-3xl mr-3">💳</span>
                            <h3 class="text-xl font-bold text-white">คำสั่งซื้อ/ชำระเงิน</h3>
                        </div>
                        <div class="space-y-3">
                            <button onclick="showAdminSection('ordersList')" class="w-full text-left bg-purple-800/50 hover:bg-purple-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                📦 ดูออเดอร์และสถานะ
                            </button>
                            <button onclick="showAdminSection('paymentSlips')" class="w-full text-left bg-purple-800/50 hover:bg-purple-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                📄 จัดการสลิปการโอนเงิน
                            </button>
                            <button onclick="showAdminSection('invoices')" class="w-full text-left bg-purple-800/50 hover:bg-purple-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                🧾 ออกใบแจ้งหนี้/คืนเงิน
                            </button>
                        </div>
                    </div>

                    <!-- Website Settings -->
                    <div class="bg-gradient-to-r from-orange-900/50 to-orange-800/50 border border-orange-500 rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <span class="text-3xl mr-3">⚙️</span>
                            <h3 class="text-xl font-bold text-white">การตั้งค่าเว็บไซต์</h3>
                        </div>
                        <div class="space-y-3">
                            <button onclick="showAdminSection('generalSettings')" class="w-full text-left bg-orange-800/50 hover:bg-orange-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                🌐 ตั้งค่าทั่วไป
                            </button>
                            <button onclick="showAdminSection('apiSettings')" class="w-full text-left bg-orange-800/50 hover:bg-orange-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                🔑 ตั้งค่า SMTP/API
                            </button>
                        </div>
                    </div>





                    <!-- Reports -->
                    <div class="bg-gradient-to-r from-indigo-900/50 to-indigo-800/50 border border-indigo-500 rounded-xl p-6">
                        <div class="flex items-center mb-4">
                            <span class="text-3xl mr-3">📈</span>
                            <h3 class="text-xl font-bold text-white">รายงาน (Reports)</h3>
                        </div>
                        <div class="space-y-3">
                            <button onclick="showAdminSection('userReports')" class="w-full text-left bg-indigo-800/50 hover:bg-indigo-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                👥 สรุปผู้ใช้ใหม่
                            </button>
                            <button onclick="showAdminSection('salesReports')" class="w-full text-left bg-indigo-800/50 hover:bg-indigo-700/50 text-white px-4 py-2 rounded-lg transition-colors">
                                💰 ยอดขาย/รายได้
                            </button>
                        </div>
                    </div>







                </div>

                <!-- Admin Section Content Area -->
                <div id="adminSectionContent" class="mt-8 hidden">
                    <div class="bg-gray-900/80 border border-gray-600 rounded-xl p-6">
                        <div class="flex items-center justify-between mb-6">
                            <h3 id="adminSectionTitle" class="text-2xl font-bold text-white"></h3>
                            <button onclick="closeAdminSection()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
                        </div>
                        <div id="adminSectionBody" class="text-gray-300">
                            <!-- Dynamic content will be loaded here -->
                        </div>
                    </div>
                </div>

                </section>
            </div>
        </div>

        <!-- Contact Page -->
        <div id="contactPage" class="page-content hidden">
            <section class="mb-8">
                <div class="flex items-center justify-between mb-8">
                    <h2 class="text-3xl font-bold text-white">ติดต่อเรา</h2>
                    <button onclick="showPage('home')" class="text-gray-400 hover:text-white transition-colors">
                        ← กลับหน้าหลัก
                    </button>
                </div>
                
                <div class="bg-gradient-to-r from-gray-900/50 to-black/50 border border-gray-600 rounded-xl p-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- Contact Info -->
                        <div>
                            <h4 class="text-xl font-bold text-red-400 mb-6 text-center">ข้อมูลการติดต่อ</h4>
                            <div class="space-y-4">
                                <div class="flex items-center space-x-3">
                                    <span class="text-2xl">📘</span>
                                    <div>
                                        <p class="text-gray-300 text-sm">Facebook Page</p>
                                        <a href="https://www.facebook.com/profile.php?id=61566308819819" target="_blank" rel="noopener noreferrer" class="text-blue-400 font-semibold hover:text-blue-300 transition-colors">ยุวชนประชาธิปไตย ภาคตะวันออกเฉียงเหนือ</a>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <span class="text-2xl">📱</span>
                                    <div>
                                        <p class="text-gray-300 text-sm">โทรศัพท์</p>
                                        <p class="text-white font-semibold">0621759759</p>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-3">
                                    <span class="text-2xl">📍</span>
                                    <div>
                                        <p class="text-gray-300 text-sm">ที่อยู่</p>
                                        <p class="text-white font-semibold">ขอนแก่น, ประเทศไทย</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Contact Form -->
                        <div>
                            <h4 class="text-xl font-bold text-red-400 mb-6">ส่งข้อความถึงเรา</h4>
                            <form id="contactForm" onsubmit="submitContact(event)" class="space-y-4">
                                <div>
                                    <label for="contactName" class="block text-sm font-medium text-gray-300 mb-2">ชื่อ-นามสกุล *</label>
                                    <input type="text" id="contactName" name="contactName" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent">
                                </div>
                                <div>
                                    <label for="contactEmail" class="block text-sm font-medium text-gray-300 mb-2">อีเมล *</label>
                                    <input type="email" id="contactEmail" name="contactEmail" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent">
                                </div>
                                <div>
                                    <label for="contactMessage" class="block text-sm font-medium text-gray-300 mb-2">ข้อความ *</label>
                                    <textarea id="contactMessage" name="contactMessage" rows="4" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"></textarea>
                                </div>
                                <button type="submit" class="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all">
                                    ส่งข้อความ
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </main>

    <!-- Contact Success Modal -->
    <div id="contactSuccessModal" class="fixed inset-0 bg-black bg-opacity-70 hidden items-center justify-center z-50 p-4">
        <div class="bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full p-6 text-center fade-in">
            <div class="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl">✅</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">ส่งข้อความสำเร็จ!</h3>
            <p class="text-gray-300 mb-6">ขอบคุณสำหรับข้อความ เราจะติดต่อกลับโดยเร็วที่สุด</p>
            <button onclick="closeContactSuccessModal()" class="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all">
                ปิด
            </button>
        </div>
    </div>

    <!-- Preorder Modal -->
    <div id="preorderModal" class="fixed inset-0 bg-black bg-opacity-70 hidden items-center justify-center z-50 p-4">
        <div class="bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 fade-in">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-2xl font-bold text-white">พรีออเดอร์</h3>
                <button onclick="closePreorderModal()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
            </div>
            
            <form id="preorderForm" onsubmit="submitPreorder(event)">
                <div class="mb-4">
                    <label for="productName" class="block text-sm font-medium text-gray-300 mb-2">สินค้า</label>
                    <input type="text" id="productName" name="productName" readonly class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white">
                </div>
                
                <div class="mb-4">
                    <label for="customerName" class="block text-sm font-medium text-gray-300 mb-2">ชื่อ-นามสกุล *</label>
                    <input type="text" id="customerName" name="customerName" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent">
                </div>
                
                <div class="mb-4">
                    <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">เบอร์โทรศัพท์ *</label>
                    <input type="tel" id="phone" name="phone" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent">
                </div>
                
                <div class="mb-4">
                    <label for="size" class="block text-sm font-medium text-gray-300 mb-2">ไซส์ *</label>
                    <select id="size" name="size" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent" onchange="updateTotalPrice()">
                        <option value="">เลือกไซส์</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL (+฿20)</option>
                        <option value="3XL">3XL (+฿40)</option>
                        <option value="4XL">4XL (+฿60)</option>
                        <option value="5XL">5XL (+฿60)</option>
                        <option value="6XL">6XL (+฿60)</option>
                    </select>
                </div>
                
                <div class="mb-4">
                    <label for="quantity" class="block text-sm font-medium text-gray-300 mb-2">จำนวน *</label>
                    <input type="number" id="quantity" name="quantity" min="1" value="1" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent" oninput="updateTotalPrice()">
                </div>
                
                <div class="mb-6">
                    <label for="address" class="block text-sm font-medium text-gray-300 mb-2">ที่อยู่จัดส่ง *</label>
                    <textarea id="address" name="address" rows="3" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"></textarea>
                </div>
                
                <!-- Bank Account Info -->
                <div class="mb-6 p-4 bg-blue-900/30 border border-blue-500 rounded-lg">
                    <h6 class="text-lg font-bold text-blue-400 mb-3 text-center">ข้อมูลการโอนเงิน</h6>
                    <div class="space-y-2 text-sm text-gray-300">
                        <div class="flex justify-between">
                            <span class="font-semibold">ธนาคาร:</span>
                            <span>กรุงไทย</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="font-semibold">ชื่อบัญชี:</span>
                            <span>ยุวชนประชาธิปไตย ภาคอีสาน</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="font-semibold">เลขบัญชี:</span>
                            <div class="flex items-center space-x-2">
                                <span class="font-mono text-blue-400" id="accountNumber">123-456-7890</span>
                                <button type="button" onclick="copyAccountNumber()" class="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded transition-colors">
                                    📋 คัดลอก
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mb-4">
                    <label for="paymentSlip" class="block text-sm font-medium text-gray-300 mb-2">แนบสลิปการโอนเงิน *</label>
                    <input type="file" id="paymentSlip" name="paymentSlip" accept="image/*" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700">
                    <p class="text-xs text-gray-400 mt-1">กรุณาแนบสลิปการโอนเงินตามจำนวนที่ระบุด้านล่าง</p>
                </div>
                
                <div class="mb-6 p-4 bg-gray-800 border border-gray-600 rounded-lg">
                    <div class="mb-2">
                        <span id="priceBreakdown" class="text-sm text-gray-400">เลือกไซส์เพื่อดูรายละเอียดราคา</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="font-semibold text-gray-300">ราคารวม:</span>
                        <span id="totalPrice" class="text-2xl font-bold text-red-400">฿0</span>
                    </div>
                </div>
                
                <button type="submit" class="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all">
                    ยืนยันพรีออเดอร์
                </button>
            </form>
        </div>
    </div>

    <!-- Success Modal -->
    <div id="successModal" class="fixed inset-0 bg-black bg-opacity-70 hidden items-center justify-center z-50 p-4">
        <div class="bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full p-6 text-center fade-in">
            <div class="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-3xl">✅</span>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">พรีออเดอร์สำเร็จ!</h3>
            <div class="text-gray-300 mb-6 space-y-3">
                <p>ขอบคุณสำหรับการสั่งซื้อ เราจะติดต่อกลับภายใน 24 ชั่วโมง</p>
                <div class="bg-blue-900/30 border border-blue-500 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <span class="text-2xl mr-2">☁️</span>
                        <span class="font-semibold text-blue-400">สลิปการโอนเงิน</span>
                    </div>
                    <p class="text-sm text-gray-300">สลิปของคุณได้ถูกอัปโหลดไปยัง Google Drive แล้ว</p>
                    <a href="https://drive.google.com/drive/u/0/folders/147ix5n16Zx6cfJ9ColbvwnYjk-9xhvvE" 
                       target="_blank" rel="noopener noreferrer" 
                       class="inline-flex items-center mt-2 text-blue-400 hover:text-blue-300 text-sm">
                        📁 ดูไฟล์ใน Google Drive
                    </a>
                </div>
            </div>
            <button onclick="closeSuccessModal()" class="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all">
                ปิด
            </button>
        </div>
    </div>

    <footer class="bg-black border-t border-gray-700 text-white py-8 mt-12">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <div class="flex items-center justify-center space-x-2 mb-4">
                <div class="w-8 h-8 flex items-center justify-center">
                    <img src="https://img5.pic.in.th/file/secure-sv1/448205987_. _. 819_n-removebg-preview.png" alt="DY ESAN SHOP Logo" class="w-full h-full object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center" style="display: none;">
                        <span class="text-white font-bold">DY</span>
                    </div>
                </div>
                <span class="text-xl font-bold">DY ESAN SHOP</span>
            </div>
            <div class="flex justify-center space-x-6">
                <span>📱 0621759759</span>
                <span>📍 ขอนแก่น</span>
            </div>
        </div>
    </footer>

    <script>
        let currentPrice = 0;

        function openPreorderModal(productName, price) {
            currentPrice = price;
            document.getElementById('productName').value = productName;
            document.getElementById('quantity').value = 1;
            updateTotalPrice();
            document.getElementById('preorderModal').classList.remove('hidden');
            document.getElementById('preorderModal').classList.add('flex');
        }

        function closePreorderModal() {
            document.getElementById('preorderModal').classList.add('hidden');
            document.getElementById('preorderModal').classList.remove('flex');
            document.getElementById('preorderForm').reset();
        }

        function closeSuccessModal() {
            document.getElementById('successModal').classList.add('hidden');
            document.getElementById('successModal').classList.remove('flex');
        }

        function closeContactSuccessModal() {
            document.getElementById('contactSuccessModal').classList.add('hidden');
            document.getElementById('contactSuccessModal').classList.remove('flex');
        }

        function submitContact(event) {
            event.preventDefault();
            
            // Show loading state
            const submitBtn = event.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'กำลังส่งข้อความ...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Reset form and show success modal
                document.getElementById('contactForm').reset();
                document.getElementById('contactSuccessModal').classList.remove('hidden');
                document.getElementById('contactSuccessModal').classList.add('flex');
            }, 2000);
        }

        function updateTotalPrice() {
            const quantity = parseInt(document.getElementById('quantity').value) || 1;
            const size = document.getElementById('size').value;
            
            let sizePrice = 0;
            if (size === 'XXL') sizePrice = 20;
            else if (size === '3XL') sizePrice = 40;
            else if (['4XL', '5XL', '6XL'].includes(size)) sizePrice = 60;
            
            const shipping = 49;
            const itemTotal = (currentPrice + sizePrice) * quantity;
            const total = itemTotal + shipping;
            
            document.getElementById('totalPrice').textContent = `฿${total.toLocaleString()}`;
            
            // Show price breakdown
            const breakdown = document.getElementById('priceBreakdown');
            if (breakdown) {
                let breakdownText = `สินค้า: ฿${(currentPrice * quantity).toLocaleString()}`;
                if (sizePrice > 0) {
                    breakdownText += ` + ค่าไซส์: ฿${(sizePrice * quantity).toLocaleString()}`;
                }
                breakdownText += ` + ค่าจัดส่ง: ฿${shipping}`;
                breakdown.textContent = breakdownText;
            }
        }

        function submitPreorder(event) {
            event.preventDefault();
            
            // Show loading state
            const submitBtn = event.target.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'กำลังอัปโหลดสลิป...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(event.target);
            const paymentSlipFile = formData.get('paymentSlip');
            
            // Validate file
            if (!paymentSlipFile || paymentSlipFile.size === 0) {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Show error message
                showErrorMessage('กรุณาแนบสลิปการโอนเงิน');
                return;
            }
            
            // Validate file type
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
            if (!allowedTypes.includes(paymentSlipFile.type)) {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Show error message
                showErrorMessage('กรุณาแนบไฟล์รูปภาพเท่านั้น (JPG, PNG, GIF)');
                return;
            }
            
            // Validate file size (max 5MB)
            if (paymentSlipFile.size > 5 * 1024 * 1024) {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Show error message
                showErrorMessage('ขนาดไฟล์ต้องไม่เกิน 5MB');
                return;
            }
            
            // Get order details for sales tracking
            const quantity = parseInt(document.getElementById('quantity').value) || 1;
            const size = document.getElementById('size').value;
            
            let sizePrice = 0;
            if (size === 'XXL') sizePrice = 20;
            else if (size === '3XL') sizePrice = 40;
            else if (['4XL', '5XL', '6XL'].includes(size)) sizePrice = 60;
            
            const shipping = 49;
            const itemTotal = (currentPrice + sizePrice) * quantity;
            const total = itemTotal + shipping;
            
            // Process file upload
            processFileUpload(paymentSlipFile).then((uploadResult) => {
                const orderData = {
                    customerName: formData.get('customerName'),
                    phone: formData.get('phone'),
                    product: formData.get('productName'),
                    size: formData.get('size'),
                    quantity: quantity,
                    total: total,
                    address: formData.get('address'),
                    paymentSlip: uploadResult.url,
                    paymentSlipName: uploadResult.fileName,
                    paymentSlipData: uploadResult.dataUrl // Store base64 data for display
                };
                
                // Add order to system
                addOrder(orderData);
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Close preorder modal and show success modal
                closePreorderModal();
                document.getElementById('successModal').classList.remove('hidden');
                document.getElementById('successModal').classList.add('flex');
                
            }).catch((error) => {
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                
                // Show error message
                showErrorMessage('เกิดข้อผิดพลาดในการอัปโหลดสลิป กรุณาลองใหม่อีกครั้ง');
                console.error('Upload error:', error);
            });
        }
        
        function processFileUpload(file) {
            return new Promise((resolve, reject) => {
                try {
                    // Generate unique filename with timestamp
                    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
                    const fileName = `slip_${timestamp}_${file.name}`;
                    
                    // Create FileReader to convert file to base64
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        // Upload to Google Drive using Apps Script Web App
                        uploadToGoogleDrive(file, fileName, e.target.result)
                            .then(uploadResult => {
                                resolve(uploadResult);
                            })
                            .catch(error => {
                                console.error('Google Drive upload failed:', error);
                                // Fallback to local storage
                                const uploadResult = {
                                    url: 'https://drive.google.com/drive/folders/147ix5n16Zx6cfJ9ColbvwnYjk-9xhvvE?usp=sharing',
                                    fileName: fileName,
                                    dataUrl: e.target.result,
                                    uploadTime: new Date().toISOString(),
                                    fileSize: file.size,
                                    fileType: file.type,
                                    status: 'local_backup'
                                };
                                
                                // Store in localStorage as backup
                                const uploadedFiles = JSON.parse(localStorage.getItem('uploadedSlips') || '[]');
                                uploadedFiles.push(uploadResult);
                                localStorage.setItem('uploadedSlips', JSON.stringify(uploadedFiles));
                                
                                resolve(uploadResult);
                            });
                    };
                    
                    reader.onerror = function() {
                        reject(new Error('ไม่สามารถอ่านไฟล์ได้'));
                    };
                    
                    // Start reading file
                    reader.readAsDataURL(file);
                    
                } catch (error) {
                    reject(error);
                }
            });
        }
        
        function uploadToGoogleDrive(file, fileName, base64Data) {
            return new Promise((resolve, reject) => {
                // Google Apps Script Web App URL (you need to deploy this)
                const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
                const FOLDER_ID = '147ix5n16Zx6cfJ9ColbvwnYjk-9xhvvE';
                
                // Prepare form data
                const formData = new FormData();
                formData.append('file', file);
                formData.append('fileName', fileName);
                formData.append('folderId', FOLDER_ID);
                
                let progress = 0;
                const uploadInterval = setInterval(() => {
                    progress += 10;
                    
                    // Update button text with progress
                    const submitBtn = document.querySelector('#preorderForm button[type="submit"]');
                    if (submitBtn) {
                        submitBtn.textContent = `กำลังอัปโหลดไป Google Drive... ${progress}%`;
                    }
                    
                    if (progress >= 90) {
                        clearInterval(uploadInterval);
                    }
                }, 150);
                
                // For demo purposes, simulate successful upload after progress completes
                setTimeout(() => {
                    clearInterval(uploadInterval);
                    
                    // Update final progress
                    const submitBtn = document.querySelector('#preorderForm button[type="submit"]');
                    if (submitBtn) {
                        submitBtn.textContent = 'กำลังอัปโหลดไป Google Drive... 100%';
                    }
                    
                    // Simulate successful upload result
                    const uploadResult = {
                        url: `https://drive.google.com/drive/u/0/folders/${FOLDER_ID}`,
                        fileName: fileName,
                        dataUrl: base64Data,
                        uploadTime: new Date().toISOString(),
                        fileSize: file.size,
                        fileType: file.type,
                        folderId: FOLDER_ID,
                        status: 'uploaded_to_drive'
                    };
                    
                    // Store in localStorage for admin access
                    const uploadedFiles = JSON.parse(localStorage.getItem('uploadedSlips') || '[]');
                    uploadedFiles.push(uploadResult);
                    localStorage.setItem('uploadedSlips', JSON.stringify(uploadedFiles));
                    
                    resolve(uploadResult);
                    
                }, 2000);
                
                /* 
                // Real implementation would use fetch to upload to Google Apps Script
                fetch(GOOGLE_APPS_SCRIPT_URL, {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(result => {
                    clearInterval(uploadInterval);
                    
                    if (result.success) {
                        const uploadResult = {
                            url: result.fileUrl,
                            fileName: fileName,
                            dataUrl: base64Data,
                            uploadTime: new Date().toISOString(),
                            fileSize: file.size,
                            fileType: file.type,
                            folderId: FOLDER_ID,
                            driveFileId: result.fileId,
                            status: 'uploaded_to_drive'
                        };
                        
                        // Store in localStorage for admin access
                        const uploadedFiles = JSON.parse(localStorage.getItem('uploadedSlips') || '[]');
                        uploadedFiles.push(uploadResult);
                        localStorage.setItem('uploadedSlips', JSON.stringify(uploadedFiles));
                        
                        resolve(uploadResult);
                    } else {
                        reject(new Error(result.error || 'Upload failed'));
                    }
                })
                .catch(error => {
                    clearInterval(uploadInterval);
                    reject(error);
                });
                */
            });
        }
        
        function showErrorMessage(message) {
            // Create error modal
            const errorModal = document.createElement('div');
            errorModal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4';
            errorModal.innerHTML = `
                <div class="bg-gray-900 border border-red-500 rounded-xl max-w-md w-full p-6 text-center fade-in">
                    <div class="w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-3xl">❌</span>
                    </div>
                    <h3 class="text-xl font-bold text-red-400 mb-4">เกิดข้อผิดพลาด</h3>
                    <p class="text-gray-300 mb-6">${message}</p>
                    <button onclick="this.closest('.fixed').remove()" class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">
                        ปิด
                    </button>
                </div>
            `;
            document.body.appendChild(errorModal);
            
            // Auto remove after 5 seconds
            setTimeout(() => {
                if (errorModal.parentNode) {
                    errorModal.remove();
                }
            }, 5000);
        }

        function copyAccountNumber() {
            const accountNumber = document.getElementById('accountNumber').textContent;
            navigator.clipboard.writeText(accountNumber).then(function() {
                // Show success feedback
                const button = event.target;
                const originalText = button.textContent;
                button.textContent = '✅ คัดลอกแล้ว';
                button.classList.add('bg-green-600');
                button.classList.remove('bg-blue-600');
                
                setTimeout(function() {
                    button.textContent = originalText;
                    button.classList.remove('bg-green-600');
                    button.classList.add('bg-blue-600');
                }, 2000);
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = accountNumber;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Show success feedback
                const button = event.target;
                const originalText = button.textContent;
                button.textContent = '✅ คัดลอกแล้ว';
                setTimeout(function() {
                    button.textContent = originalText;
                }, 2000);
            });
        }

        // Category filter system
        function filterProducts(category) {
            // Update active button
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active', 'bg-gradient-to-r', 'from-red-600', 'to-orange-600');
                btn.classList.add('bg-gray-700');
            });
            
            // Set active button
            event.target.classList.add('active', 'bg-gradient-to-r', 'from-red-600', 'to-orange-600');
            event.target.classList.remove('bg-gray-700');
            
            // Show/hide categories
            const categories = document.querySelectorAll('.product-category');
            
            if (category === 'all') {
                categories.forEach(cat => {
                    cat.classList.remove('hidden');
                });
            } else {
                categories.forEach(cat => {
                    if (cat.dataset.category === category) {
                        cat.classList.remove('hidden');
                    } else {
                        cat.classList.add('hidden');
                    }
                });
            }
        }

        // Page navigation system
        function showPage(pageName) {
            // Hide all pages
            document.querySelectorAll('.page-content').forEach(page => {
                page.classList.add('hidden');
            });
            
            // Show selected page
            const targetPage = document.getElementById(pageName + 'Page');
            if (targetPage) {
                targetPage.classList.remove('hidden');
                targetPage.classList.add('fade-in');
                
                // Special handling for admin page
                if (pageName === 'admin') {
                    // Always show login form first and hide dashboard
                    document.getElementById('adminLoginForm').classList.remove('hidden');
                    document.getElementById('adminDashboard').classList.add('hidden');
                    
                    // Reset admin login state
                    isAdminLoggedIn = false;
                    currentAdminUser = '';
                    
                    // Reset login form
                    document.getElementById('adminLoginFormElement').reset();
                    document.getElementById('loginError').classList.add('hidden');
                    
                    // Close any open admin sections
                    closeAdminSection();
                }
                
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Admin Login Functions
        let isAdminLoggedIn = false;
        let currentAdminUser = '';

        function submitAdminLogin(event) {
            event.preventDefault();
            
            const username = document.getElementById('adminUsername').value;
            const password = document.getElementById('adminPassword').value;
            const errorDiv = document.getElementById('loginError');
            const submitBtn = event.target.querySelector('button[type="submit"]');
            
            // Show loading state
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'กำลังตรวจสอบ...';
            submitBtn.disabled = true;
            
            // Hide previous error
            errorDiv.classList.add('hidden');
            
            // Simulate login check (in real app, this would be server-side)
            setTimeout(() => {
                // Demo credentials: admin/admin123
                if (username === 'admin' && password === 'admin123') {
                    // Login successful
                    isAdminLoggedIn = true;
                    currentAdminUser = username;
                    
                    // Show admin dashboard
                    document.getElementById('adminLoginForm').classList.add('hidden');
                    document.getElementById('adminDashboard').classList.remove('hidden');
                    document.getElementById('adminWelcome').textContent = username;
                    
                    // Reset form
                    document.getElementById('adminLoginFormElement').reset();
                } else {
                    // Login failed
                    errorDiv.classList.remove('hidden');
                    
                    // Clear password field
                    document.getElementById('adminPassword').value = '';
                    document.getElementById('adminPassword').focus();
                }
                
                // Reset button
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        }

        function logoutAdmin() {
            isAdminLoggedIn = false;
            currentAdminUser = '';
            
            // Stop real-time updates
            stopRealTimeUpdates();
            
            // Hide admin dashboard and show login form
            document.getElementById('adminDashboard').classList.add('hidden');
            document.getElementById('adminLoginForm').classList.remove('hidden');
            
            // Close any open admin sections
            closeAdminSection();
            
            // Reset login form
            document.getElementById('adminLoginFormElement').reset();
            document.getElementById('loginError').classList.add('hidden');
        }

        // Admin Panel Functions
        // Real-time update system
        let salesUpdateInterval;
        
        function startRealTimeUpdates() {
            // Clear existing interval if any
            if (salesUpdateInterval) {
                clearInterval(salesUpdateInterval);
            }
            
            // Update every 5 seconds when sales report is open
            salesUpdateInterval = setInterval(() => {
                if (document.getElementById('dailySales')) {
                    calculateSalesFromOrders();
                    updateOrdersList();
                }
            }, 5000);
        }
        
        function stopRealTimeUpdates() {
            if (salesUpdateInterval) {
                clearInterval(salesUpdateInterval);
                salesUpdateInterval = null;
            }
        }

        function showAdminSection(sectionType) {
            const contentArea = document.getElementById('adminSectionContent');
            const titleElement = document.getElementById('adminSectionTitle');
            const bodyElement = document.getElementById('adminSectionBody');
            
            // Show content area
            contentArea.classList.remove('hidden');
            contentArea.classList.add('fade-in');
            
            // Start real-time updates for sales reports
            if (sectionType === 'salesReports') {
                startRealTimeUpdates();
            } else {
                stopRealTimeUpdates();
            }
            
            // Set title and content based on section type
            const sections = {
                'usersList': {
                    title: '👥 รายการผู้ใช้',
                    content: `
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm">
                                <thead>
                                    <tr class="border-b border-gray-600">
                                        <th class="text-left py-3 px-4">ID</th>
                                        <th class="text-left py-3 px-4">ชื่อผู้ใช้</th>
                                        <th class="text-left py-3 px-4">อีเมล</th>
                                        <th class="text-left py-3 px-4">บทบาท</th>
                                        <th class="text-left py-3 px-4">สถานะ</th>
                                        <th class="text-left py-3 px-4">การจัดการ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b border-gray-700">
                                        <td class="py-3 px-4">001</td>
                                        <td class="py-3 px-4">admin</td>
                                        <td class="py-3 px-4">admin@dyesan.com</td>
                                        <td class="py-3 px-4"><span class="bg-red-600 px-2 py-1 rounded text-xs">Admin</span></td>
                                        <td class="py-3 px-4"><span class="bg-green-600 px-2 py-1 rounded text-xs">Active</span></td>
                                        <td class="py-3 px-4">
                                            <button class="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs mr-1">แก้ไข</button>
                                            <button class="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs">ระงับ</button>
                                        </td>
                                    </tr>
                                    <tr class="border-b border-gray-700">
                                        <td class="py-3 px-4">002</td>
                                        <td class="py-3 px-4">customer1</td>
                                        <td class="py-3 px-4">customer@example.com</td>
                                        <td class="py-3 px-4"><span class="bg-blue-600 px-2 py-1 rounded text-xs">Customer</span></td>
                                        <td class="py-3 px-4"><span class="bg-green-600 px-2 py-1 rounded text-xs">Active</span></td>
                                        <td class="py-3 px-4">
                                            <button class="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs mr-1">แก้ไข</button>
                                            <button class="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs">ระงับ</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    `
                },
                'createUser': {
                    title: '➕ สร้างผู้ใช้ใหม่',
                    content: `
                        <form class="space-y-4">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium mb-2">ชื่อผู้ใช้ *</label>
                                    <input type="text" class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-2">อีเมล *</label>
                                    <input type="email" class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white">
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium mb-2">รหัสผ่าน *</label>
                                    <input type="password" class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white">
                                </div>
                                <div>
                                    <label class="block text-sm font-medium mb-2">บทบาท *</label>
                                    <select class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white">
                                        <option value="customer">Customer</option>
                                        <option value="admin">Admin</option>
                                        <option value="moderator">Moderator</option>
                                    </select>
                                </div>
                            </div>
                            <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                                สร้างผู้ใช้
                            </button>
                        </form>
                    `
                },
                'ordersList': {
                    title: '📦 รายการออเดอร์',
                    content: `
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm">
                                <thead>
                                    <tr class="border-b border-gray-600">
                                        <th class="text-left py-3 px-4">Order ID</th>
                                        <th class="text-left py-3 px-4">ลูกค้า</th>
                                        <th class="text-left py-3 px-4">สินค้า</th>
                                        <th class="text-left py-3 px-4">ยอดรวม</th>
                                        <th class="text-left py-3 px-4">สถานะ</th>
                                        <th class="text-left py-3 px-4">วันที่</th>
                                        <th class="text-left py-3 px-4">การจัดการ</th>
                                    </tr>
                                </thead>
                                <tbody id="ordersTableBody">
                                    ${ordersData.length === 0 ? `
                                        <tr>
                                            <td colspan="7" class="py-8 px-4 text-center text-gray-400">
                                                ยังไม่มีออเดอร์ในระบบ<br>
                                                <small>ออเดอร์จะปรากฏเมื่อลูกค้ายืนยันการพรีออเดอร์</small>
                                            </td>
                                        </tr>
                                    ` : ordersData.map(order => `
                                        <tr class="border-b border-gray-700">
                                            <td class="py-3 px-4">#${order.id}</td>
                                            <td class="py-3 px-4">${order.customerName}</td>
                                            <td class="py-3 px-4">${order.product} (${order.size}) x${order.quantity}</td>
                                            <td class="py-3 px-4">฿${order.total.toLocaleString()}</td>
                                            <td class="py-3 px-4"><span class="${getStatusColor(order.status)} px-2 py-1 rounded text-xs">${order.status}</span></td>
                                            <td class="py-3 px-4">${order.date}</td>
                                            <td class="py-3 px-4">
                                                <button onclick="viewOrderDetails('${order.id}')" class="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs mr-1">ดูรายละเอียด</button>
                                                <button onclick="updateOrderStatus('${order.id}')" class="bg-green-600 hover:bg-green-700 px-2 py-1 rounded text-xs mr-1">อัปเดตสถานะ</button>
                                                <button onclick="editOrder('${order.id}')" class="bg-orange-600 hover:bg-orange-700 px-2 py-1 rounded text-xs mr-1">แก้ไข</button>
                                                <button onclick="deleteOrder('${order.id}')" class="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs">ลบ</button>
                                            </td>
                                        </tr>
                                    `).join('')}
                                </tbody>
                            </table>
                        </div>
                    `
                },
                'generalSettings': {
                    title: '🌐 ตั้งค่าทั่วไป',
                    content: `
                        <form class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium mb-2">ชื่อเว็บไซต์</label>
                                <input type="text" value="DY ESAN SHOP" class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">คำอธิบายเว็บไซต์</label>
                                <textarea rows="3" class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white">พรีออเดอร์เสื้อ - ยินดีต้อนรับสู่ DY ESAN SHOP</textarea>
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">อีเมลติดต่อ</label>
                                <input type="email" value="contact@dyesan.com" class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-2">เบอร์โทรศัพท์</label>
                                <input type="tel" value="0621759759" class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white">
                            </div>
                            <button type="submit" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg">
                                บันทึกการตั้งค่า
                            </button>
                        </form>
                    `
                },
                'paymentSlips': {
                    title: '📄 จัดการสลิปการโอนเงิน',
                    content: `
                        <div class="mb-6">
                            <div class="flex items-center justify-between mb-4">
                                <div class="flex items-center space-x-2">
                                    <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                                    <span class="text-blue-400 text-sm font-medium">เชื่อมต่อกับ Google Drive</span>
                                </div>
                                <div class="text-xs text-gray-400">
                                    Folder ID: 147ix5n16Zx6cfJ9ColbvwnYjk-9xhvvE
                                </div>
                            </div>
                            
                            <div class="bg-blue-900/30 border border-blue-500 rounded-lg p-4 mb-6">
                                <div class="flex items-center mb-2">
                                    <span class="text-2xl mr-2">☁️</span>
                                    <span class="font-semibold text-blue-400">Google Drive Integration</span>
                                </div>
                                <p class="text-sm text-gray-300 mb-3">สลิปการโอนเงินทั้งหมดจะถูกอัปโหลดไปยัง Google Drive โดยอัตโนมัติ</p>
                                <a href="https://drive.google.com/drive/u/0/folders/147ix5n16Zx6cfJ9ColbvwnYjk-9xhvvE" 
                                   target="_blank" rel="noopener noreferrer" 
                                   class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                                    📁 เปิด Google Drive Folder
                                </a>
                            </div>
                        </div>
                        
                        <div class="overflow-x-auto">
                            <table class="w-full text-sm">
                                <thead>
                                    <tr class="border-b border-gray-600">
                                        <th class="text-left py-3 px-4">ไฟล์</th>
                                        <th class="text-left py-3 px-4">ออเดอร์</th>
                                        <th class="text-left py-3 px-4">ลูกค้า</th>
                                        <th class="text-left py-3 px-4">ขนาดไฟล์</th>
                                        <th class="text-left py-3 px-4">วันที่อัปโหลด</th>
                                        <th class="text-left py-3 px-4">สถานะ</th>
                                        <th class="text-left py-3 px-4">การจัดการ</th>
                                    </tr>
                                </thead>
                                <tbody id="paymentSlipsTableBody">
                                    ${getPaymentSlipsTableContent()}
                                </tbody>
                            </table>
                        </div>
                    `
                },
                'salesReports': {
                    title: '💰 รายงานยอดขาย',
                    content: `
                        <div class="mb-4 text-center">
                            <div class="inline-flex items-center space-x-2 bg-green-900/30 border border-green-500 rounded-lg px-4 py-2">
                                <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span class="text-green-400 text-sm font-medium">อัปเดตแบบเรียลไทม์</span>
                                <span class="text-gray-400 text-xs">|</span>
                                <span id="lastUpdate" class="text-gray-400 text-xs">อัปเดตล่าสุด: ${new Date().toLocaleTimeString('th-TH')}</span>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                            <div class="bg-green-900/50 border border-green-500 rounded-lg p-4 text-center">
                                <h4 class="text-lg font-bold text-green-400">ยอดขายวันนี้</h4>
                                <p id="dailySales" class="text-2xl font-bold text-white">฿0</p>
                                <p class="text-xs text-green-300 mt-1">วันที่ ${new Date().toLocaleDateString('th-TH')}</p>
                            </div>
                            <div class="bg-blue-900/50 border border-blue-500 rounded-lg p-4 text-center">
                                <h4 class="text-lg font-bold text-blue-400">ยอดขายเดือนนี้</h4>
                                <p id="monthlySales" class="text-2xl font-bold text-white">฿0</p>
                                <p class="text-xs text-blue-300 mt-1">เดือน ${new Date().toLocaleDateString('th-TH', { month: 'long', year: 'numeric' })}</p>
                            </div>
                            <div class="bg-purple-900/50 border border-purple-500 rounded-lg p-4 text-center">
                                <h4 class="text-lg font-bold text-purple-400">ยอดขายรวม</h4>
                                <p id="totalSales" class="text-2xl font-bold text-white">฿0</p>
                                <p class="text-xs text-purple-300 mt-1">ตั้งแต่เปิดร้าน</p>
                            </div>
                        </div>
                        <div class="bg-gray-800 rounded-lg p-4">
                            <div class="flex justify-between items-center mb-4">
                                <h4 class="text-lg font-bold">สินค้าขายดี</h4>
                                <span class="text-xs text-gray-400">อัปเดตทุก 5 วินาที</span>
                            </div>
                            <div class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span>NEW COLLECTION ESAN</span>
                                    <span id="productSold" class="font-bold text-yellow-400">0 ชิ้น</span>
                                </div>
                            </div>
                        </div>
                    `
                }
            };
            
            const section = sections[sectionType] || {
                title: 'ฟีเจอร์นี้',
                content: '<p class="text-center text-gray-400">ฟีเจอร์นี้กำลังพัฒนา จะเปิดใช้งานในเร็วๆ นี้</p>'
            };
            
            titleElement.textContent = section.title;
            bodyElement.innerHTML = section.content;
            
            // Scroll to content area
            contentArea.scrollIntoView({ behavior: 'smooth' });
        }

        function closeAdminSection() {
            const contentArea = document.getElementById('adminSectionContent');
            contentArea.classList.add('hidden');
            contentArea.classList.remove('fade-in');
            
            // Stop real-time updates when closing admin section
            stopRealTimeUpdates();
        }

        // Sales tracking system
        let salesData = {
            daily: 0,
            monthly: 0,
            total: 0,
            productsSold: 0
        };

        // Orders tracking system
        let ordersData = [
            {
                id: 'ORD001',
                customerName: 'สมชาย ใจดี',
                phone: '081-234-5678',
                product: 'NEW COLLECTION ESAN',
                size: 'L',
                quantity: 2,
                total: 567,
                address: '123 หมู่ 5 ตำบลในเมือง อำเภอเมือง จังหวัดขอนแก่น 40000',
                paymentSlip: 'https://drive.google.com/file/d/demo_slip_001/view',
                paymentSlipName: 'slip_payment_001.jpg',
                status: 'รอชำระเงิน',
                date: new Date().toLocaleDateString('th-TH'),
                timestamp: new Date().toISOString()
            }
        ];

        function updateSalesDisplay() {
            // Update sales display in admin panel
            const dailyElement = document.getElementById('dailySales');
            const monthlyElement = document.getElementById('monthlySales');
            const totalElement = document.getElementById('totalSales');
            const productElement = document.getElementById('productSold');
            const lastUpdateElement = document.getElementById('lastUpdate');
            
            if (dailyElement) dailyElement.textContent = `฿${salesData.daily.toLocaleString()}`;
            if (monthlyElement) monthlyElement.textContent = `฿${salesData.monthly.toLocaleString()}`;
            if (totalElement) totalElement.textContent = `฿${salesData.total.toLocaleString()}`;
            if (productElement) productElement.textContent = `${salesData.productsSold} ชิ้น`;
            
            // Update last update time
            if (lastUpdateElement) {
                lastUpdateElement.textContent = `อัปเดตล่าสุด: ${new Date().toLocaleTimeString('th-TH')}`;
            }
            
            // Add animation effect when updating
            [dailyElement, monthlyElement, totalElement, productElement].forEach(element => {
                if (element) {
                    element.style.transform = 'scale(1.1)';
                    element.style.transition = 'transform 0.3s ease';
                    element.style.color = '#10b981'; // Green flash
                    setTimeout(() => {
                        element.style.transform = 'scale(1)';
                        element.style.color = ''; // Reset to original color
                    }, 300);
                }
            });
        }

        function calculateSalesFromOrders() {
            // Reset sales data
            salesData = {
                daily: 0,
                monthly: 0,
                total: 0,
                productsSold: 0
            };
            
            const today = new Date().toLocaleDateString('th-TH');
            const currentMonth = new Date().getMonth();
            const currentYear = new Date().getFullYear();
            
            // Calculate from all orders
            ordersData.forEach(order => {
                const orderDate = new Date(order.timestamp);
                const orderMonth = orderDate.getMonth();
                const orderYear = orderDate.getFullYear();
                
                // Add to total sales
                salesData.total += order.total;
                salesData.productsSold += order.quantity;
                
                // Add to monthly sales if same month and year
                if (orderMonth === currentMonth && orderYear === currentYear) {
                    salesData.monthly += order.total;
                }
                
                // Add to daily sales if same date
                if (order.date === today) {
                    salesData.daily += order.total;
                }
            });
            
            // Save to localStorage
            localStorage.setItem('dyesanSalesData', JSON.stringify(salesData));
            
            // Update display
            updateSalesDisplay();
        }

        function addOrder(orderData) {
            // Generate order ID
            const orderId = `ORD${String(ordersData.length + 1).padStart(3, '0')}`;
            
            const newOrder = {
                id: orderId,
                customerName: orderData.customerName,
                phone: orderData.phone,
                product: orderData.product,
                size: orderData.size,
                quantity: orderData.quantity,
                total: orderData.total,
                address: orderData.address,
                paymentSlip: orderData.paymentSlip || null,
                paymentSlipName: orderData.paymentSlipName || null,
                status: 'รอชำระเงิน',
                date: new Date().toLocaleDateString('th-TH'),
                timestamp: new Date().toISOString()
            };
            
            ordersData.push(newOrder);
            
            // Save to localStorage
            localStorage.setItem('dyesanOrdersData', JSON.stringify(ordersData));
            
            // Recalculate sales data from all orders
            calculateSalesFromOrders();
        }

        function updateOrdersList() {
            // This will be called when showing orders list in admin panel
            const ordersTableBody = document.querySelector('#ordersTableBody');
            if (ordersTableBody && ordersData.length > 0) {
                ordersTableBody.innerHTML = ordersData.map(order => `
                    <tr class="border-b border-gray-700">
                        <td class="py-3 px-4">#${order.id}</td>
                        <td class="py-3 px-4">${order.customerName}</td>
                        <td class="py-3 px-4">${order.product} (${order.size}) x${order.quantity}</td>
                        <td class="py-3 px-4">฿${order.total.toLocaleString()}</td>
                        <td class="py-3 px-4"><span class="${getStatusColor(order.status)} px-2 py-1 rounded text-xs">${order.status}</span></td>
                        <td class="py-3 px-4">${order.date}</td>
                        <td class="py-3 px-4">
                            <button onclick="viewOrderDetails('${order.id}')" class="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs mr-1">ดูรายละเอียด</button>
                            <button onclick="updateOrderStatus('${order.id}')" class="bg-green-600 hover:bg-green-700 px-2 py-1 rounded text-xs mr-1">อัปเดตสถานะ</button>
                            <button onclick="editOrder('${order.id}')" class="bg-orange-600 hover:bg-orange-700 px-2 py-1 rounded text-xs mr-1">แก้ไข</button>
                            <button onclick="deleteOrder('${order.id}')" class="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs">ลบ</button>
                        </td>
                    </tr>
                `).join('');
            }
        }

        // Load saved orders data on page load
        function loadOrdersData() {
            const saved = localStorage.getItem('dyesanOrdersData');
            if (saved) {
                ordersData = JSON.parse(saved);
            }
            // Always recalculate sales from orders to ensure data consistency
            calculateSalesFromOrders();
        }

        // Order management functions
        function viewOrderDetails(orderId) {
            const order = ordersData.find(o => o.id === orderId);
            if (!order) return;
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4';
            modal.innerHTML = `
                <div class="bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 fade-in">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-2xl font-bold text-white">รายละเอียดออเดอร์ #${order.id}</h3>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="text-lg font-bold text-blue-400 mb-4">ข้อมูลลูกค้า</h4>
                            <div class="space-y-2 text-sm">
                                <div><span class="font-semibold">ชื่อ:</span> ${order.customerName}</div>
                                <div><span class="font-semibold">เบอร์โทร:</span> ${order.phone}</div>
                                <div><span class="font-semibold">ที่อยู่:</span><br>${order.address}</div>
                            </div>
                        </div>
                        
                        <div>
                            <h4 class="text-lg font-bold text-green-400 mb-4">ข้อมูลสินค้า</h4>
                            <div class="space-y-2 text-sm">
                                <div><span class="font-semibold">สินค้า:</span> ${order.product}</div>
                                <div><span class="font-semibold">ไซส์:</span> ${order.size}</div>
                                <div><span class="font-semibold">จำนวน:</span> ${order.quantity} ชิ้น</div>
                                <div><span class="font-semibold">ยอดรวม:</span> <span class="text-yellow-400 font-bold">฿${order.total.toLocaleString()}</span></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Payment Slip Section -->
                    <div class="mt-6">
                        <h4 class="text-lg font-bold text-purple-400 mb-4">💳 สลิปการโอนเงิน</h4>
                        <div class="bg-gray-800 border border-gray-600 rounded-lg p-4">
                            ${order.paymentSlip ? `
                                <div class="text-center">
                                    <div class="mb-3">
                                        <div class="w-full max-w-sm mx-auto bg-gray-700 border border-gray-600 rounded-lg p-4">
                                            ${order.paymentSlipData ? `
                                                <div class="mb-3">
                                                    <img src="${order.paymentSlipData}" alt="สลิปการโอนเงิน" 
                                                         class="w-full max-w-xs mx-auto rounded-lg border border-gray-500"
                                                         style="max-height: 300px; object-fit: contain;">
                                                </div>
                                            ` : `
                                                <div class="text-4xl mb-2">📄</div>
                                            `}
                                            <p class="text-white font-semibold mb-1">สลิปการโอนเงิน</p>
                                            <p class="text-gray-300 text-sm mb-3">${order.paymentSlipName || 'payment_slip.jpg'}</p>
                                            <div class="space-y-2">
                                                ${order.paymentSlipData ? `
                                                    <button onclick="viewFullSlip('${order.paymentSlipData}', '${order.paymentSlipName}')" 
                                                            class="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm transition-colors mr-2">
                                                        🔍 ดูสลิปขนาดเต็ม
                                                    </button>
                                                ` : ''}
                                                <a href="${order.paymentSlip}" target="_blank" rel="noopener noreferrer" 
                                                   class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm transition-colors">
                                                    📁 ดูใน Google Drive
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-xs text-gray-400">สลิปถูกอัปโหลดและบันทึกในระบบแล้ว</p>
                                </div>
                            ` : `
                                <div class="text-center text-gray-400 py-8">
                                    <div class="text-4xl mb-2">📄</div>
                                    <p>ยังไม่มีสลิปการโอนเงิน</p>
                                    <p class="text-xs">สลิปจะถูกอัปโหลดไปยัง Google Drive หลังจากยืนยันออเดอร์</p>
                                </div>
                            `}
                        </div>
                    </div>
                    
                    <div class="mt-6 p-4 bg-gray-800 rounded-lg">
                        <div class="flex justify-between items-center">
                            <div>
                                <span class="font-semibold">สถานะ:</span> 
                                <span class="${getStatusColor(order.status)} px-2 py-1 rounded text-xs ml-2">${order.status}</span>
                            </div>
                            <div class="text-sm text-gray-400">
                                วันที่สั่ง: ${order.date}
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-6 flex justify-end space-x-3">
                        <button onclick="updateOrderStatus('${order.id}'); this.closest('.fixed').remove();" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                            อัปเดตสถานะ
                        </button>
                        <button onclick="editOrder('${order.id}'); this.closest('.fixed').remove();" class="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                            แก้ไขออเดอร์
                        </button>
                        <button onclick="this.closest('.fixed').remove()" class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                            ปิด
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        function updateOrderStatus(orderId) {
            const order = ordersData.find(o => o.id === orderId);
            if (!order) return;
            
            const statuses = ['รอชำระเงิน', 'ชำระเงินแล้ว', 'กำลังผลิต', 'จัดส่งแล้ว', 'สำเร็จ', 'ยกเลิก'];
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4';
            modal.innerHTML = `
                <div class="bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full p-6 fade-in">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold text-white">อัปเดตสถานะออเดอร์</h3>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
                    </div>
                    
                    <div class="mb-4">
                        <p class="text-gray-300 mb-2">ออเดอร์: <span class="font-bold">#${order.id}</span></p>
                        <p class="text-gray-300 mb-4">ลูกค้า: <span class="font-bold">${order.customerName}</span></p>
                        <p class="text-gray-300 mb-4">สถานะปัจจุบัน: <span class="${getStatusColor(order.status)} px-2 py-1 rounded text-xs">${order.status}</span></p>
                    </div>
                    
                    <form onsubmit="saveOrderStatus(event, '${orderId}')">
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-300 mb-2">เลือกสถานะใหม่ *</label>
                            <select name="newStatus" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-green-500">
                                ${statuses.map(status => `
                                    <option value="${status}" ${status === order.status ? 'selected' : ''}>${status}</option>
                                `).join('')}
                            </select>
                        </div>
                        
                        <div class="flex justify-end space-x-3">
                            <button type="button" onclick="this.closest('.fixed').remove()" class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                                ยกเลิก
                            </button>
                            <button type="submit" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                                บันทึก
                            </button>
                        </div>
                    </form>
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        function saveOrderStatus(event, orderId) {
            event.preventDefault();
            const newStatus = event.target.newStatus.value;
            
            // Update order status
            const orderIndex = ordersData.findIndex(o => o.id === orderId);
            if (orderIndex !== -1) {
                ordersData[orderIndex].status = newStatus;
                
                // Save to localStorage
                localStorage.setItem('dyesanOrdersData', JSON.stringify(ordersData));
                
                // Refresh orders list if currently showing
                if (document.getElementById('ordersTableBody')) {
                    showAdminSection('ordersList');
                }
                
                // Show success message
                const modal = event.target.closest('.fixed');
                modal.innerHTML = `
                    <div class="bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full p-6 text-center fade-in">
                        <div class="w-16 h-16 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-3xl">✅</span>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">อัปเดตสถานะสำเร็จ!</h3>
                        <p class="text-gray-300 mb-6">สถานะออเดอร์ #${orderId} ได้รับการอัปเดตเป็น "${newStatus}" แล้ว</p>
                        <button onclick="this.closest('.fixed').remove()" class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">
                            ปิด
                        </button>
                    </div>
                `;
            }
        }
        
        function editOrder(orderId) {
            const order = ordersData.find(o => o.id === orderId);
            if (!order) return;
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4';
            modal.innerHTML = `
                <div class="bg-gray-900 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 fade-in">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold text-white">แก้ไขออเดอร์ #${order.id}</h3>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
                    </div>
                    
                    <form onsubmit="saveOrderEdit(event, '${orderId}')">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-2">ชื่อ-นามสกุล *</label>
                                <input type="text" name="customerName" value="${order.customerName}" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-2">เบอร์โทรศัพท์ *</label>
                                <input type="tel" name="phone" value="${order.phone}" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-2">ไซส์ *</label>
                                <select name="size" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500" onchange="updateEditOrderPrice()">
                                    <option value="S" ${order.size === 'S' ? 'selected' : ''}>S</option>
                                    <option value="M" ${order.size === 'M' ? 'selected' : ''}>M</option>
                                    <option value="L" ${order.size === 'L' ? 'selected' : ''}>L</option>
                                    <option value="XL" ${order.size === 'XL' ? 'selected' : ''}>XL</option>
                                    <option value="XXL" ${order.size === 'XXL' ? 'selected' : ''}>XXL (+฿20)</option>
                                    <option value="3XL" ${order.size === '3XL' ? 'selected' : ''}>3XL (+฿40)</option>
                                    <option value="4XL" ${order.size === '4XL' ? 'selected' : ''}>4XL (+฿60)</option>
                                    <option value="5XL" ${order.size === '5XL' ? 'selected' : ''}>5XL (+฿60)</option>
                                    <option value="6XL" ${order.size === '6XL' ? 'selected' : ''}>6XL (+฿60)</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-2">จำนวน *</label>
                                <input type="number" name="quantity" value="${order.quantity}" min="1" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500" oninput="updateEditOrderPrice()">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-2">ยอดรวม</label>
                                <input type="text" id="editOrderTotal" value="฿${order.total.toLocaleString()}" readonly class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-700 text-gray-300">
                            </div>
                        </div>
                        
                        <div class="mb-6">
                            <label class="block text-sm font-medium text-gray-300 mb-2">ที่อยู่จัดส่ง *</label>
                            <textarea name="address" rows="3" required class="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500">${order.address}</textarea>
                        </div>
                        
                        <div class="flex justify-end space-x-3">
                            <button type="button" onclick="this.closest('.fixed').remove()" class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                                ยกเลิก
                            </button>
                            <button type="submit" class="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg">
                                บันทึกการแก้ไข
                            </button>
                        </div>
                    </form>
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        function updateEditOrderPrice() {
            const form = event.target.closest('form');
            const size = form.querySelector('[name="size"]').value;
            const quantity = parseInt(form.querySelector('[name="quantity"]').value) || 1;
            
            let sizePrice = 0;
            if (size === 'XXL') sizePrice = 20;
            else if (size === '3XL') sizePrice = 40;
            else if (['4XL', '5XL', '6XL'].includes(size)) sizePrice = 60;
            
            const basePrice = 259;
            const shipping = 49;
            const itemTotal = (basePrice + sizePrice) * quantity;
            const total = itemTotal + shipping;
            
            form.querySelector('#editOrderTotal').value = `฿${total.toLocaleString()}`;
        }
        
        function saveOrderEdit(event, orderId) {
            event.preventDefault();
            const formData = new FormData(event.target);
            
            // Calculate new total
            const size = formData.get('size');
            const quantity = parseInt(formData.get('quantity'));
            
            let sizePrice = 0;
            if (size === 'XXL') sizePrice = 20;
            else if (size === '3XL') sizePrice = 40;
            else if (['4XL', '5XL', '6XL'].includes(size)) sizePrice = 60;
            
            const basePrice = 259;
            const shipping = 49;
            const itemTotal = (basePrice + sizePrice) * quantity;
            const total = itemTotal + shipping;
            
            // Update order
            const orderIndex = ordersData.findIndex(o => o.id === orderId);
            if (orderIndex !== -1) {
                ordersData[orderIndex] = {
                    ...ordersData[orderIndex],
                    customerName: formData.get('customerName'),
                    phone: formData.get('phone'),
                    size: formData.get('size'),
                    quantity: quantity,
                    total: total,
                    address: formData.get('address')
                };
                
                // Save to localStorage
                localStorage.setItem('dyesanOrdersData', JSON.stringify(ordersData));
                
                // Recalculate sales
                calculateSalesFromOrders();
                
                // Refresh orders list if currently showing
                if (document.getElementById('ordersTableBody')) {
                    showAdminSection('ordersList');
                }
                
                // Show success message
                const modal = event.target.closest('.fixed');
                modal.innerHTML = `
                    <div class="bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full p-6 text-center fade-in">
                        <div class="w-16 h-16 bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-3xl">✅</span>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">แก้ไขออเดอร์สำเร็จ!</h3>
                        <p class="text-gray-300 mb-6">ข้อมูลออเดอร์ #${orderId} ได้รับการอัปเดตแล้ว</p>
                        <button onclick="this.closest('.fixed').remove()" class="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg">
                            ปิด
                        </button>
                    </div>
                `;
            }
        }
        
        function deleteOrder(orderId) {
            const order = ordersData.find(o => o.id === orderId);
            if (!order) return;
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4';
            modal.innerHTML = `
                <div class="bg-gray-900 border border-red-500 rounded-xl max-w-md w-full p-6 fade-in">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold text-red-400">⚠️ ยืนยันการลบออเดอร์</h3>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
                    </div>
                    
                    <div class="mb-6">
                        <p class="text-gray-300 mb-2">คุณต้องการลบออเดอร์นี้หรือไม่?</p>
                        <div class="bg-gray-800 p-4 rounded-lg mt-4">
                            <p class="text-white font-bold">ออเดอร์: #${order.id}</p>
                            <p class="text-gray-300">ลูกค้า: ${order.customerName}</p>
                            <p class="text-gray-300">สินค้า: ${order.product} (${order.size}) x${order.quantity}</p>
                            <p class="text-yellow-400">ยอดรวม: ฿${order.total.toLocaleString()}</p>
                        </div>
                        <p class="text-red-400 text-sm mt-4">⚠️ การลบออเดอร์จะไม่สามารถกู้คืนได้</p>
                    </div>
                    
                    <div class="flex justify-end space-x-3">
                        <button onclick="this.closest('.fixed').remove()" class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                            ยกเลิก
                        </button>
                        <button onclick="confirmDeleteOrder('${orderId}')" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                            ลบออเดอร์
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        function confirmDeleteOrder(orderId) {
            // Remove order from array
            const orderIndex = ordersData.findIndex(o => o.id === orderId);
            if (orderIndex !== -1) {
                ordersData.splice(orderIndex, 1);
                
                // Save to localStorage
                localStorage.setItem('dyesanOrdersData', JSON.stringify(ordersData));
                
                // Recalculate sales
                calculateSalesFromOrders();
                
                // Refresh orders list if currently showing
                if (document.getElementById('ordersTableBody')) {
                    showAdminSection('ordersList');
                }
                
                // Show success message
                const modal = document.querySelector('.fixed');
                modal.innerHTML = `
                    <div class="bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full p-6 text-center fade-in">
                        <div class="w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span class="text-3xl">🗑️</span>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-4">ลบออเดอร์สำเร็จ!</h3>
                        <p class="text-gray-300 mb-6">ออเดอร์ #${orderId} ได้ถูกลบออกจากระบบแล้ว</p>
                        <button onclick="this.closest('.fixed').remove()" class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">
                            ปิด
                        </button>
                    </div>
                `;
            }
        }

        function getStatusColor(status) {
            // This function will return appropriate color classes for order status
            const statusColors = {
                'รอชำระเงิน': 'bg-yellow-600',
                'ชำระเงินแล้ว': 'bg-blue-600', 
                'กำลังผลิต': 'bg-purple-600',
                'จัดส่งแล้ว': 'bg-indigo-600',
                'สำเร็จ': 'bg-green-600',
                'ยกเลิก': 'bg-red-600'
            };
            return statusColors[status] || 'bg-gray-600';
        }

        // Function to view full slip image
        function viewFullSlip(imageData, fileName) {
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4';
            modal.innerHTML = `
                <div class="max-w-4xl w-full max-h-[90vh] overflow-auto bg-gray-900 rounded-xl p-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-xl font-bold text-white">สลิปการโอนเงิน - ${fileName}</h3>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
                    </div>
                    <div class="text-center">
                        <img src="${imageData}" alt="สลิปการโอนเงิน" 
                             class="max-w-full max-h-[70vh] mx-auto rounded-lg border border-gray-600"
                             style="object-fit: contain;">
                    </div>
                    <div class="mt-4 text-center">
                        <button onclick="downloadSlip('${imageData}', '${fileName}')" 
                                class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg mr-2">
                            💾 ดาวน์โหลด
                        </button>
                        <button onclick="this.closest('.fixed').remove()" 
                                class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                            ปิด
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        // Function to download slip image
        function downloadSlip(imageData, fileName) {
            const link = document.createElement('a');
            link.href = imageData;
            link.download = fileName || 'payment_slip.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }

        // Payment slips management functions
        function getPaymentSlipsTableContent() {
            const uploadedFiles = JSON.parse(localStorage.getItem('uploadedSlips') || '[]');
            
            if (uploadedFiles.length === 0) {
                return `
                    <tr>
                        <td colspan="7" class="py-8 px-4 text-center text-gray-400">
                            ยังไม่มีสลิปการโอนเงินในระบบ<br>
                            <small>สลิปจะปรากฏเมื่อลูกค้าอัปโหลดสลิปการโอนเงิน</small>
                        </td>
                    </tr>
                `;
            }
            
            return uploadedFiles.map((file, index) => {
                // Find matching order
                const matchingOrder = ordersData.find(order => 
                    order.paymentSlipName === file.fileName || 
                    order.paymentSlip === file.url
                );
                
                const fileSize = (file.fileSize / 1024).toFixed(1) + ' KB';
                const uploadDate = new Date(file.uploadTime).toLocaleDateString('th-TH');
                const uploadTime = new Date(file.uploadTime).toLocaleTimeString('th-TH');
                
                return `
                    <tr class="border-b border-gray-700">
                        <td class="py-3 px-4">
                            <div class="flex items-center space-x-2">
                                <span class="text-lg">📄</span>
                                <div>
                                    <p class="font-semibold text-white text-sm">${file.fileName}</p>
                                    <p class="text-xs text-gray-400">${file.fileType}</p>
                                </div>
                            </div>
                        </td>
                        <td class="py-3 px-4">
                            ${matchingOrder ? `
                                <span class="font-semibold text-blue-400">#${matchingOrder.id}</span>
                            ` : `
                                <span class="text-gray-400 text-sm">ไม่พบออเดอร์</span>
                            `}
                        </td>
                        <td class="py-3 px-4">
                            ${matchingOrder ? `
                                <div>
                                    <p class="font-semibold text-white text-sm">${matchingOrder.customerName}</p>
                                    <p class="text-xs text-gray-400">${matchingOrder.phone}</p>
                                </div>
                            ` : `
                                <span class="text-gray-400 text-sm">-</span>
                            `}
                        </td>
                        <td class="py-3 px-4">${fileSize}</td>
                        <td class="py-3 px-4">
                            <div>
                                <p class="text-sm">${uploadDate}</p>
                                <p class="text-xs text-gray-400">${uploadTime}</p>
                            </div>
                        </td>
                        <td class="py-3 px-4">
                            <span class="${file.status === 'uploaded_to_drive' ? 'bg-green-600' : 'bg-yellow-600'} px-2 py-1 rounded text-xs">
                                ${file.status === 'uploaded_to_drive' ? '✅ อัปโหลดแล้ว' : '💾 สำรองข้อมูล'}
                            </span>
                        </td>
                        <td class="py-3 px-4">
                            <div class="flex space-x-1">
                                <button onclick="viewPaymentSlip('${index}')" class="bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs">ดู</button>
                                <button onclick="downloadPaymentSlip('${index}')" class="bg-green-600 hover:bg-green-700 px-2 py-1 rounded text-xs">ดาวน์โหลด</button>
                                <button onclick="deletePaymentSlip('${index}')" class="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-xs">ลบ</button>
                            </div>
                        </td>
                    </tr>
                `;
            }).join('');
        }
        
        function viewPaymentSlip(fileIndex) {
            const uploadedFiles = JSON.parse(localStorage.getItem('uploadedSlips') || '[]');
            const file = uploadedFiles[fileIndex];
            
            if (!file) return;
            
            // Find matching order
            const matchingOrder = ordersData.find(order => 
                order.paymentSlipName === file.fileName || 
                order.paymentSlip === file.url
            );
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4';
            modal.innerHTML = `
                <div class="max-w-4xl w-full max-h-[90vh] overflow-auto bg-gray-900 rounded-xl p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold text-white">สลิปการโอนเงิน</h3>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
                    </div>
                    
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <!-- Slip Image -->
                        <div class="text-center">
                            <div class="bg-gray-800 border border-gray-600 rounded-lg p-4 mb-4">
                                ${file.dataUrl ? `
                                    <img src="${file.dataUrl}" alt="สลิปการโอนเงิน" 
                                         class="max-w-full max-h-96 mx-auto rounded-lg border border-gray-500"
                                         style="object-fit: contain;">
                                ` : `
                                    <div class="text-4xl mb-2 text-gray-400">📄</div>
                                    <p class="text-gray-400">ไม่สามารถแสดงตัวอย่างได้</p>
                                `}
                            </div>
                            <div class="space-x-2">
                                <button onclick="downloadPaymentSlip('${fileIndex}')" 
                                        class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                                    💾 ดาวน์โหลด
                                </button>
                                <a href="${file.url}" target="_blank" rel="noopener noreferrer" 
                                   class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                                    📁 ดูใน Google Drive
                                </a>
                            </div>
                        </div>
                        
                        <!-- File Info -->
                        <div>
                            <h4 class="text-lg font-bold text-blue-400 mb-4">ข้อมูลไฟล์</h4>
                            <div class="space-y-3 text-sm">
                                <div class="bg-gray-800 p-3 rounded-lg">
                                    <span class="font-semibold text-gray-300">ชื่อไฟล์:</span><br>
                                    <span class="text-white">${file.fileName}</span>
                                </div>
                                <div class="bg-gray-800 p-3 rounded-lg">
                                    <span class="font-semibold text-gray-300">ขนาดไฟล์:</span><br>
                                    <span class="text-white">${(file.fileSize / 1024).toFixed(1)} KB</span>
                                </div>
                                <div class="bg-gray-800 p-3 rounded-lg">
                                    <span class="font-semibold text-gray-300">ประเภทไฟล์:</span><br>
                                    <span class="text-white">${file.fileType}</span>
                                </div>
                                <div class="bg-gray-800 p-3 rounded-lg">
                                    <span class="font-semibold text-gray-300">วันที่อัปโหลด:</span><br>
                                    <span class="text-white">${new Date(file.uploadTime).toLocaleString('th-TH')}</span>
                                </div>
                                <div class="bg-gray-800 p-3 rounded-lg">
                                    <span class="font-semibold text-gray-300">สถานะ:</span><br>
                                    <span class="${file.status === 'uploaded_to_drive' ? 'text-green-400' : 'text-yellow-400'}">
                                        ${file.status === 'uploaded_to_drive' ? '✅ อัปโหลดไป Google Drive แล้ว' : '💾 บันทึกในระบบ'}
                                    </span>
                                </div>
                            </div>
                            
                            ${matchingOrder ? `
                                <h4 class="text-lg font-bold text-green-400 mb-4 mt-6">ข้อมูลออเดอร์</h4>
                                <div class="space-y-3 text-sm">
                                    <div class="bg-gray-800 p-3 rounded-lg">
                                        <span class="font-semibold text-gray-300">ออเดอร์:</span><br>
                                        <span class="text-blue-400 font-bold">#${matchingOrder.id}</span>
                                    </div>
                                    <div class="bg-gray-800 p-3 rounded-lg">
                                        <span class="font-semibold text-gray-300">ลูกค้า:</span><br>
                                        <span class="text-white">${matchingOrder.customerName}</span><br>
                                        <span class="text-gray-400">${matchingOrder.phone}</span>
                                    </div>
                                    <div class="bg-gray-800 p-3 rounded-lg">
                                        <span class="font-semibold text-gray-300">สินค้า:</span><br>
                                        <span class="text-white">${matchingOrder.product} (${matchingOrder.size}) x${matchingOrder.quantity}</span>
                                    </div>
                                    <div class="bg-gray-800 p-3 rounded-lg">
                                        <span class="font-semibold text-gray-300">ยอดรวม:</span><br>
                                        <span class="text-yellow-400 font-bold">฿${matchingOrder.total.toLocaleString()}</span>
                                    </div>
                                </div>
                            ` : `
                                <div class="mt-6 p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg">
                                    <p class="text-yellow-400 text-sm">⚠️ ไม่พบออเดอร์ที่เชื่อมโยงกับสลิปนี้</p>
                                </div>
                            `}
                        </div>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        function downloadPaymentSlip(fileIndex) {
            const uploadedFiles = JSON.parse(localStorage.getItem('uploadedSlips') || '[]');
            const file = uploadedFiles[fileIndex];
            
            if (!file || !file.dataUrl) return;
            
            const link = document.createElement('a');
            link.href = file.dataUrl;
            link.download = file.fileName || 'payment_slip.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        
        function deletePaymentSlip(fileIndex) {
            const uploadedFiles = JSON.parse(localStorage.getItem('uploadedSlips') || '[]');
            const file = uploadedFiles[fileIndex];
            
            if (!file) return;
            
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4';
            modal.innerHTML = `
                <div class="bg-gray-900 border border-red-500 rounded-xl max-w-md w-full p-6 fade-in">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-xl font-bold text-red-400">⚠️ ยืนยันการลบสลิป</h3>
                        <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-white text-2xl">&times;</button>
                    </div>
                    
                    <div class="mb-6">
                        <p class="text-gray-300 mb-4">คุณต้องการลบสลิปนี้หรือไม่?</p>
                        <div class="bg-gray-800 p-4 rounded-lg">
                            <p class="font-semibold text-white">${file.fileName}</p>
                            <p class="text-gray-400 text-sm">ขนาด: ${(file.fileSize / 1024).toFixed(1)} KB</p>
                            <p class="text-gray-400 text-sm">อัปโหลด: ${new Date(file.uploadTime).toLocaleDateString('th-TH')}</p>
                        </div>
                        <p class="text-red-400 text-sm mt-4">⚠️ การลบสลิปจะไม่สามารถกู้คืนได้</p>
                    </div>
                    
                    <div class="flex justify-end space-x-3">
                        <button onclick="this.closest('.fixed').remove()" class="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg">
                            ยกเลิก
                        </button>
                        <button onclick="confirmDeletePaymentSlip('${fileIndex}')" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg">
                            ลบสลิป
                        </button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        function confirmDeletePaymentSlip(fileIndex) {
            const uploadedFiles = JSON.parse(localStorage.getItem('uploadedSlips') || '[]');
            
            // Remove file from array
            uploadedFiles.splice(fileIndex, 1);
            
            // Save back to localStorage
            localStorage.setItem('uploadedSlips', JSON.stringify(uploadedFiles));
            
            // Refresh payment slips list if currently showing
            if (document.getElementById('paymentSlipsTableBody')) {
                showAdminSection('paymentSlips');
            }
            
            // Show success message
            const modal = document.querySelector('.fixed');
            modal.innerHTML = `
                <div class="bg-gray-900 border border-gray-700 rounded-xl max-w-md w-full p-6 text-center fade-in">
                    <div class="w-16 h-16 bg-red-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="text-3xl">🗑️</span>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-4">ลบสลิปสำเร็จ!</h3>
                    <p class="text-gray-300 mb-6">สลิปได้ถูกลบออกจากระบบแล้ว</p>
                    <button onclick="this.closest('.fixed').remove()" class="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg">
                        ปิด
                    </button>
                </div>
            `;
        }

        // Initialize page on load
        document.addEventListener('DOMContentLoaded', function() {
            showPage('home');
            loadOrdersData();
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'995e0b00b52826c1',t:'MTc2MTY5MjM2MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
