const DB_API = {
    products: [
        { 
            id: 'df-2', 
            name: 'Sweet Raisins', 
            category: 'Dry Fruits', 
            stock: 60, 
            image: 'images/RAISINS (1).png', 
            desc: 'Fresh Green Sundekhani Kishmish naturally sun-dried without added preservatives.',
            nutrition: 'Energy: 299 kcal, Potassium: 749mg, Fiber: 3.7g (per 100g)',
            benefits: 'Aids digestive health, supports iron absorption, and works as an instant energy boost.',
            weights: [
                { label: '100g', price: 250 },
                { label: '200g', price: 500 },
                { label: '500g', price: 1250 }
            ]
        },
        { 
            id: 'df-3', 
            name: 'Dry Dates', 
            category: 'Dry Fruits', 
            stock: 40, 
            image: 'images/DRYDATES (1).png', 
            desc: 'Premium sun-dried Chuhara (Khajoor) dates, naturally sweet and soft.',
            nutrition: 'Energy: 282 kcal, Potassium: 656mg, Fiber: 8g (per 100g)',
            benefits: 'Gives instant natural energy, supports digestion, and is rich in iron and minerals.',
            weights: [
                { label: '250g', price: 200 },
                { label: '500g', price: 350 },
                { label: '1kg', price: 675 }
            ]
        },
        { 
            id: 'ol-1', 
            name: 'Mustard Oil', 
            category: 'Oils', 
            stock: 15, 
            image: 'images/MUSTARD (1).png', 
            desc: '100% Organic Cold Pressed Kachi Ghani Sarson Oil for healthy cooking and hair care.',
            nutrition: 'Monounsaturated Fats: 60%, Omega-3 & Omega-6 balance.',
            benefits: 'Stimulates hair growth, improves cardiovascular wellness, and enhances meal flavor.',
            weights: [
                { label: '100ml', price: 200 },
                { label: '200ml', price: 400 }
            ]
        },
        { 
            id: 'ol-2', 
            name: 'Coconut Oil', 
            category: 'Oils', 
            stock: 20, 
            image: 'images/COCNUT (1).png', 
            desc: 'Pure Extra Virgin Cold-Pressed Coconut Oil.',
            nutrition: 'Lauric Acid: 50%, Healthy MCT Fatty Acids.',
            benefits: 'Deeply nourishes skin, boosts metabolic rate, and conditions dry hair naturally.',
            weights: [
                { label: '100ml', price: 300 },
                { label: '200ml', price: 500 }
            ]
        },
        { 
            id: 'ol-3', 
            name: 'Almond Oil', 
            category: 'Oils', 
            stock: 12, 
            image: 'images/ALMOND (1).png', 
            desc: 'Pure Roghan Badam Shirin sweet almond oil pressed from edible sweet almonds.',
            nutrition: 'High Vitamin E concentration, Omega-9 oleic acid.',
            benefits: 'Enhances facial glow, relieves constipation when consumed, and soothes scalp.',
            weights: [
                { label: '100ml', price: 800 },
                { label: '200ml', price: 1550 }
            ]
        },
        { 
            id: 'ol-4', 
            name: 'Olive Oil', 
            category: 'Oils', 
            stock: 15, 
            image: 'images/OLIVE (1).png', 
            desc: 'Pure Extra Virgin Olive Oil, cold pressed for cooking, salads and skin care.',
            nutrition: 'Monounsaturated Fats: 73%, Rich in Vitamin E and polyphenol antioxidants.',
            benefits: 'Supports heart health, reduces inflammation, and nourishes skin and hair.',
            weights: [
                { label: '100ml', price: 350 },
                { label: '200ml', price: 700 }
            ]
        },
        { 
            id: 'hn-1', 
            name: 'Pure swat Honey', 
            category: 'Honey', 
            stock: 8, 
            image: 'images/HONEY (1).png', 
            desc: 'Unfiltered raw Sidr berry honey from Karak forests with intense natural healing benefits.',
            nutrition: 'Natural Fructose & Glucose, Enzymes, Antimicrobial Agents.',
            benefits: 'Soothes sore throats, reinforces immune system, and acts as a natural sweetener.',
            weights: [
                { label: '125g', price: 225 },
                { label: '250g', price: 400 },
                { label: '500g', price: 750 }
            ]
        },
        { 
            id: 'sd-1', 
            name: 'Chia Seeds', 
            category: 'Seeds', 
            stock: 50, 
            image: 'images/CHIA (1).png', 
            desc: 'Nutrient-dense black chia seeds rich in Omega-3 fatty acids and soluble dietary fiber.',
            nutrition: 'Fiber: 34g, Protein: 16.5g, Omega-3: 17.8g (per 100g)',
            benefits: 'Supports weight management, keeps hydration levels high, and regulates digestion.',
            weights: [
                { label: '50g', price: 275 },
                { label: '100g', price: 525 },
                { label: '200g', price: 1000 }
            ]
        },
        { 
            id: 'sd-2', 
            name: 'Sunflower Seeds', 
            category: 'Seeds', 
            stock: 40, 
            image: 'images/SUNFLOWER (1).png', 
            desc: 'Raw Kernel Sunflower Seeds peeled and ready to snack or bake.',
            nutrition: 'Vitamin E: 234% DV, Selenium, Healthy Unsaturated Fats.',
            benefits: 'Reduces inflammation, improves heart health, and promotes skin elasticity.',
            weights: [
                { label: '50g', price: 210 },
                { label: '100g', price: 410 },
                { label: '200g', price: 800 }
            ]
        },
        { 
            id: 'sd-3', 
            name: 'Pumpkin Seeds', 
            category: 'Seeds', 
            stock: 35, 
            image: 'images/PUMKIN (1).png', 
            desc: 'AAA Grade Raw Green Pumpkin Seeds (Kaddu Ke Beej).',
            nutrition: 'Zinc, Magnesium: 150mg, Iron, Protein: 30g (per 100g)',
            benefits: 'Improves sleep quality, balances hormones, and boosts immunity.',
            weights: [
                { label: '50g', price: 200 },
                { label: '100g', price: 395 },
                { label: '200g', price: 750 }
            ]
        },
        { 
            id: 'sd-4', 
            name: 'Melon Seeds', 
            category: 'Seeds', 
            stock: 22, 
            image: 'images/MELON (1).png', 
            desc: 'Pure Char Maghaz Seeds cleaned and sorted.',
            nutrition: 'Rich in B-Complex vitamins, Copper, and Essential Minerals.',
            benefits: 'Nourishes brain tissue, supports kidney health, and enhances dessert dishes.',
            weights: [
                { label: '50g', price: 220 },
                { label: '100g', price: 425 },
                { label: '200g', price: 800 }
            ]
        },
        { 
            id: 'sd-5', 
            name: 'Oats', 
            category: 'Seeds', 
            stock: 50, 
            image: 'images/OATS (1).png', 
            desc: 'Clean whole grain rolled oats, ideal for a quick and healthy breakfast.',
            nutrition: 'Energy: 389 kcal, Protein: 17g, Fiber: 10g (per 100g)',
            benefits: 'Keeps you full for longer, supports heart health, and gives steady natural energy.',
            weights: [
                { label: '250g', price: 150 },
                { label: '500g', price: 225 },
                { label: '1kg', price: 400 }
            ]
        },
        { 
            id: 'sl-1', 
            name: 'coarse Pink Salt', 
            category: 'Salt', 
            stock: 50, 
            image: 'images/COARSE (1).png', 
            desc: 'Natural rock salt from the Khewra mines, unrefined and free from additives.',
            nutrition: 'Sodium: ~38g, naturally contains trace minerals like magnesium, calcium and potassium (per 100g).',
            benefits: 'Adds rich flavor to food, provides trace minerals, and is a purer alternative to refined table salt.',
            weights: [
                { label: '385g', price: 150 },
                
            ]
        },
        { 
            id: 'sl-2', 
            name: 'Black Salt', 
            category: 'Salt', 
            stock: 50, 
            image: 'images/BLACK (1).png', 
            desc: 'Traditional Kala Namak with a distinct tangy flavor, perfect for chaat, raita and fruits.',
            nutrition: 'Sodium: ~36g, contains sulphur compounds and trace minerals (per 100g).',
            benefits: 'Aids digestion, helps relieve bloating and gas, and adds a unique taste to snacks.',
            weights: [
                { label: '385g', price: 150 },
               
            ]
        },
        { 
            id: 'tl-1', 
            name: 'Lemon Grass Tea', 
            category: 'Herbs', 
            stock: 50, 
            image: 'images/GRASS (1).png', 
            desc: 'Pure dried lemon grass leaves with a fresh citrus aroma. A soothing, caffeine-free herbal tea.',
            nutrition: 'Caffeine-free and almost zero calories per cup when taken without sugar.',
            benefits: 'A warm, refreshing herbal drink that helps you relax and feel light after meals. Best enjoyed with a spoon of honey.',
            weights: [
                { label: '50g', price: 225 },
                { label: '100g', price: 425 },
                { label: '200g', price: 800 }
            ]
        },
        { 
            id: 'sn-1', 
            name: 'Roasted Chickpeas', 
            category: 'Snacks', 
            stock: 50, 
            image: 'images/CHANA (1).png', 
            desc: 'Crunchy roasted chickpeas (Bhuna Chana), a light and protein-rich everyday snack.',
            nutrition: 'Energy: 364 kcal, Protein: 19g, Fiber: 17g (per 100g)',
            benefits: 'A filling, high-protein snack that supports digestion and keeps hunger away between meals.',
            weights: [
                { label: '250g', price: 350 },
                { label: '500g', price: 650 },
                { label: '1kg', price: 1200 }
            ]
        },
        { 
            id: 'df-4', 
            name: 'Dry Dates (N)', 
            category: 'Dry Fruits', 
            stock: 50, 
            image: '', 
            desc: 'Premium dry dates (N), naturally sweet and soft, a wholesome everyday treat.',
            nutrition: 'Rich in natural sugars, fiber, potassium and iron.',
            benefits: 'Gives instant natural energy, supports digestion, and is a healthy alternative to sugary snacks.',
            weights: [
                { label: '250g', price: 400 },
                { label: '500g', price: 750 },
                { label: '1kg', price: 1400 }
            ]
        },
        { 
            id: 'sd-6', 
            name: 'White Sesame', 
            category: 'Seeds', 
            stock: 50, 
            image: 'images/WHITE (1).png', 
            desc: 'Clean, hulled white sesame seeds (Safed Til) for cooking, baking and sweets.',
            nutrition: 'Rich in calcium, healthy fats, copper and magnesium.',
            benefits: 'Supports bone health, adds a nutty flavor to meals, and is a good source of healthy fats.',
            weights: [
                { label: '100g', price: 250 },
                { label: '200g', price: 350 }
            ]
        },
        { 
            id: 'sl-3', 
            name: 'Refined Pink Salt', 
            category: 'Salt', 
            stock: 50, 
            image: 'images/SALT.png', 
            desc: 'Finely ground refined pink salt, clean and easy to use for everyday cooking and table use.',
            nutrition: 'Sodium: ~38g, contains trace minerals (per 100g).',
            benefits: 'Fine texture dissolves quickly in food and adds a mild, balanced salty flavor.',
            weights: [
                { label: '385g', price: 150 },
                { label: '1kg', price: 200 },
                
            ]
        },
        { 
            id: 'hb-1', 
            name: 'Moringa Powder', 
            category: 'Herbs', 
            stock: 50, 
            image: 'images/MORINGA (1).png', 
            desc: 'Pure dried moringa leaf powder (Sohanjna), finely ground and easy to add to smoothies, tea or meals.',
            nutrition: 'Rich in iron, calcium, vitamin A and vitamin C, with natural plant antioxidants.',
            benefits: 'Supports natural energy, boosts daily nutrition, and blends easily into drinks and food.',
            weights: [
                { label: '50g', price: 150 },
                { label: '100g', price: 275 },
                { label: '200g', price: 400 }
            ]
        }
    ],
    orders: []
};
 
