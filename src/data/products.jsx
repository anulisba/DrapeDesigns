// src/data/products.js
const products = [
    {
        id: 1,
        brand: "Drape Designs",
        productName: "Elegant Silk Kurti",
        color: "Yellow",
        actualPrice: 1650,
        offerPrice: 999,
        discountPercentage: 40,
        categories: ["kurtis", "fashion", "new", "trending", "accessories", "Office Kurta"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.12_AM_xhc7yq.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_1_bz405o.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_s2wtis.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586425/WhatsApp_Image_2025-06-09_at_11.01.10_AM_2_o9isw3.jpg'
        ],
        colorVariants: [
            { color: "Red", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.51_AM_fpequq.jpg', productId: 2 },
            { color: "Blue", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_2_nft1s0.jpg', productId: 3 }
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        description: "Crafted for timeless elegance, this silk kurti features intricate thread work and a flattering silhouette that flows effortlessly. Ideal for festive gatherings, traditional events, or casual luxury outings.",
        materialDescription: "Made from 100% premium silk with a soft inner lining. Features light gold thread embroidery along the neckline and cuffs. Breathable and gentle on skin.",
        shippingPolicy: "We offer free standard shipping across India. Orders are processed within 24 hours and delivered within 4-7 business days. Returns accepted within 7 days of delivery in original packaging."
    },
    {
        id: 2,
        brand: "Vastra Vogue",
        productName: "Chikankari Kurti",
        color: "Red",
        actualPrice: 1450,
        offerPrice: 870,
        discountPercentage: 40,
        categories: ["kurtis", "fashion", "new", "trending", "accessories", "Office Kurta", "kurti"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.50_AM_x2r7gq.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.51_AM_1_wjxegy.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586401/WhatsApp_Image_2025-06-09_at_11.01.52_AM_hbov5a.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586401/WhatsApp_Image_2025-06-09_at_11.01.53_AM_a8noet.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.49_AM_opu1vf.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.50_AM_1_dhixg9.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.51_AM_fpequq.jpg'
        ],
        colorVariants: [
            { color: "Yellow", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg', productId: 1 },
            { color: "Blue", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_2_nft1s0.jpg', productId: 3 }
        ],
        sizes: ['M', 'L', 'XL'],
        description: "Classic Lucknowi chikankari embroidery on pure cotton makes this kurti a must-have for everyday elegance. Lightweight and soothing, perfect for hot summer days or relaxed office wear.",
        materialDescription: "100% handwoven cotton featuring detailed white-on-white chikankari embroidery. Fabric has a soft matte texture and is preshrunk for durability.",
        shippingPolicy: "Delivery in 3-5 business days. COD available. Easy returns within 7 days for unused items with original tags and bill."
    },
    {
        id: 3,
        brand: "Thread Tales",
        productName: "Rayon Kurti",
        color: "Blue",
        actualPrice: 1250,
        offerPrice: 749,
        discountPercentage: 40,
        categories: ["kurtis", "fashion", "new", "trending", "accessories", "casual kurti", "kurti"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_2_nft1s0.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586368/WhatsApp_Image_2025-06-09_at_11.01.25_AM_suhbon.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_2_g26kz1.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_1_b66xay.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_1_wtnfio.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_tngayi.jpg',

        ],
        colorVariants: [{ color: "Yellow", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg', productId: 1 },
        { color: "Red", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.51_AM_fpequq.jpg', productId: 2 },

        ],
        sizes: ['S', 'M', 'L', 'XL'],
        description: "Feel the flair! This rayon flared kurti boasts floral digital prints and a relaxed silhouette that flatters every body type. A great choice for brunches, casual meetups, or daily college wear.",
        materialDescription: "Viscose rayon with a natural sheen and digital printed floral patterns. Smooth to touch, wrinkle-resistant, and comfortable for all-day wear.",
        shippingPolicy: "Ships in 2 days. Delivery timeline is 4-6 working days. No questions asked return within 5 days of receipt."
    },
    {
        id: 4,
        brand: "Ethnic Essence",
        productName: "Anarkali Kurti",
        color: "Blue",
        actualPrice: 1890,
        offerPrice: 1134,
        discountPercentage: 40,
        categories: ["kurtis", "fashion", "new", "trending", "accessories", "kurti"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.50_AM_x2r7gq.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586401/WhatsApp_Image_2025-06-09_at_11.01.52_AM_hbov5a.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586401/WhatsApp_Image_2025-06-09_at_11.01.53_AM_a8noet.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.49_AM_opu1vf.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.50_AM_1_dhixg9.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.51_AM_fpequq.jpg'
        ],
        colorVariants: [],
        sizes: ['M', 'L', 'XL'],
        description: "Grace every festive occasion with this stunning Anarkali kurti featuring gold foil prints and a sweeping flare. Makes a statement with minimal accessories.",
        materialDescription: "Crafted from lightweight georgette with full cotton lining. Gold foil detailing adds shimmer under light. Non-transparent and flowy.",
        shippingPolicy: "Product dispatches within 48 hours. Delivery time varies by location (usually 5–7 days). Hassle-free exchange if size doesn’t fit."
    },
    {
        id: 5,
        brand: "FabFusion",
        productName: "Cotton Kurti",
        color: "Blue",
        actualPrice: 1100,
        offerPrice: 660,
        discountPercentage: 40,
        categories: ["kurtis", "fashion", "new", "trending", "accessories", "kurti"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_2_nft1s0.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586368/WhatsApp_Image_2025-06-09_at_11.01.25_AM_suhbon.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_2_g26kz1.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_1_b66xay.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_1_wtnfio.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_tngayi.jpg',

        ],
        colorVariants: [],
        sizes: ['XS', 'S', 'M'],
        description: "Minimalist yet chic, this kurti features a clean Mandarin collar and structured sleeves. Designed for daily office wear or formal meetups.",
        materialDescription: "100% handloom cotton with natural dyes. Breathable, eco-friendly, and gets softer with every wash.",
        shippingPolicy: "Ships in 1 business day. Delivery expected in 3-5 days. Exchange and returns accepted within 7 days."
    },
    {
        id: 6,
        brand: "Kalakriti",
        productName: "Mirror Work Kurti",
        color: "Blue",
        actualPrice: 1750,
        offerPrice: 1050,
        discountPercentage: 40,
        categories: ["kurtis", "fashion", "new", "trending", "accessories", "kurti"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.12_AM_xhc7yq.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_1_bz405o.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_s2wtis.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586425/WhatsApp_Image_2025-06-09_at_11.01.10_AM_2_o9isw3.jpg'
        ],
        colorVariants: [],
        sizes: ['S', 'M', 'L', 'XL'],
        description: "Add some sparkle to your ethnic wardrobe with this mirror-work kurti designed for Garba nights, haldi functions, and Diwali gatherings.",
        materialDescription: "Cotton blend base with hand-stitched mirror embellishments on the yoke and sleeves. Slightly stretchable fabric for flexible movement.",
        shippingPolicy: "Processed and shipped within 24–36 hours. Delivery in metro cities within 3–4 days; others 5–6 days. Returns only accepted for manufacturing defects."
    },
    {
        id: 7,
        brand: "Indie Threads",
        productName: "Office Kurti",
        color: "Blue",
        actualPrice: 1350,
        offerPrice: 810,
        discountPercentage: 40,
        categories: ["kurtis", "fashion", "new", "trending", "accessories", "kurti"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.50_AM_x2r7gq.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586401/WhatsApp_Image_2025-06-09_at_11.01.52_AM_hbov5a.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586401/WhatsApp_Image_2025-06-09_at_11.01.53_AM_a8noet.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.49_AM_opu1vf.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.50_AM_1_dhixg9.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.51_AM_fpequq.jpg'
        ],
        colorVariants: [],
        sizes: ['M', 'L'],
        description: "This straight-cut kurti is perfect for the working woman. Its structured fit, smart sleeves, and subtle detailing make it an ideal Monday-to-Friday essential.",
        materialDescription: "Blended cotton-silk fabric with wrinkle-resistant technology. Matte finish with side slits for easy wear.",
        shippingPolicy: "Ships within 2 working days. Delivered within 4–6 days. Easy size exchange available."
    },
    {
        id: 8,
        brand: "Ziva Ethnics",
        productName: "Printed Short Kurti",
        color: "Blue",
        actualPrice: 990,
        offerPrice: 594,
        discountPercentage: 40,
        categories: ["kurtis", "fashion", "new", "trending", "accessories"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.12_AM_xhc7yq.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_1_bz405o.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_s2wtis.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586425/WhatsApp_Image_2025-06-09_at_11.01.10_AM_2_o9isw3.jpg'
        ],
        colorVariants: [],
        sizes: ['S', 'M', 'L'],
        description: "Trendy and youthful, this short printed kurti pairs beautifully with jeans, leggings, or shorts. Designed for everyday college or casual wear.",
        materialDescription: "Soft poly-cotton blend with vibrant digital prints. Non-fading and machine washable.",
        shippingPolicy: "Ships in 2 business days. Estimated delivery in 3-6 days. Return within 5 days for store credit."
    }
];

export default products;
