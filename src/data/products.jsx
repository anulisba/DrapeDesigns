// src/data/products.js
const products = [
    {
        id: 1,
        brand: "Drape Designs",
        productName: "Haldi Hues",
        color: "Yellow",
        actualPrice: 2800,
        offerPrice: 2499,
        discountPercentage: 11,
        categories: [
            "kurtis",
            "fashion",
            "new",
            "trending",
            "accessories",
            "Ethnic Wear",
            "Semi-Formal",
            "Festive Kurti"
        ],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.12_AM_xhc7yq.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_1_bz405o.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_s2wtis.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586425/WhatsApp_Image_2025-06-09_at_11.01.10_AM_2_o9isw3.jpg'
        ],
        sizes: ['L'],
        description: "Golden hour, golden hue ✨ Bring home the charm of tradition wrapped in shimmer and simplicity. This mustard yellow suit with intricate mirror work is all about grace and glow. Elevate your ethnic wardrobe with our Haldi Hues kurta set – a stunning mustard yellow ensemble adorned with hand-embroidered mirror work on the neckline and sleeves. Crafted from soft, breathable fabric of mul chandheri, the suit features a straight-cut kurta, matching pants, and a lightweight dupatta to complete the look. Perfect for festive gatherings or a graceful daytime outing.",
        materialDescription: "Made from premium mul chanderi fabric – soft, breathable, and lightweight for all-day comfort. The neckline and sleeves are embellished with hand-embroidered mirror work, ensuring both elegance and durability. Lined with fine cotton for added comfort.",
        shippingPolicy: "We offer free standard shipping across India. Orders are processed within 24 hours and delivered within 4-7 business days via trusted courier partners. No returns or exchanges are accepted. Cash on Delivery (COD) is not available."
    },
    {
        id: 2,
        brand: "Drape Designs",
        productName: "Peach Glow",
        color: "Peach",
        actualPrice: 2499,
        offerPrice: 1999,
        discountPercentage: Math.round(((2499 - 1999) / 2499) * 100), // 20
        categories: [
            "kurtis",
            "fashion",
            "new",
            "trending",
            "accessories",
            "Ethnic Wear",
            "Semi-Formal",
            "Formal Wear"
        ],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.50_AM_x2r7gq.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.51_AM_1_wjxegy.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586401/WhatsApp_Image_2025-06-09_at_11.01.52_AM_hbov5a.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586401/WhatsApp_Image_2025-06-09_at_11.01.53_AM_a8noet.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.49_AM_opu1vf.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.50_AM_1_dhixg9.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586400/WhatsApp_Image_2025-06-09_at_11.01.51_AM_fpequq.jpg'
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        description: "Soft charm meets timeless elegance 🌸 The Peach Glow kurta set blends effortless style with everyday comfort. This peach-hued ensemble features a slitted kurta and matching pants, crafted from premium muslin for a graceful drape and breathable feel. A crushed georgette dupatta adds a touch of texture and fluidity, while delicate crochet lace detailing brings subtle sophistication. Finished with a smooth satin lining, it’s perfect for festive gatherings, semi-formal events, or elevating your day-to-day ethnic look.",
        materialDescription: "Crafted from premium-quality muslin for lightness and breathability. The kurta and pants feature a satin lining for a soft touch against the skin. Paired with a crushed georgette dupatta and finished with delicate crochet lace detailing for refined elegance.",
        shippingPolicy: "We offer free standard shipping across India. Orders are processed within 24 hours and delivered within 7-14 business days via trusted courier partners. No returns or exchanges are accepted. Cash on Delivery (COD) is not available."
    },
    {
        id: 3,
        brand: "Drape Designs",
        productName: "Blossom Bloom",
        color: "Soft Pink",
        actualPrice: 2800,
        offerPrice: 2399,
        discountPercentage: Math.round(((2800 - 2399) / 2800) * 100), // 14
        categories: [
            "kurtis",
            "fashion",
            "new",
            "trending",
            "accessories",
            "Ethnic Wear",
            "Semi-Formal",
            "Festive Wear"
        ],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_2_nft1s0.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586368/WhatsApp_Image_2025-06-09_at_11.01.25_AM_suhbon.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_2_g26kz1.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_1_b66xay.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_1_wtnfio.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_tngayi.jpg'
        ],
        sizes: ['M', 'XL'],
        description: "Soft elegance meets intricate artistry 🌸 The Blossom Bloom kurta set is crafted in breathable mul chanderi, offering a luxurious drape and lightweight comfort. This soft pink ensemble features delicate floral applique embroidery with bead detailing along the hem and sleeves for a graceful finish. The matching dupatta, adorned with scattered floral accents and raw edges, completes the look. Perfect for festive mornings, casual celebrations, or elegant evening gatherings.",
        materialDescription: "Made from soft, breathable mul chanderi fabric. Embellished with floral applique embroidery and bead detailing on the hem and sleeves. Includes a matching dupatta with scattered floral accents and raw edges. Straight-cut silhouette for a flattering fit.",
        shippingPolicy: "We offer free standard shipping across India. Orders are processed within 24 hours and delivered within 7-14 business days via trusted courier partners. No returns or exchanges are accepted. Cash on Delivery (COD) is not available."
    },
    {
        id: 4,
        brand: "Drape Designs",
        productName: "Lilac Grace",
        color: "Lilac",
        actualPrice: 1999,
        offerPrice: 1499,
        discountPercentage: Math.round(((1999 - 1499) / 1999) * 100), // 25
        categories: [
            "kurtis",
            "fashion",
            "new",
            "trending",
            "accessories",
            "Ethnic Wear",
            "Casual Wear"
        ],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709714/92AE7334-97F5-4E19-B4D3-05C20B871D7D_tgkmx5.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709713/98A25A97-4C4C-443C-A462-A8142E273B56_drv0tk.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709712/A11113DB-1BE2-40C8-ACCE-5E0799915C8C_i0jsqx.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709713/E969F21F-FBA3-479C-B40B-7A9E1E74D9E7_x6ihgx.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709713/707CBD9D-8CA3-4993-B410-1EF9969173DD_g3d6js.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709714/63CB4EBB-F0B5-4A53-9C7A-530155113938_e10dw8.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709713/C78DCE05-3C13-44E7-AC36-48E26F95A9D2_ttcu8d.jpg'
        ],
        colorVariants: [],
        sizes: ['M', 'L', 'XL'],
        description: "Effortless charm in every detail 💜 The Lilac Grace kurta set blends sophistication with everyday comfort. Crafted from lustrous vichitra silk, this sleeveless, high-neck ensemble is adorned with delicate floral embroidery on the yoke. Paired with straight-fit silk pants, it offers a flattering silhouette and fluid drape. Perfect for semi-formal occasions, casual gatherings, or simply when you want to look graceful without trying too hard.",
        materialDescription: "Made from premium vichitra silk for a rich texture and elegant drape. Sleeveless high-neck kurta with intricate floral embroidery on the yoke. Paired with straight-fit silk pants for a balanced and refined look.",
        shippingPolicy: "We offer free standard shipping across India. Orders are processed within 24 hours and delivered within 7-14 business days via trusted courier partners. No returns or exchanges are accepted. Cash on Delivery (COD) is not available."
    },
    {
        id: 5,
        brand: "Drape Designs ",
        productName: "Lime Glow",
        color: "Lime Yellow",
        actualPrice: 1100,
        offerPrice: 660,
        discountPercentage: 40,
        categories: ["kurtis", "fashion", "new", "trending", "accessories", "Ethnic Wear", "Casual Wear"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709712/1AF07137-B737-45E4-ABD5-E7C04CF19F37_jzpd7s.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709712/8F247C8E-CEEA-44E6-A4A7-36393BE06FF7_shdmf3.jpg',

            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709712/444B53D7-39BC-47A1-AE5F-AFC0E92D7AF6_aw3hzx.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709711/B8D8CD9F-75C5-4B2C-849C-BD34B9DA7878_kbh77j.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709711/920C5EA6-EC69-4E52-9E19-390A47761E5D_cna6qz.jpg',

        ],
        colorVariants: [],
        sizes: ['XS', 'S', 'M'],
        description: "Minimalist yet chic, this kurti features a clean Mandarin collar and structured sleeves. Designed for daily office wear or formal meetups.",
        materialDescription: "100% handloom cotton with natural dyes. Breathable, eco-friendly, and gets softer with every wash.",
        shippingPolicy: "We offer free standard shipping across India. Orders are processed within 24 hours and delivered within 7-14 business days via trusted courier partners. No returns or exchanges are accepted. Cash on Delivery (COD) is not available."
    },
    {
        id: 6,
        brand: "Drape Designs",
        productName: "Petal Whispers",
        color: "Ivory",
        actualPrice: 2800,
        offerPrice: 2300,
        discountPercentage: Math.round(((2800 - 2300) / 2800) * 100), // 18
        categories: [
            "kurtis",
            "fashion",
            "new",
            "trending",
            "accessories",
            "Ethnic Wear",
            "Festive Wear"
        ],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709712/34E7F1D3-5896-4A11-890A-E16FF938F610_lqwgd3.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709711/263D59BD-49E2-4995-B5AB-5E2B27AD80BA_nrbkj0.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709710/5CD5647D-86EA-4953-94A1-5531DC6F3BBB_eiwzwg.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709710/7FF56657-1BFB-4C3F-B99A-F472546644B2_xfhef8.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709711/C2B2897E-0AED-4454-B62A-7F097FDFBCD1_tse8uf.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709710/8A31DB5B-D967-4E8D-BB9C-FC4A18183A5B_utdtug.jpg',
        ],
        colorVariants: [],
        sizes: ['S', 'M', 'L', 'XL'],
        description: "Soft, graceful, and effortlessly feminine — the Petal Whispers kurta set is designed to bring understated elegance to your wardrobe. Crafted in an ivory hue, this A-line silhouette features vertical pintuck pleats along the bodice for a flattering fit. The lower half is adorned with a bold floral print in warm pink and orange tones, while the 3/4th sleeves are elevated with intricate floral embroidery and bead detailing. A perfect balance of simplicity and statement, making it ideal for festive gatherings or casual celebrations.",
        materialDescription: "Fabric: Soft-flowing blended fabric for a fluid drape. Detailing: Vertical pintuck pleats, bold floral print on the lower half, intricate floral embroidery with bead detailing on sleeves. Fit: A-line silhouette with 3/4th sleeves.",
        shippingPolicy: "We offer free standard shipping across India. Orders are processed within 24 hours and delivered within 4-7 business days via trusted courier partners. No returns or exchanges are accepted. Cash on Delivery (COD) is not available."
    },
    {
        id: 7,
        brand: "Drape Designs",
        productName: "Pink Aura",
        color: "Pink",
        actualPrice: 1499,
        offerPrice: 1099,
        discountPercentage: Math.round(((1499 - 1099) / 1499) * 100), // 40
        categories: [
            "kurtis",
            "fashion",
            "new",
            "trending",
            "accessories",
            "Ethnic Wear",
            "Casual Wear",
            "Formal Wear"
        ],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709710/FAE55202-BD22-436A-AC45-97D131289D87_rnxv0p.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709710/BB89872B-9E88-48E9-9EB2-03D9F18E17C4_md2blw.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709711/62F873C4-1794-4349-8475-5B881D6A8F20_dkcozc.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709710/C9F3767D-B0DF-40BC-8C4C-D05CD41BCB93_i2zaem.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709710/562B33C6-99CA-4672-94F2-46232518857E_cwgjek.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1754709711/2CB806AB-D87C-495F-B4F5-8510C35D8F99_ehbpvx.jpg',
        ],
        colorVariants: [],
        sizes: ['M', 'L'],
        description: "Effortless elegance meets everyday comfort in the Pink Aura kurta. Crafted in a refreshing baby pink shade, this breezy sleeveless cotton A-line piece features delicate paisley prints for a touch of timeless charm. The relaxed silhouette with a subtle flare ensures ease of movement, while breathable cotton keeps you cool and comfortable all day. Perfect for brunches, casual outings, or simply basking in good vibes. Slight color variations may occur due to photographic effects.",
        materialDescription: "Fabric: 100% breathable cotton. Print: All-over delicate paisley print. Fit: A-line silhouette with sleeveless design for ease of movement.",
        shippingPolicy: "We offer free standard shipping across India. Orders are processed within 24 hours and delivered within 4-7 business days via trusted courier partners. No returns or exchanges are accepted. Cash on Delivery (COD) is not available."
    },

];

export default products;