/* =====================================================================
   SHOP SETTINGS - edit these values when you are ready
   ===================================================================== */
const SHOP_CONFIG = {
    // Delivery fee charged when the order is BELOW FREE_SHIPPING_MIN.
    // Rs. 250 delivery on orders below FREE_SHIPPING_MIN (set 0 to make delivery free for everyone).
    SHIPPING_FEE: 250,
    FREE_SHIPPING_MIN: 2500,
 
    WHATSAPP_NUMBER: '923282288801',
 
    // Optional: URL of your backend that receives new orders (POST, JSON).
    // Leave empty until your seller dashboard / backend is ready.
    ORDER_API_URL: '',
 
    // Coupon code -> discount percent
    COUPONS: { ORGANIC10: 10 }
};
 
const PLACEHOLDER_IMG = "data:image/svg+xml;utf8," + encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='400' height='400' fill='#FAF6F0'/>" +
    "<text x='200' y='215' font-size='64' text-anchor='middle'>🌿</text></svg>");
 
const PAYMENT_LABELS = { COD: 'Cash on Delivery', WALLET: 'JazzCash / Easypaisa' };
const FILTER_ACTIVE = ['bg-olive', 'text-white', 'hover:bg-oliveHover'];
const FILTER_INACTIVE = ['text-darkText', 'dark:text-cream', 'hover:bg-goldenLight/40', 'dark:hover:bg-slate-700'];
 
/* ===================== helpers ===================== */
function loadStored(key) {
    try {
        const v = JSON.parse(localStorage.getItem(key));
        return Array.isArray(v) ? v : [];
    } catch (e) { return []; }
}
function saveStored(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
}
function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function formatPrice(n) { return 'Rs. ' + Number(n).toLocaleString(); }
function getProduct(id) { return DB_API.products.find(p => p.id === id); }
// Image paths in DB_API already include the folder (e.g. 'public/almond.jpg'),
// so do NOT add another folder in front.
function imgSrc(p) { return p.image ? encodeURI(p.image.replace(/^public\//, '')) : PLACEHOLDER_IMG; }
 
/* ===================== state ===================== */
let cart = loadStored('drypops-cart');
let wishlist = loadStored('drypops-wishlist');
let customBox = [];
let appliedDiscountPercent = 0;
let currentCategory = 'all';
let toastTimer = null;
 
function sanitizeStoredState() {
    // Re-price saved cart lines from the current catalogue and drop anything invalid
    cart = cart.filter(item => item && typeof item.title === 'string' && item.quantity > 0).map(item => {
        if (item.components) return item.components.every(getProduct) ? item : null;
        const p = getProduct(item.id);
        const w = p && p.weights.find(x => x.label === item.weightLabel);
        if (!w) return null;
        item.price = w.price;
        item.key = `${item.id}|${item.weightLabel}`;
        item.quantity = Math.min(item.quantity, Math.max(p.stock, 0));
        return item.quantity > 0 ? item : null;
    }).filter(Boolean);
    wishlist = wishlist.filter(id => typeof id === 'string' && getProduct(id));
}
 
window.addEventListener('DOMContentLoaded', () => {
    if (window.AOS) {
        AOS.init({ duration: 800, once: true, offset: 100, easing: 'ease-out-cubic' });
    }
    sanitizeStoredState();
    renderHomePageProducts();
    renderBoxBuilderOptions();
    renderDeals();
    updateCartUI();
    refreshWishlistUI();
 
    // Close modals with Escape or by clicking the dark backdrop
    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        if (!document.getElementById('searchModal').classList.contains('hidden')) toggleSearchModal();
        if (!document.getElementById('cartSidebar').classList.contains('hidden')) toggleCart();
        closeMobileMenu();
    });
    document.getElementById('searchModal').addEventListener('click', e => {
        if (e.target.id === 'searchModal') toggleSearchModal();
    });
});
 
function refreshAOS() {
    if (window.AOS) setTimeout(() => AOS.refreshHard ? AOS.refreshHard() : AOS.refresh(), 100);
}
 
/* ===================== navigation ===================== */
function showView(viewId, noScroll) {
    document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById(`view-${viewId}`);
    if (target) {
        target.classList.remove('hidden');
        if (!noScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
        refreshAOS();
    }
    closeMobileMenu();
}
 
function goToSection(id) {
    closeMobileMenu();
    const el = document.getElementById(id);
    const inHome = el && el.closest('#view-home');
    if (inHome && document.getElementById('view-home').classList.contains('hidden')) showView('home', true);
    setTimeout(() => {
        const t = document.getElementById(id);
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
}
 
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const open = menu.classList.toggle('hidden') === false;
    document.getElementById('mobileMenuBtn').setAttribute('aria-expanded', String(open));
    document.getElementById('mobileMenuIcon').className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}
function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (!menu || menu.classList.contains('hidden')) return;
    menu.classList.add('hidden');
    document.getElementById('mobileMenuBtn').setAttribute('aria-expanded', 'false');
    document.getElementById('mobileMenuIcon').className = 'fa-solid fa-bars';
}
 
function filterCategory(cat) {
    currentCategory = cat;
    const homeHidden = document.getElementById('view-home').classList.contains('hidden');
    if (homeHidden) showView('home', true);
    applyCategoryFilter();
    closeMobileMenu();
    setTimeout(() => {
        document.getElementById('categoryFilterBar').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, homeHidden ? 120 : 0);
}
 
function applyCategoryFilter() {
    document.querySelectorAll('.category-section').forEach(s => {
        s.classList.toggle('hidden', currentCategory !== 'all' && s.dataset.category !== currentCategory);
    });
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const active = btn.dataset.category === currentCategory;
        FILTER_ACTIVE.forEach(c => btn.classList.toggle(c, active));
        FILTER_INACTIVE.forEach(c => btn.classList.toggle(c, !active));
    });
    refreshAOS();
}
 
/* ===================== stock helpers ===================== */
function itemProducts(item) { return item.components ? item.components : [item.id]; }
 
function unitsInCart(productId) {
    return cart.reduce((sum, item) => sum + item.quantity * itemProducts(item).filter(id => id === productId).length, 0);
}
function availableStock(productId) {
    const p = getProduct(productId);
    return p ? p.stock - unitsInCart(productId) : 0;
}
// Returns the name of the first product that cannot cover `ids` on top of the cart, or null
function stockProblem(ids) {
    const need = {};
    ids.forEach(id => { need[id] = (need[id] || 0) + 1; });
    for (const id in need) {
        if (availableStock(id) < need[id]) {
            const p = getProduct(id);
            return p ? p.name : id;
        }
    }
    return null;
}
 
/* ===================== product cards ===================== */
function wishButton(productId, extra) {
    return `<button type="button" data-id="${productId}" onclick="toggleWishlist('${productId}')" aria-label="Add to wishlist" class="wish-btn ${extra}"><i class="fa-solid fa-heart"></i></button>`;
}
 
function updateCardWeightPrice(productId, selectEl) {
    const product = getProduct(productId);
    if (!product) return;
    const weightObj = product.weights.find(w => w.label === selectEl.value);
    if (!weightObj) return;
    const priceDisplay = document.getElementById(`price-display-${productId}`);
    if (priceDisplay) {
        priceDisplay.innerText = formatPrice(weightObj.price);
        priceDisplay.classList.add('scale-110');
        setTimeout(() => priceDisplay.classList.remove('scale-110'), 200);
    }
}
 
function renderHomePageProducts() {
    const container = document.getElementById('dynamicProductsContainer');
    const categories = ['Dry Fruits', 'Oils', 'Honey', 'Seeds', 'Salt', 'Herbs', 'Snacks'];
 
    container.innerHTML = categories.map((cat, idx) => {
        const catProducts = DB_API.products.filter(p => p.category === cat);
        const sectionId = cat.toLowerCase().replace(' ', '-');
 
        return `
            <section id="${sectionId}" data-category="${cat}" class="category-section py-14 ${idx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-cream dark:bg-slate-950'} border-t border-goldenHoney/20">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="mb-8" data-aos="fade-right">
                        <span class="text-xs font-bold uppercase tracking-widest text-olive bg-olive/10 px-3 py-1 rounded-full">Category 0${idx + 1}</span>
                        <h2 class="text-3xl font-extrabold text-deepBrown dark:text-cream mt-2">${cat}</h2>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        ${catProducts.map((p, pIdx) => {
                            const defaultWeight = p.weights[0];
                            const soldOut = p.stock <= 0;
                            return `
                            <div class="interactive-card bg-cream/60 dark:bg-slate-800 rounded-2xl border border-goldenHoney/30 p-4 flex flex-col justify-between group" data-aos="fade-up" data-aos-delay="${(pIdx + 1) * 100}">
                                <div>
                                    <div class="relative overflow-hidden rounded-xl bg-white dark:bg-slate-700 mb-3">
                                        <img src="${imgSrc(p)}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.onerror=null;this.src=PLACEHOLDER_IMG" class="block w-full h-auto group-hover:scale-105 transition-transform duration-700">
                                        ${wishButton(p.id, 'absolute top-2.5 right-2.5 bg-white/90 dark:bg-slate-900/80 w-9 h-9 flex items-center justify-center rounded-full text-deepBrown shadow-md transition-all hover:scale-110 active:scale-95')}
                                        <button type="button" onclick="openProductDetail('${p.id}')" class="absolute inset-x-3 bottom-3 bg-deepBrown/90 text-goldenLight text-xs py-2.5 rounded-xl font-bold opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
                                            <i class="fa-solid fa-eye mr-1"></i> Quick View Details
                                        </button>
                                    </div>
                                    <h3 class="font-bold text-deepBrown dark:text-cream text-base group-hover:text-olive transition-colors cursor-pointer" onclick="openProductDetail('${p.id}')">${escapeHtml(p.name)}</h3>
                                    <p class="text-xs text-darkText/70 dark:text-slate-400 line-clamp-1 mt-0.5">${escapeHtml(p.desc)}</p>
 
                                    <div class="mt-3">
                                        <label for="weight-select-${p.id}" class="block text-[11px] font-bold text-darkText/60 dark:text-slate-400 mb-1">Select Weight / Size:</label>
                                        <select id="weight-select-${p.id}" onchange="updateCardWeightPrice('${p.id}', this)" class="w-full bg-white dark:bg-slate-700 text-xs font-semibold p-2 rounded-xl border border-goldenHoney/30 focus:outline-none focus:border-goldenHoney">
                                            ${p.weights.map(w => `<option value="${w.label}">${w.label} - ${formatPrice(w.price)}</option>`).join('')}
                                        </select>
                                    </div>
 
                                    <div class="mt-2 text-[11px] font-semibold ${p.stock < 10 ? 'text-red-500' : 'text-darkText/50 dark:text-slate-400'} flex items-center gap-1">
                                        <span class="w-2 h-2 rounded-full ${soldOut ? 'bg-red-500' : p.stock < 10 ? 'bg-red-500 animate-ping' : 'bg-emerald-500'}"></span>
                                        ${soldOut ? 'Out of stock' : p.stock < 10 ? `Only ${p.stock} left` : `Stock: ${p.stock} units`}
                                    </div>
                                </div>
 
                                <div class="mt-4 flex items-center justify-between pt-3 border-t border-goldenHoney/20">
                                    <span id="price-display-${p.id}" class="font-extrabold text-goldenHoney text-base transition-transform duration-200">${formatPrice(defaultWeight.price)}</span>
                                    <button type="button" onclick="addSelectedWeightToCart('${p.id}')" ${soldOut ? 'disabled' : ''} class="bg-olive hover:bg-oliveHover text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-md btn-shine disabled:opacity-50 disabled:cursor-not-allowed">
                                        ${soldOut ? 'Sold Out' : '+ Add To Cart'}
                                    </button>
                                </div>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </section>
        `;
    }).join('');
 
    applyCategoryFilter();
    refreshWishlistUI();
}
 
function addSelectedWeightToCart(productId) {
    const product = getProduct(productId);
    if (!product) return;
    const selectEl = document.getElementById(`weight-select-${productId}`);
    const label = selectEl ? selectEl.value : product.weights[0].label;
    const weightObj = product.weights.find(w => w.label === label);
    if (!weightObj) return;
    addToCart({ id: product.id, title: `${product.name} (${label})`, price: weightObj.price, weightLabel: label });
}
 
function openProductDetail(productId) {
    const product = getProduct(productId);
    if (!product) return;
 
    const defaultWeight = product.weights[0];
    const soldOut = product.stock <= 0;
    const container = document.getElementById('productDetailContainer');
 
    container.innerHTML = `
        <div class="rounded-3xl overflow-hidden border border-goldenHoney/30 shadow-2xl bg-white dark:bg-slate-800">
            <img src="${imgSrc(product)}" alt="${escapeHtml(product.name)}" onerror="this.onerror=null;this.src=PLACEHOLDER_IMG" class="block w-full h-auto hover:scale-105 transition-transform duration-700">
        </div>
        <div class="space-y-6">
            <div>
                <span class="text-xs font-bold uppercase tracking-widest text-olive bg-olive/10 px-3 py-1 rounded-full">${product.category}</span>
                <h1 class="text-3xl sm:text-4xl font-extrabold text-deepBrown dark:text-cream mt-2">${escapeHtml(product.name)}</h1>
                <p id="detailPriceDisplay" class="text-3xl font-extrabold text-goldenHoney mt-2">${formatPrice(defaultWeight.price)}</p>
            </div>
 
            <p class="text-sm text-darkText/80 dark:text-slate-300 leading-relaxed">${escapeHtml(product.desc)}</p>
 
            <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-goldenHoney/30 shadow-sm">
                <label for="detailWeightSelect" class="block text-xs font-bold text-deepBrown dark:text-goldenLight mb-2">Choose Weight / Pack Size:</label>
                <select id="detailWeightSelect" onchange="updateDetailPrice('${product.id}', this.value)" class="w-full bg-cream dark:bg-slate-700 text-xs font-bold p-3 rounded-xl border border-goldenHoney/40 focus:outline-none focus:border-goldenHoney">
                    ${product.weights.map(w => `<option value="${w.label}">${w.label} - ${formatPrice(w.price)}</option>`).join('')}
                </select>
            </div>
 
            <div class="space-y-3 text-xs">
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-goldenHoney/20 shadow-sm">
                    <h4 class="font-bold text-deepBrown dark:text-goldenLight mb-1 flex items-center"><i class="fa-solid fa-heart-pulse mr-2 text-goldenHoney"></i> Health Benefits</h4>
                    <p class="text-darkText/80 dark:text-slate-300">${escapeHtml(product.benefits)}</p>
                </div>
                <div class="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-goldenHoney/20 shadow-sm">
                    <h4 class="font-bold text-deepBrown dark:text-goldenLight mb-1 flex items-center"><i class="fa-solid fa-leaf mr-2 text-olive"></i> Nutritional Breakdown</h4>
                    <p class="text-darkText/80 dark:text-slate-300">${escapeHtml(product.nutrition)}</p>
                </div>
            </div>
 
            <div class="flex items-center gap-4">
                <button type="button" onclick="addDetailViewToCart('${product.id}')" ${soldOut ? 'disabled' : ''} class="flex-1 bg-olive hover:bg-oliveHover text-white font-bold py-3.5 rounded-xl text-xs shadow-lg flex items-center justify-center gap-2 transition-all active:scale-95 btn-shine disabled:opacity-50 disabled:cursor-not-allowed">
                    <i class="fa-solid fa-basket-shopping"></i> ${soldOut ? 'Out of Stock' : 'Add Selected Weight To Cart'}
                </button>
                ${wishButton(product.id, 'p-3.5 rounded-xl border border-goldenHoney/30 text-deepBrown dark:text-cream hover:scale-110 active:scale-95 transition-all')}
            </div>
        </div>
    `;
    refreshWishlistUI();
    showView('product-detail');
}
 
function updateDetailPrice(productId, label) {
    const product = getProduct(productId);
    if (!product) return;
    const weightObj = product.weights.find(w => w.label === label);
    if (weightObj) document.getElementById('detailPriceDisplay').innerText = formatPrice(weightObj.price);
}
 
function addDetailViewToCart(productId) {
    const product = getProduct(productId);
    if (!product) return;
    const selectEl = document.getElementById('detailWeightSelect');
    const label = selectEl ? selectEl.value : product.weights[0].label;
    const weightObj = product.weights.find(w => w.label === label);
    if (!weightObj) return;
    addToCart({ id: product.id, title: `${product.name} (${label})`, price: weightObj.price, weightLabel: label });
}
 
/* ===================== custom gift box ===================== */
function renderBoxBuilderOptions() {
    const container = document.getElementById('boxBuilderOptions');
    const selectable = DB_API.products.slice(0, 6);
 
    container.innerHTML = selectable.map(p => `
        <div class="interactive-card bg-white dark:bg-slate-800 p-4 rounded-2xl border border-goldenHoney/30 flex flex-col justify-between">
            <div>
                <h4 class="font-bold text-sm text-deepBrown dark:text-cream">${escapeHtml(p.name)}</h4>
                <select id="box-weight-${p.id}" aria-label="Weight for ${escapeHtml(p.name)}" class="mt-2 w-full bg-cream dark:bg-slate-700 text-xs p-2 rounded-xl border border-goldenHoney/30 focus:outline-none focus:border-goldenHoney">
                    ${p.weights.map(w => `<option value="${w.label}">${w.label} - ${formatPrice(w.price)}</option>`).join('')}
                </select>
            </div>
            <button type="button" onclick="addBoxItemWithWeight('${p.id}')" class="mt-3 text-xs bg-goldenLight/40 dark:bg-slate-700 text-deepBrown dark:text-cream hover:bg-olive hover:text-white font-bold py-2 px-3 rounded-xl transition-all active:scale-95">
                + Add To Custom Box
            </button>
        </div>
    `).join('');
}
 
function addBoxItemWithWeight(productId) {
    const product = getProduct(productId);
    if (!product) return;
 
    if (customBox.length >= 4) {
        showToast('Maximum 4 items allowed in custom box!');
        return;
    }
    const label = document.getElementById(`box-weight-${productId}`).value;
    const weightObj = product.weights.find(w => w.label === label);
    if (!weightObj) return;
 
    const problem = stockProblem([...customBox.map(i => i.id), productId]);
    if (problem) {
        showToast(`Sorry, not enough ${problem} in stock`);
        return;
    }
 
    customBox.push({ id: product.id, name: `${product.name} (${label})`, price: weightObj.price });
    updateBoxUI();
    showToast(`Added ${product.name} (${label}) to custom box`);
}
 
function updateBoxUI() {
    const list = document.getElementById('customBoxList');
    const total = document.getElementById('customBoxTotal');
    if (customBox.length === 0) {
        list.innerHTML = `<p class="text-slate-400 italic text-center py-6">No items added to box yet...</p>`;
        total.innerText = 'Rs. 0';
        return;
    }
    const sum = customBox.reduce((a, b) => a + b.price, 0);
    list.innerHTML = customBox.map((item, idx) => `
        <div class="flex justify-between items-center bg-cream dark:bg-slate-700 p-2.5 rounded-xl border border-goldenHoney/20 animate-fadeInUp">
            <span>${escapeHtml(item.name)}</span>
            <button type="button" onclick="removeBoxItem(${idx})" aria-label="Remove ${escapeHtml(item.name)}" class="text-red-500 font-bold ml-2 hover:scale-125 transition-transform">x</button>
        </div>
    `).join('');
    total.innerText = formatPrice(sum);
}
 
/* ===================== seed deals ===================== */
// Edit prices / items here. Flax is not in the shop catalogue, so only the
// products listed in "components" are stock-checked; Flax is listed in "items" for display.
const DEALS = [
    {
        id: 'deal-4x100',
        title: 'Deal 1: 4 Seeds (All 100g)',
        items: ['Chia 100g', 'Pumpkin 100g', 'Flax 100g', 'Sunflower 100g'],
        components: ['sd-1', 'sd-3', 'sd-2'],
        price: 1375,
        text: 'Buy a Pack of Four for Rs. 1,375 and Get a Surprise Gift!'
    },
    {
        id: 'deal-5x50',
        title: 'Deal 2: 5 Seeds (All 50g)',
        items: ['Chia 50g', 'Flax 50g', 'Melon 50g', 'Pumpkin 50g', 'Sunflower 50g'],
        components: ['sd-1', 'sd-4', 'sd-3', 'sd-2'],
        price: 900,
        text: 'Buy 5 Packs for Rs. 900 and Get a Surprise Gift!'
    },
    {
        id: 'deal-weekend',
        title: 'Weekend Deal',
        items: ['Chia Seeds 100g', 'Pumpkin Seeds 100g', 'Flax Seeds 100g', 'Sunflower Seeds 100g', 'Honey 125g'],
        components: ['sd-1', 'sd-3', 'sd-2', 'hn-1'],
        price: 1500,
        gift: false,
        text: 'Weekend Special: 4 Seeds + Honey for Rs. 1,500 only!'
    }
];
 
function renderDeals() {
    const el = document.getElementById('dealsContainer');
    if (!el) return;
    el.innerHTML = DEALS.map((d, i) => `
        <div class="interactive-card bg-cream/60 dark:bg-slate-800 rounded-3xl border-2 border-goldenHoney/40 p-6 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="${(i + 1) * 100}">
            <div>
                <div class="flex items-center justify-between mb-3">
                    <h3 class="font-extrabold text-lg text-deepBrown dark:text-cream">${escapeHtml(d.title)}</h3>
                    <i class="fa-solid fa-gift text-goldenHoney text-xl"></i>
                </div>
                <ul class="space-y-1.5 text-sm text-darkText dark:text-slate-300 mb-4">
                    ${d.items.map(x => `<li class="flex items-center gap-2"><i class="fa-solid fa-circle-check text-olive text-xs"></i> ${escapeHtml(x)}</li>`).join('')}
                </ul>
                <p class="text-xs font-semibold text-olive">${escapeHtml(d.text)}</p>
            </div>
            <div class="mt-5 pt-4 border-t border-goldenHoney/20 flex items-center justify-between">
                <span class="font-extrabold text-goldenHoney text-2xl">${formatPrice(d.price)}</span>
                <button type="button" onclick="addDealToCart('${d.id}')" class="bg-olive hover:bg-oliveHover text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-md btn-shine">
                    Add Deal To Cart
                </button>
            </div>
        </div>
    `).join('');
}
 
function addDealToCart(dealId) {
    const d = DEALS.find(x => x.id === dealId);
    if (!d) return;
    addToCart({
        key: d.id,
        id: d.id,
        title: d.title,
        price: d.price,
        weightLabel: 'Deal Pack',
        components: d.components,
        details: d.gift === false ? d.items : d.items.concat(['Surprise Gift'])
    });
}
 
function removeBoxItem(index) {
    customBox.splice(index, 1);
    updateBoxUI();
}
 
function addCustomBoxToCart() {
    if (customBox.length === 0) {
        showToast('Add items to your custom box first!');
        return;
    }
    const sum = customBox.reduce((a, b) => a + b.price, 0);
    const added = addToCart({
        // unique key so two different boxes never merge into one line
        key: `box-${Date.now()}-${Math.floor(Math.random() * 1e6)}`,
        id: 'cb-custom',
        title: `Custom Gift Box (${customBox.length} items)`,
        price: sum,
        weightLabel: 'Custom Pack',
        components: customBox.map(i => i.id),
        details: customBox.map(i => i.name)
    });
    if (added) {
        customBox = [];
        updateBoxUI();
    }
}
 
/* ===================== cart ===================== */
// Returns true when the item was added
function addToCart(item) {
    const key = item.key || `${item.id}|${item.weightLabel}`;
    const problem = stockProblem(itemProducts(item));
    if (problem) {
        showToast(`Sorry, no more ${problem} available in stock`);
        return false;
    }
    const existing = cart.find(i => i.key === key);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...item, key, quantity: 1 });
    }
    updateCartUI();
    showToast(`Added "${item.title}" to cart!`);
    return true;
}
 
function updateCartUI() {
    const cartCountEl = document.getElementById('cartCount');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotalEl = document.getElementById('cartTotal');
 
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    saveStored('drypops-cart', cart);
 
    cartCountEl.innerText = totalItems;
    cartCountEl.classList.add('scale-125');
    setTimeout(() => cartCountEl.classList.remove('scale-125'), 200);
    cartTotalEl.innerText = formatPrice(totalPrice);
 
    if (cart.length === 0) {
        cartItemsList.innerHTML = `<p class="text-center text-slate-400 text-xs py-8">Your cart is empty.</p>`;
        return;
    }
 
    cartItemsList.innerHTML = cart.map((item, index) => `
        <div class="flex items-center justify-between gap-3 bg-cream/60 dark:bg-slate-800 p-3 rounded-xl border border-goldenHoney/20 animate-fadeInUp">
            <div class="min-w-0">
                <h4 class="font-bold text-xs text-deepBrown dark:text-cream">${escapeHtml(item.title)}</h4>
                ${item.details ? `<p class="text-[11px] text-darkText/60 dark:text-slate-400 mt-0.5">${item.details.map(escapeHtml).join(', ')}</p>` : ''}
                <p class="text-xs text-darkText/60 dark:text-slate-400">${formatPrice(item.price)} x ${item.quantity}</p>
            </div>
            <div class="flex items-center gap-2 shrink-0">
                <button type="button" onclick="changeQty(${index}, -1)" aria-label="Decrease quantity" class="w-6 h-6 rounded bg-goldenLight text-deepBrown font-bold text-xs flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">-</button>
                <span class="text-xs font-bold dark:text-slate-200">${item.quantity}</span>
                <button type="button" onclick="changeQty(${index}, 1)" aria-label="Increase quantity" class="w-6 h-6 rounded bg-goldenLight text-deepBrown font-bold text-xs flex items-center justify-center hover:scale-110 active:scale-95 transition-transform">+</button>
            </div>
        </div>
    `).join('');
}
 
function changeQty(index, delta) {
    const item = cart[index];
    if (!item) return;
    if (delta > 0) {
        const problem = stockProblem(itemProducts(item));
        if (problem) {
            showToast(`Sorry, no more ${problem} available in stock`);
            return;
        }
    }
    item.quantity += delta;
    if (item.quantity <= 0) cart.splice(index, 1);
    updateCartUI();
    if (!document.getElementById('view-checkout').classList.contains('hidden')) renderCheckoutSummary();
}
 
/* ===================== pricing ===================== */
function calcShipping(subtotal) {
    return subtotal >= SHOP_CONFIG.FREE_SHIPPING_MIN ? 0 : SHOP_CONFIG.SHIPPING_FEE;
}
function calcTotals() {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = Math.round((subtotal * appliedDiscountPercent) / 100);
    const shipping = cart.length ? calcShipping(subtotal) : 0;
    return { subtotal, discount, shipping, total: subtotal - discount + shipping };
}
 
/* ===================== checkout ===================== */
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    toggleCart();
    renderCheckoutSummary();
    showView('checkout');
}
 
function applyCouponCode() {
    const code = document.getElementById('couponCodeInput').value.trim().toUpperCase();
    const msgEl = document.getElementById('couponMsg');
    const percent = SHOP_CONFIG.COUPONS[code];
 
    if (percent) {
        appliedDiscountPercent = percent;
        msgEl.innerText = `Coupon applied! ${percent}% discount subtracted.`;
        msgEl.className = 'text-xs mt-2 text-olive font-bold animate-fadeInUp';
    } else {
        appliedDiscountPercent = 0;
        msgEl.innerText = 'Invalid coupon code. Try ORGANIC10.';
        msgEl.className = 'text-xs mt-2 text-red-500 font-bold animate-fadeInUp';
    }
    renderCheckoutSummary();
}
 
function renderCheckoutSummary() {
    const container = document.getElementById('checkoutItemsList');
    const t = calcTotals();
 
    container.innerHTML = cart.map(item => `
        <div class="flex justify-between items-center pt-2 gap-3">
            <div>
                <p class="font-bold text-darkText dark:text-slate-200">${escapeHtml(item.title)}</p>
                ${item.details ? `<p class="text-[11px] text-slate-400">${item.details.map(escapeHtml).join(', ')}</p>` : ''}
                <span class="text-slate-400">Qty: ${item.quantity}</span>
            </div>
            <span class="font-bold text-goldenHoney whitespace-nowrap">${formatPrice(item.price * item.quantity)}</span>
        </div>
    `).join('');
 
    document.getElementById('coSubtotal').innerText = formatPrice(t.subtotal);
    document.getElementById('coDiscount').innerText = `- ${formatPrice(t.discount)}`;
    document.getElementById('coShipping').innerText = t.shipping === 0 ? 'FREE' : formatPrice(t.shipping);
    document.getElementById('coTotal').innerText = formatPrice(t.total);
}
 
function togglePaymentFields(method) {
    document.getElementById('walletNote').classList.toggle('hidden', method !== 'WALLET');
}
 
/* ---- Serial order numbers: DP-001, DP-002, DP-003 ... ----
   The number comes from a free online counter so it is shared by ALL customers
   and devices: 1st order 001, 2nd order 002, and so on (no extra files needed).
   If the counter is not reachable, it falls back to a counter in this browser.
   To restart from 001, change 'orders' in the URL below to a new name (e.g. 'orders2'). */
const ORDER_COUNTER_URL = 'https://api.counterapi.dev/v1/drypops-pk/orders/up';
const ORDER_SEQ_KEY = 'drypops-order-seq';
function formatOrderRef(n) {
    return 'DP-' + String(n).padStart(3, '0');
}
function getLocalOrderRef() {
    let n = 0;
    try { n = parseInt(localStorage.getItem(ORDER_SEQ_KEY), 10) || 0; } catch (e) { /* ignore */ }
    n += 1;
    try { localStorage.setItem(ORDER_SEQ_KEY, String(n)); } catch (e) { /* ignore */ }
    return formatOrderRef(n);
}
async function getNextOrderRef() {
    try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 6000);
        const res = await fetch(ORDER_COUNTER_URL, { signal: ctrl.signal });
        clearTimeout(timer);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();
        if (!data || !Number.isInteger(data.count) || data.count < 1) throw new Error('Bad response');
        return formatOrderRef(data.count);
    } catch (err) {
        console.warn('Server order number unavailable, using local counter:', err);
        return getLocalOrderRef();
    }
}
function resetOrderCounter() {
    try { localStorage.removeItem(ORDER_SEQ_KEY); } catch (e) { /* ignore */ }
    console.log('Local order counter reset.');
}
 
function buildOrderMessage(order) {
    const lines = [
        'Hi DryPops! I would like to confirm this order:',
        `Order ID: ${order.ref}`,
        '',
        `Name: ${order.name}`,
        `Phone: ${order.phone}`,
        `Address: ${order.address}, ${order.city}`
    ];
    if (order.email) lines.push(`Email: ${order.email}`);
    lines.push(`Payment: ${PAYMENT_LABELS[order.paymentMethod] || order.paymentMethod}`, '', 'Items:');
    order.items.forEach((i, idx) => {
        lines.push(`${idx + 1}. ${i.title} x ${i.quantity} = ${formatPrice(i.price * i.quantity)}`);
        if (i.details) lines.push(`   (${i.details.join(', ')})`);
    });
    lines.push('', `Subtotal: ${formatPrice(order.subtotal)}`);
    if (order.discount) lines.push(`Discount: - ${formatPrice(order.discount)}`);
    lines.push(`Delivery: ${order.shipping === 0 ? 'FREE' : formatPrice(order.shipping)}`);
    lines.push(`Total to pay: ${formatPrice(order.amount)}`);
    return `https://wa.me/${SHOP_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}
 
let isPlacingOrder = false;
async function handleCheckoutSubmit(e) {
    e.preventDefault();
    if (isPlacingOrder) return;
 
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        showView('home');
        return;
    }
 
    const phoneEl = document.getElementById('coPhone');
    const phone = phoneEl.value.replace(/[\s-]/g, '');
    if (!/^(\+92|92|0)3\d{9}$/.test(phone)) {
        showToast('Please enter a valid mobile number, e.g. 03XX-XXXXXXX');
        phoneEl.focus();
        return;
    }
 
    // Re-check stock for the whole cart before placing the order
    const ids = [...new Set(cart.flatMap(itemProducts))];
    for (const id of ids) {
        const p = getProduct(id);
        if (!p || unitsInCart(id) > p.stock) {
            showToast(`Sorry, not enough ${p ? p.name : 'stock'} available. Please reduce the quantity.`);
            return;
        }
    }
 
    const t = calcTotals();
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const form = e.target;
    isPlacingOrder = true;
    let orderRef;
    try { orderRef = await getNextOrderRef(); } finally { isPlacingOrder = false; }
    const order = {
        ref: orderRef,
        name: document.getElementById('coName').value.trim(),
        phone: phoneEl.value.trim(),
        address: document.getElementById('coAddress').value.trim(),
        city: document.getElementById('coCity').value.trim(),
        email: document.getElementById('coEmail').value.trim(),
        paymentMethod,
        subtotal: t.subtotal,
        discount: t.discount,
        shipping: t.shipping,
        amount: t.total,
        items: cart.map(i => ({ ...i })),
        date: new Date().toISOString()
    };
 
    // Reduce stock (per product, including gift-box components)
    cart.forEach(item => {
        itemProducts(item).forEach(id => {
            const p = getProduct(id);
            if (p) p.stock -= item.quantity;
        });
    });
 
    DB_API.orders.push(order);
 
    // FIX 1: empty the cart IMMEDIATELY (memory + saved copy in the browser),
    // before anything else that could fail. Otherwise a single error further
    // down leaves the old cart in localStorage and it comes back on reload.
    cart = [];
    appliedDiscountPercent = 0;
    try { localStorage.removeItem('drypops-cart'); } catch (err) { /* ignore */ }
 
    // Send the order to the Seller Center backend (see orders-sync.js).
    // Wrapped so a backend problem can never block the customer's confirmation.
    try {
        if (typeof sendOrderToBackend === 'function') sendOrderToBackend(order);
    } catch (err) { console.error('Order sync failed:', err); }
 
    // FIX 2: full order slip the customer can screenshot as proof
    document.getElementById('orderSuccessSummary').innerHTML = buildOrderSlip(order);
    document.getElementById('orderWhatsAppBtn').href = buildOrderMessage(order);
 
    // Reset the checkout form and the rest of the UI
    try {
        document.getElementById('couponCodeInput').value = '';
        document.getElementById('couponMsg').className = 'hidden';
        form.reset();
        togglePaymentFields('COD');
    } catch (err) { console.error(err); }
    updateCartUI();
    renderHomePageProducts();
    renderCheckoutSummary();
    showView('order-success');
}
 
function buildOrderSlip(order) {
    const when = new Date(order.date).toLocaleString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    const payLabel = PAYMENT_LABELS[order.paymentMethod] || order.paymentMethod;
    const note = order.paymentMethod === 'WALLET'
        ? 'We will message you on WhatsApp with our JazzCash / Easypaisa details. Your order is confirmed once payment is received.'
        : 'Please keep the exact amount ready. You pay when your order is delivered.';
    const row = (label, value) => `
        <div class="flex justify-between gap-4 py-1.5 border-b border-dashed border-slate-300">
            <span class="text-slate-500 shrink-0">${label}</span>
            <span class="font-bold text-slate-900 text-right break-words">${value}</span>
        </div>`;
 
    const itemsHtml = order.items.map((i, idx) => `
        <div class="flex justify-between gap-3 py-1.5 border-b border-dashed border-slate-300">
            <div class="min-w-0">
                <p class="font-bold text-slate-900">${idx + 1}. ${escapeHtml(i.title)}</p>
                ${i.details ? `<p class="text-[11px] text-slate-500">${i.details.map(escapeHtml).join(', ')}</p>` : ''}
                <p class="text-slate-500">${formatPrice(i.price)} x ${i.quantity}</p>
            </div>
            <span class="font-bold text-slate-900 whitespace-nowrap">${formatPrice(i.price * i.quantity)}</span>
        </div>`).join('');
 
    return `
    <div id="orderSlip" class="bg-white text-slate-800 rounded-2xl border-2 border-dashed border-goldenHoney p-5 sm:p-7 text-xs shadow-lg">
        <div class="text-center pb-4 border-b-2 border-slate-800">
            <h2 class="text-xl font-extrabold text-deepBrown tracking-wide">DryPops</h2>
            <p class="text-[11px] text-slate-500">drypops.pk</p>
            <p class="mt-2 font-extrabold text-sm tracking-widest text-slate-900">ORDER SLIP</p>
        </div>
 
        <div class="text-center py-4 border-b border-dashed border-slate-300">
            <p class="text-slate-500">Order Number</p>
            <p class="text-2xl font-extrabold text-goldenHoney tracking-wider">${escapeHtml(order.ref)}</p>
            <p class="text-slate-500 mt-1">${when}</p>
        </div>
 
        <div class="py-3">
            <p class="font-extrabold text-slate-900 mb-1 uppercase tracking-wide">Customer Details</p>
            ${row('Name', escapeHtml(order.name))}
            ${row('Phone / WhatsApp', escapeHtml(order.phone))}
            ${order.email ? row('Email', escapeHtml(order.email)) : ''}
            ${row('Address', escapeHtml(order.address))}
            ${row('City', escapeHtml(order.city))}
            ${row('Payment', escapeHtml(payLabel))}
        </div>
 
        <div class="py-3">
            <p class="font-extrabold text-slate-900 mb-1 uppercase tracking-wide">Items Ordered</p>
            ${itemsHtml}
        </div>
 
        <div class="pt-2 space-y-1">
            <div class="flex justify-between"><span class="text-slate-500">Subtotal</span><span class="font-bold text-slate-900">${formatPrice(order.subtotal)}</span></div>
            ${order.discount ? `<div class="flex justify-between"><span class="text-slate-500">Discount</span><span class="font-bold text-emerald-700">- ${formatPrice(order.discount)}</span></div>` : ''}
            <div class="flex justify-between"><span class="text-slate-500">Delivery</span><span class="font-bold text-slate-900">${order.shipping === 0 ? 'FREE' : formatPrice(order.shipping)}</span></div>
            <div class="flex justify-between text-base font-extrabold text-deepBrown pt-2 mt-1 border-t-2 border-slate-800">
                <span>TOTAL TO PAY</span><span>${formatPrice(order.amount)}</span>
            </div>
        </div>
 
        <p class="mt-4 text-center text-slate-600 leading-relaxed">${note}</p>
        <div class="mt-4 pt-3 border-t border-dashed border-slate-300 text-center text-[11px] text-slate-500">
            <p>Questions? WhatsApp / call: 0328-2288801</p>
            <p>Thank you for shopping with DryPops!</p>
        </div>
    </div>
    <p class="text-center text-[11px] text-slate-500 dark:text-slate-400 mt-3">
        <i class="fa-solid fa-camera"></i> Please take a screenshot of this slip and keep it as proof of your order.
    </p>`;
}
 
function checkoutViaWhatsApp() {
    if (cart.length === 0) {
        showToast('Cart is empty!');
        return;
    }
    const t = calcTotals();
    const lines = ['Hi DryPops! Order details:'];
    cart.forEach((i, idx) => {
        lines.push(`${idx + 1}. ${i.title} x ${i.quantity} = ${formatPrice(i.price * i.quantity)}`);
        if (i.details) lines.push(`   (${i.details.join(', ')})`);
    });
    lines.push('', `Total: ${formatPrice(t.total)}`);
    window.open(`https://wa.me/${SHOP_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
}
 
/* ===================== search ===================== */
function handleSearch(query) {
    const results = document.getElementById('searchResults');
    const q = query.trim().toLowerCase();
    if (!q) { results.innerHTML = ''; return; }
 
    const filtered = DB_API.products.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    results.innerHTML = filtered.length === 0
        ? `<p class="p-3 text-slate-400">No products found</p>`
        : filtered.map(p => `
            <div onclick="toggleSearchModal(); openProductDetail('${p.id}')" class="p-3 hover:bg-cream dark:hover:bg-slate-700 cursor-pointer flex justify-between items-center rounded-xl transition-colors">
                <span class="font-bold">${escapeHtml(p.name)}</span>
                <span class="text-goldenHoney font-bold">From ${formatPrice(p.weights[0].price)}</span>
            </div>
        `).join('');
}
 
function toggleSearchModal() {
    const modal = document.getElementById('searchModal');
    const box = document.getElementById('searchModalBox');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => {
            box.classList.remove('modal-hidden');
            box.classList.add('modal-visible');
            document.getElementById('searchInput').focus();
        }, 10);
    } else {
        box.classList.remove('modal-visible');
        box.classList.add('modal-hidden');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}
 
/* ===================== wishlist ===================== */
function toggleWishlist(productId) {
    const p = getProduct(productId);
    if (!p) return;
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast(`Removed "${p.name}" from Wishlist`);
    } else {
        wishlist.push(productId);
        showToast(`Added "${p.name}" to Wishlist!`);
    }
    saveStored('drypops-wishlist', wishlist);
    refreshWishlistUI();
}
 
function refreshWishlistUI() {
    document.getElementById('wishlistCount').innerText = wishlist.length;
    document.querySelectorAll('.wish-btn').forEach(btn => {
        const on = wishlist.includes(btn.dataset.id);
        btn.classList.toggle('wish-active', on);
        btn.setAttribute('aria-label', on ? 'Remove from wishlist' : 'Add to wishlist');
    });
}
 
function showWishlistToast() {
    if (wishlist.length === 0) {
        showToast('Wishlist is empty!');
        return;
    }
    showToast(`Wishlist: ${wishlist.map(id => getProduct(id).name).join(', ')}`);
}
 
/* ===================== misc UI ===================== */
function showQuizResult(goal, suggestion) {
    const res = document.getElementById('quizResult');
    res.classList.remove('hidden');
    res.innerHTML = `<i class="fa-solid fa-circle-check text-olive mr-1"></i> For <strong>${escapeHtml(goal)}</strong>, we recommend: <u>${escapeHtml(suggestion)}</u>`;
}
 
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const drawer = document.getElementById('cartDrawer');
    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('hidden');
        setTimeout(() => {
            drawer.classList.remove('drawer-closed');
            drawer.classList.add('drawer-open');
        }, 10);
    } else {
        drawer.classList.remove('drawer-open');
        drawer.classList.add('drawer-closed');
        setTimeout(() => sidebar.classList.add('hidden'), 400);
    }
}
 
function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('drypops-theme', isDark ? 'dark' : 'light'); } catch (e) { /* ignore */ }
}
 
// There is no mailing-list backend yet, so the subscription is confirmed over WhatsApp
function subscribeEmail(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value.trim();
    const text = `Hi DryPops! Please add me to your offers list. My email: ${email}`;
    window.open(`https://wa.me/${SHOP_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    showToast('Send the WhatsApp message to finish subscribing');
    e.target.reset();
}
 
function showToast(msg) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMsg').innerText = msg;
    toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.add('hidden'), 3000);
}
/* =====================================================================
   DryPops Chatbot (English, AI-powered)
   - Free-text questions go to /api/chat (Vercel serverless function) which
     calls Claude. The live catalog from DB_API / SHOP_CONFIG is sent along,
     so prices, stock, coupons and delivery info are always current.
   - If /api/chat is unreachable, a built-in rule-based English fallback
     answers the common questions.
   - Buttons add items to the cart, open checkout and send the order to
     WhatsApp using the existing cart functions above.
   ===================================================================== */
(function () {
    'use strict';
 
    if (typeof DB_API === 'undefined' || typeof SHOP_CONFIG === 'undefined') {
        console.warn('[DryPops chatbot] DB_API / SHOP_CONFIG not found.');
        return;
    }
 
    /* ---------------- helpers ---------------- */
    // false = works fully inside this file (no server needed).
    // true  = free-text questions are answered by AI via /api/chat (needs api/chat.js + API key on Vercel).
    const USE_AI = false;
 
    const WA = SHOP_CONFIG.WHATSAPP_NUMBER;
    const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const money = n => 'Rs. ' + Number(n).toLocaleString();
    const waLink = text => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
    const products = () => DB_API.products;
    const byId = id => products().find(p => p.id === id);
    const categories = () => [...new Set(products().map(p => p.category))];
    const cartItems = () => (typeof cart !== 'undefined' ? cart : []);
 
    const ALIASES = {
        'df-2': ['raisin', 'raisins', 'kishmish', 'sweet raisins'],
        'df-3': ['dates', 'date', 'khajoor', 'dry dates'],
        'ol-1': ['mustard', 'sarson', 'mustard oil'],
        'ol-2': ['coconut', 'coconut oil'],
        'ol-3': ['almond', 'badam', 'almond oil'],
        'ol-4': ['olive', 'olive oil'],
        'hn-1': ['honey', 'shehad', 'sidr', 'sidr honey'],
        'sd-1': ['chia', 'chia seeds'],
        'sd-2': ['sunflower', 'sunflower seeds'],
        'sd-3': ['pumpkin', 'pumpkin seeds'],
        'sd-4': ['melon', 'char maghaz', 'melon seeds'],
        'sd-5': ['oats', 'oat', 'rolled oats', 'jau'],
        'sl-1': ['pink salt', 'himalayan', 'himalayan salt', 'pink'],
        'sl-2': ['black salt', 'kala namak', 'black'],
        'tl-1': ['lemon grass', 'lemongrass', 'lemon grass tea', 'lemongrass tea', 'herbal tea', 'tea'],
        'df-4': ['dry dates n', 'dates n', 'dry dates (n)'],
        'sd-6': ['white sesame', 'sesame', 'sesame seeds', 'til', 'safed til'],
        'sl-3': ['refined pink salt', 'refined salt', 'refined pink'],
        'hb-1': ['moringa', 'moringa powder', 'sohanjna'],
        'sn-1': ['chickpeas', 'chickpea', 'chana', 'bhuna chana', 'roasted chana', 'roasted chickpeas']
    };
    const CAT_WORDS = {
        'Dry Fruits': ['dry fruit', 'dry fruits', 'dryfruit', 'dryfruits'],
        'Oils': ['oil', 'oils'],
        'Honey': ['honey'],
        'Seeds': ['seed', 'seeds'],
        'Salt': ['salt', 'salts'],
        'Herbs': ['herb', 'herbs', 'herbal', 'tea', 'teas', 'chai'],
        'Snacks': ['snack', 'snacks']
    };
 
    /* Live store knowledge sent to the AI with every question */
    function storeContext() {
        const fee = SHOP_CONFIG.SHIPPING_FEE, min = SHOP_CONFIG.FREE_SHIPPING_MIN;
        const lines = products().map(p =>
            `[${p.id}] ${p.name} | ${p.category} | ` +
            p.weights.map(w => `${w.label}: Rs. ${w.price}`).join(', ') +
            ` | stock: ${p.stock} | ${p.desc} | Benefits: ${p.benefits} | Nutrition: ${p.nutrition}`);
        const coupons = Object.entries(SHOP_CONFIG.COUPONS || {}).map(([k, v]) => `${k} = ${v}% off`).join(', ') || 'none';
        const pay = Object.values(typeof PAYMENT_LABELS !== 'undefined' ? PAYMENT_LABELS : { COD: 'Cash on Delivery' }).join(', ');
        return [
            'Store: DryPops (drypops.pk), online store for dry fruits, oils, honey, seeds, salts, herbs and snacks. Delivery across Pakistan.',
            `Delivery: ${fee === 0 ? 'currently free' : `Rs. ${fee} fee, free above Rs. ${min}`}. Delivery time depends on the city and is confirmed on WhatsApp.`,
            `Payment methods: ${pay}. For JazzCash/Easypaisa, account details are sent on WhatsApp.`,
            `Coupons: ${coupons}. Applied at checkout.`,
            'Contact: WhatsApp / phone 03282288801, email drypops1@gmail.com.',
            'Products:', ...lines
        ].join('\n');
    }
 
    /* ---------------- styles ---------------- */
    const css = `
    #dp-bot-btn{position:fixed;left:20px;bottom:24px;z-index:45;width:58px;height:58px;border-radius:50%;border:2px solid #D4AF37;background:#2C1810;color:#D4AF37;font-size:24px;cursor:pointer;box-shadow:0 10px 25px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;transition:transform .25s}
    #dp-bot-btn:hover{transform:scale(1.08)}
    #dp-bot-btn .dp-dot{position:absolute;top:2px;right:2px;width:14px;height:14px;border-radius:50%;background:#ef4444;border:2px solid #fff}
    #dp-bot-panel{position:fixed;left:20px;bottom:96px;z-index:45;width:370px;max-width:calc(100vw - 24px);height:560px;max-height:calc(100vh - 120px);background:#FBF9F5;color:#2B1E16;border-radius:20px;border:1px solid rgba(212,175,55,.5);box-shadow:0 25px 50px -12px rgba(0,0,0,.45);display:none;flex-direction:column;overflow:hidden;font-family:'Plus Jakarta Sans',system-ui,sans-serif}
    #dp-bot-panel.dp-open{display:flex;animation:dpPop .25s ease-out}
    @keyframes dpPop{from{opacity:0;transform:translateY(12px) scale(.97)}to{opacity:1;transform:none}}
    .dp-head{background:#2C1810;color:#FAF6F0;padding:12px 14px;display:flex;align-items:center;gap:10px;border-bottom:2px solid #D4AF37}
    .dp-avatar{width:38px;height:38px;border-radius:12px;background:#D4AF37;color:#2C1810;display:flex;align-items:center;justify-content:center;font-size:18px}
    .dp-head b{display:block;font-size:14px;color:#D4AF37;letter-spacing:.5px}
    .dp-head small{font-size:11px;opacity:.8}
    .dp-head .dp-x{margin-left:auto;background:none;border:0;color:#D4AF37;font-size:18px;cursor:pointer}
    .dp-msgs{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:8px;scroll-behavior:smooth}
    .dp-m{max-width:88%;padding:9px 12px;border-radius:14px;font-size:13px;line-height:1.5;word-wrap:break-word}
    .dp-bot{background:#fff;border:1px solid #eadfc8;border-bottom-left-radius:4px;align-self:flex-start}
    .dp-user{background:#556B2F;color:#fff;border-bottom-right-radius:4px;align-self:flex-end}
    .dp-m b{color:#2C1810}.dp-user b{color:#fff}
    .dp-price{color:#9a7b0a;font-weight:700}
    .dp-chips{display:flex;flex-wrap:wrap;gap:6px;align-self:flex-start;max-width:96%}
    .dp-chip{border:1px solid #D4AF37;background:#fff;color:#2C1810;border-radius:999px;padding:6px 11px;font-size:12px;font-weight:600;cursor:pointer;transition:all .15s;text-decoration:none;display:inline-block}
    .dp-chip:hover{background:#D4AF37}
    .dp-chip.dp-wa{background:#059669;border-color:#059669;color:#fff}
    .dp-chip.dp-wa:hover{background:#047857}
    .dp-typing{display:flex;gap:4px;padding:12px}
    .dp-typing i{width:7px;height:7px;border-radius:50%;background:#b89a3a;animation:dpBlink 1s infinite}
    .dp-typing i:nth-child(2){animation-delay:.2s}.dp-typing i:nth-child(3){animation-delay:.4s}
    @keyframes dpBlink{0%,80%,100%{opacity:.25}40%{opacity:1}}
    .dp-form{display:flex;gap:8px;padding:10px;border-top:1px solid #eadfc8;background:#fff}
    .dp-form input{flex:1;border:1px solid #eadfc8;background:#FAF6F0;border-radius:12px;padding:10px 12px;font-size:13px;outline:none;color:#2B1E16}
    .dp-form input:focus{border-color:#D4AF37}
    .dp-form button{border:0;background:#556B2F;color:#fff;border-radius:12px;width:42px;cursor:pointer;font-size:15px}
    .dp-form button:hover{background:#435525}
    .dp-form button:disabled{opacity:.5;cursor:not-allowed}
    .dark #dp-bot-panel{background:#0f172a;color:#FAF6F0;border-color:rgba(212,175,55,.4)}
    .dark .dp-bot{background:#1e293b;border-color:#334155;color:#FAF6F0}
    .dark .dp-m b{color:#F3E5AB}
    .dark .dp-chip{background:#1e293b;color:#FAF6F0}
    .dark .dp-chip:hover{background:#D4AF37;color:#2C1810}
    .dark .dp-form{background:#1e293b;border-color:#334155}
    .dark .dp-form input{background:#0f172a;border-color:#334155;color:#FAF6F0}
    @media(max-width:480px){#dp-bot-panel{left:12px;right:12px;width:auto;bottom:90px}#dp-bot-btn{left:12px}}
    `;
    const styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);
 
    /* ---------------- DOM ---------------- */
    const root = document.createElement('div');
    root.innerHTML = `
        <button id="dp-bot-btn" aria-label="Open DryPops assistant" title="Ask us anything">
            <i class="fa-solid fa-comments"></i><span class="dp-dot"></span>
        </button>
        <div id="dp-bot-panel" role="dialog" aria-label="DryPops assistant">
            <div class="dp-head">
                <div class="dp-avatar"><i class="fa-solid fa-leaf"></i></div>
                <div><b>DryPops Assistant</b><small>Ask about products, orders &amp; delivery</small></div>
                <button class="dp-x" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="dp-msgs" id="dp-msgs" aria-live="polite"></div>
            <form class="dp-form" id="dp-form" autocomplete="off">
                <input id="dp-input" type="text" maxlength="400" placeholder="Type your question..." aria-label="Message">
                <button type="submit" id="dp-send" aria-label="Send"><i class="fa-solid fa-paper-plane"></i></button>
            </form>
        </div>`;
    document.body.appendChild(root);
 
    const btn = document.getElementById('dp-bot-btn');
    const panel = document.getElementById('dp-bot-panel');
    const msgs = document.getElementById('dp-msgs');
    const form = document.getElementById('dp-form');
    const input = document.getElementById('dp-input');
    const sendBtn = document.getElementById('dp-send');
    let greeted = false;
    let lastUserText = '';
    let busy = false;
    const history = [];                       // {role, content} for the AI
 
    function scrollDown() { msgs.scrollTop = msgs.scrollHeight; }
    function clearChips() { msgs.querySelectorAll('.dp-chips').forEach(c => c.remove()); }
 
    function userSay(text) {
        clearChips();
        const d = document.createElement('div');
        d.className = 'dp-m dp-user';
        d.textContent = text;
        msgs.appendChild(d);
        scrollDown();
    }
 
    function showTyping() {
        clearChips();
        const typing = document.createElement('div');
        typing.className = 'dp-m dp-bot dp-typing';
        typing.innerHTML = '<i></i><i></i><i></i>';
        msgs.appendChild(typing);
        scrollDown();
        return () => typing.remove();
    }
 
    // replies: [{label, a:'action'}] or [{label, href}] (href = WhatsApp link)
    function appendBot(html, replies) {
        clearChips();
        const d = document.createElement('div');
        d.className = 'dp-m dp-bot';
        d.innerHTML = html;
        msgs.appendChild(d);
        if (replies && replies.length) {
            const wrap = document.createElement('div');
            wrap.className = 'dp-chips';
            replies.forEach(r => {
                if (r.href) {
                    const a = document.createElement('a');
                    a.className = 'dp-chip dp-wa';
                    a.href = r.href; a.target = '_blank'; a.rel = 'noopener';
                    a.innerHTML = '<i class="fa-brands fa-whatsapp"></i> ' + esc(r.label);
                    wrap.appendChild(a);
                } else {
                    const b = document.createElement('button');
                    b.type = 'button'; b.className = 'dp-chip';
                    b.dataset.a = r.a; b.textContent = r.label;
                    wrap.appendChild(b);
                }
            });
            msgs.appendChild(wrap);
        }
        scrollDown();
    }
 
    function botSay(html, replies) {
        const stop = showTyping();
        setTimeout(() => { stop(); appendBot(html, replies); }, 400);
    }
 
    /* ---------------- reusable reply sets ---------------- */
    const mainMenu = () => [
        { label: '🛍️ Products', a: 'cats' },
        { label: '🚚 Delivery', a: 'delivery' },
        { label: '💳 Payment', a: 'payment' },
        { label: '🏷️ Coupons', a: 'coupon' },
        { label: '🛒 My Cart', a: 'cart' }
    ];
    const agentChip = () => ({
        label: 'Chat with us on WhatsApp',
        href: waLink('Hi DryPops! ' + (lastUserText ? 'I have a question: ' + lastUserText : 'I need some help.'))
    });
 
    /* ---------------- structured answers (buttons) ---------------- */
    function showWelcome() {
        botSay('Hi there! 👋 I\'m the <b>DryPops</b> assistant. Ask me anything about our products, prices, delivery or how to order, or use the buttons below.', mainMenu());
    }
 
    function showCategories() {
        botSay('Which category would you like to explore?',
            categories().map(c => ({ label: c, a: 'cat:' + c })).concat([{ label: '⬅ Menu', a: 'menu' }]));
    }
 
    function showCategory(cat) {
        const list = products().filter(p => p.category === cat);
        if (!list.length) return fallback();
        botSay(`Here\'s what we have in <b>${esc(cat)}</b>:<br>` +
            list.map(p => `• ${esc(p.name)}: <span class="dp-price">from ${money(p.weights[0].price)}</span>`).join('<br>') +
            '<br>Tap a product for details:',
            list.map(p => ({ label: p.name, a: 'prod:' + p.id })).concat([{ label: '⬅ Categories', a: 'cats' }]));
    }
 
    function productCardHtml(p) {
        let stockLine = '';
        if (p.stock <= 0) stockLine = '<br>❌ <b>Currently out of stock.</b>';
        else if (p.stock <= 10) stockLine = `<br>⚠️ Only <b>${p.stock}</b> left in stock.`;
        const prices = p.weights.map(w => `• ${esc(w.label)}: <span class="dp-price">${money(w.price)}</span>`).join('<br>');
        return `<b>${esc(p.name)}</b><br>${esc(p.desc)}<br><br>${prices}${stockLine}<br><br>Choose a size to add it to your cart:`;
    }
 
    function showProduct(id) {
        const p = byId(id);
        if (!p) return fallback();
        const chips = p.stock > 0 ? p.weights.map(w => ({ label: `${w.label} (${money(w.price)})`, a: `add:${p.id}|${w.label}` })) : [];
        chips.push({ label: 'Benefits & nutrition', a: 'info:' + p.id });
        chips.push({ label: '⬅ ' + p.category, a: 'cat:' + p.category });
        botSay(productCardHtml(p), chips);
    }
 
    function showInfo(id) {
        const p = byId(id);
        if (!p) return fallback();
        botSay(`<b>${esc(p.name)}</b><br><b>Benefits:</b> ${esc(p.benefits)}<br><b>Nutrition:</b> ${esc(p.nutrition)}`,
            [{ label: 'Choose a size', a: 'prod:' + p.id }, { label: '⬅ Menu', a: 'menu' }]);
    }
 
    function addProduct(id, label) {
        const p = byId(id);
        const w = p && p.weights.find(x => x.label === label);
        if (!w) return fallback();
        const ok = typeof addToCart === 'function' &&
            addToCart({ id: p.id, title: `${p.name} (${label})`, price: w.price, weightLabel: label });
        if (ok) {
            botSay(`✅ <b>${esc(p.name)} (${esc(label)})</b> was added to your cart. Would you like anything else, or shall we place the order?`, [
                { label: 'Browse more', a: 'cats' },
                { label: '🛒 View cart', a: 'cart' },
                { label: 'Checkout', a: 'checkout' },
                { label: 'Order via WhatsApp', a: 'wa-order' }
            ]);
        } else {
            botSay('Sorry, I couldn\'t add that item (stock may be low). Please try another size or product.',
                [{ label: 'Products', a: 'cats' }, agentChip()]);
        }
    }
 
    function showCart() {
        const c = cartItems();
        if (!c.length) {
            botSay('Your cart is empty right now. 🛒 Want to browse our products?', [{ label: '🛍️ Products', a: 'cats' }]);
            return;
        }
        const t = typeof calcTotals === 'function' ? calcTotals() : null;
        const lines = c.map(i => `• ${esc(i.title)} × ${i.quantity} = ${money(i.price * i.quantity)}`).join('<br>');
        botSay(`<b>Your cart:</b><br>${lines}` + (t ? `<br><br><b>Total: ${money(t.total)}</b>${t.shipping === 0 ? ' (free delivery)' : ''}` : ''),
            [{ label: 'Checkout', a: 'checkout' }, { label: 'Order via WhatsApp', a: 'wa-order' }, { label: 'Browse more', a: 'cats' }]);
    }
 
    function showDelivery() {
        const fee = SHOP_CONFIG.SHIPPING_FEE, min = SHOP_CONFIG.FREE_SHIPPING_MIN;
        const feeLine = fee === 0
            ? 'Delivery is currently <b>free</b>.'
            : `Delivery is <b>free</b> on orders above ${money(min)}; otherwise a ${money(fee)} fee applies.`;
        botSay(`🚚 We deliver <b>all across Pakistan</b>. ${feeLine}<br>Delivery time depends on your city, and we confirm it with you on WhatsApp after you order.`,
            [{ label: 'Payment methods', a: 'payment' }, { label: '⬅ Menu', a: 'menu' }]);
    }
 
    function showPayment() {
        const labels = Object.values(typeof PAYMENT_LABELS !== 'undefined' ? PAYMENT_LABELS : { COD: 'Cash on Delivery', WALLET: 'JazzCash / Easypaisa' });
        botSay('💳 You can pay with:<br>' + labels.map(l => '• ' + esc(l)).join('<br>') +
            '<br><br>If you choose JazzCash / Easypaisa, we send the account details on WhatsApp and confirm your order once the payment is received.',
            [{ label: 'Delivery', a: 'delivery' }, { label: '⬅ Menu', a: 'menu' }]);
    }
 
    function showCoupon() {
        const codes = Object.entries(SHOP_CONFIG.COUPONS || {});
        if (!codes.length) {
            botSay('There are no active coupons at the moment. Message us on WhatsApp to hear about new offers.', [agentChip(), { label: '⬅ Menu', a: 'menu' }]);
            return;
        }
        botSay('🏷️ Coupon codes: ' + codes.map(([k, v]) => `<b>${esc(k)}</b> (${v}% off)`).join(', ') +
            '<br>Enter the code in the coupon field at checkout.',
            [{ label: 'Checkout', a: 'checkout' }, { label: '⬅ Menu', a: 'menu' }]);
    }
 
    function showContact() {
        botSay('📞 Phone: <b>03282288801</b><br>📧 Email: drypops1@gmail.com<br>The fastest way to reach us is WhatsApp:',
            [agentChip(), { label: '⬅ Menu', a: 'menu' }]);
    }
 
    function fallback() {
        botSay('I\'m not sure I understood that 🙏 Please pick an option below, or chat with our team directly on WhatsApp.',
            mainMenu().concat([agentChip()]));
    }
 
    /* ---------------- button actions ---------------- */
    function doAction(a) {
        if (a === 'menu') return botSay('Sure! What can I help you with?', mainMenu());
        if (a === 'cats') return showCategories();
        if (a === 'delivery') return showDelivery();
        if (a === 'payment') return showPayment();
        if (a === 'coupon') return showCoupon();
        if (a === 'contact') return showContact();
        if (a === 'cart') return showCart();
        if (a === 'checkout') {
            if (!cartItems().length) return botSay('Your cart is empty. Please add a product first.', [{ label: '🛍️ Products', a: 'cats' }]);
            if (typeof proceedToCheckout === 'function') proceedToCheckout();
            return botSay('I\'ve opened the checkout for you. Fill in your details there. 👍', [{ label: '⬅ Menu', a: 'menu' }]);
        }
        if (a === 'wa-order') {
            if (!cartItems().length) return botSay('Your cart is empty. Please add a product first.', [{ label: '🛍️ Products', a: 'cats' }]);
            if (typeof checkoutViaWhatsApp === 'function') checkoutViaWhatsApp();
            return botSay('WhatsApp is opening with your order message ready. Just press <b>Send</b>. ✅', [{ label: '⬅ Menu', a: 'menu' }]);
        }
        if (a.startsWith('cat:')) return showCategory(a.slice(4));
        if (a.startsWith('prod:')) return showProduct(a.slice(5));
        if (a.startsWith('info:')) return showInfo(a.slice(5));
        if (a.startsWith('add:')) { const [id, label] = a.slice(4).split('|'); return addProduct(id, label); }
    }
 
    /* ---------------- offline keyword fallback (English) ---------------- */
    const norm = s => ' ' + s.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim() + ' ';
    const hasAny = (t, words) => words.some(w => t.includes(' ' + w + ' '));
 
    function findProduct(t) {
        let best = null, bestLen = 0;
        Object.entries(ALIASES).forEach(([id, names]) => {
            if (!byId(id)) return;
            names.forEach(n => { if (t.includes(' ' + n + ' ') && n.length > bestLen) { best = id; bestLen = n.length; } });
        });
        if (best) return best;
        const p = products().find(x => t.includes(' ' + x.name.toLowerCase() + ' '));
        return p ? p.id : null;
    }
    function findCategory(t) {
        for (const cat of categories()) {
            const words = CAT_WORDS[cat] || [cat.toLowerCase()];
            if (words.some(w => t.includes(' ' + w + ' '))) return cat;
        }
        return null;
    }
 
    function localRoute(raw) {
        const t = norm(raw);
        if (hasAny(t, ['hi', 'hello', 'hey', 'salam', 'assalam'])) return showWelcome();
        if (hasAny(t, ['thanks', 'thank', 'thx'])) return botSay('You\'re welcome! 😊 Anything else I can help with?', mainMenu());
        if (hasAny(t, ['agent', 'human', 'call', 'phone', 'contact', 'whatsapp', 'support', 'number'])) return showContact();
        if (hasAny(t, ['delivery', 'deliver', 'shipping', 'courier', 'ship'])) return showDelivery();
        if (hasAny(t, ['payment', 'pay', 'cod', 'jazzcash', 'easypaisa', 'cash'])) return showPayment();
        if (hasAny(t, ['coupon', 'discount', 'promo', 'code', 'offer', 'offers'])) return showCoupon();
        if (hasAny(t, ['cart', 'basket'])) return showCart();
        if (hasAny(t, ['checkout'])) return doAction('checkout');
        const pid = findProduct(t);
        if (pid) return hasAny(t, ['benefit', 'benefits', 'nutrition', 'healthy']) ? showInfo(pid) : showProduct(pid);
        const cat = findCategory(t);
        if (cat) return showCategory(cat);
        if (hasAny(t, ['products', 'product', 'menu', 'catalog', 'price', 'prices', 'buy', 'order', 'sell'])) return showCategories();
        fallback();
    }
 
    /* ---------------- AI answers ---------------- */
    function formatAi(text) {
        return esc(text)
            .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
            .replace(/^\s*[-*]\s+/gm, '• ')
            .replace(/\n/g, '<br>');
    }
 
    async function askAI(userText) {
        history.push({ role: 'user', content: userText });
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 25000);
        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: history.slice(-10), context: storeContext() }),
                signal: ctrl.signal
            });
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const data = await res.json();
            let reply = String(data.reply || '').trim();
            if (!reply) throw new Error('Empty reply');
 
            // optional last line:  PRODUCTS: id1,id2
            const m = reply.match(/\n?\s*PRODUCTS:\s*([\w\-, ]+)\s*$/i);
            let ids = [];
            if (m) {
                reply = reply.slice(0, m.index).trim();
                ids = m[1].split(',').map(s => s.trim()).filter(id => byId(id)).slice(0, 3);
            }
            history.push({ role: 'assistant', content: reply });
            const chips = ids.map(id => ({ label: byId(id).name, a: 'prod:' + id }));
            chips.push({ label: '⬅ Menu', a: 'menu' });
            return { html: formatAi(reply), chips };
        } finally {
            clearTimeout(timer);
        }
    }
 
    async function handleText(text) {
        lastUserText = text;
        if (!USE_AI) return localRoute(text);
        busy = true; sendBtn.disabled = true;
        const stop = showTyping();
        try {
            const out = await askAI(text);
            stop();
            appendBot(out.html, out.chips.concat([agentChip()]));
        } catch (err) {
            history.pop();                     // drop the unanswered question
            stop();
            localRoute(text);                  // built-in answers if the AI is unreachable
        } finally {
            busy = false; sendBtn.disabled = false;
        }
    }
 
    /* ---------------- events ---------------- */
    function togglePanel(open) {
        const willOpen = open === undefined ? !panel.classList.contains('dp-open') : open;
        panel.classList.toggle('dp-open', willOpen);
        const dot = btn.querySelector('.dp-dot');
        if (willOpen) {
            if (dot) dot.remove();
            if (!greeted) { greeted = true; showWelcome(); }
            setTimeout(() => input.focus(), 50);
        }
    }
 
    btn.addEventListener('click', () => togglePanel());
    panel.querySelector('.dp-x').addEventListener('click', () => togglePanel(false));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') togglePanel(false); });
 
    msgs.addEventListener('click', e => {
        const chip = e.target.closest('.dp-chip[data-a]');
        if (!chip || busy) return;
        userSay(chip.textContent);
        doAction(chip.dataset.a);
    });
 
    form.addEventListener('submit', e => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text || busy) return;
        input.value = '';
        userSay(text);
        handleText(text);
    });
})();