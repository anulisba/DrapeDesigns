// src/data/products.js
const products = [
    {
        id: 1,
        brand: "Drape Designs",
        productName: "Elegant Silk Kurti",
        actualPrice: 1650,
        offerPrice: 999,
        discountPercentage: 40,
        categories: ["accessories", "fashion", "new", "trending"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_1_bz405o.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586425/WhatsApp_Image_2025-06-09_at_11.01.10_AM_2_o9isw3.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
        ],
        colorVariants: [
            { color: "Red", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_2_g26kz1.jpg', productId: 2 },
            { color: "Blue", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_2_g26kz1.jpg', productId: 1 }
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        description: "Traditional handwoven silk saree with zari border...",
        materialDescription: "Pure silk with gold zari work...",
        shippingPolicy: "Delivery within 4-7 business days...",
        reviews: [
            { id: 1, rating: 5, comment: "Beautiful fabric!" },
            { id: 2, rating: 4, comment: "Good quality but slightly tight" }
        ]
    },
    {
        id: 2,
        brand: "Drape Designs",
        productName: "Elegant Silk Saree",
        actualPrice: 1650,
        offerPrice: 999,
        discountPercentage: 40,
        categories: ["accessories", "fashion", "new", "trending"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_2_nft1s0.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_1_bz405o.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586425/WhatsApp_Image_2025-06-09_at_11.01.10_AM_2_o9isw3.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
        ],
        colorVariants: [
            { color: "Red", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_2_g26kz1.jpg', productId: 2 },
            { color: "Blue", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_2_g26kz1.jpg', productId: 1 }
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        description: "Traditional handwoven silk saree with zari border...",
        materialDescription: "Pure silk with gold zari work...",
        shippingPolicy: "Delivery within 4-7 business days...",
        reviews: [
            { id: 1, rating: 5, comment: "Beautiful fabric!" },
            { id: 2, rating: 4, comment: "Good quality but slightly tight" }
        ]
    },
    {
        id: 3,
        brand: "Drape Designs",
        productName: "Elegant Silk Saree",
        actualPrice: 1650,
        offerPrice: 999,
        discountPercentage: 40,
        categories: ["accessories", "fashion", "new", "trending"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/v1750586423/WhatsApp_Image_2025-06-09_at_11.01.09_AM_gpex3q.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_1_bz405o.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586425/WhatsApp_Image_2025-06-09_at_11.01.10_AM_2_o9isw3.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
        ],
        colorVariants: [
            { color: "Red", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_2_g26kz1.jpg', productId: 2 },
            { color: "Blue", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_2_g26kz1.jpg', productId: 1 }
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        description: "Traditional handwoven silk saree with zari border...",
        materialDescription: "Pure silk with gold zari work...",
        shippingPolicy: "Delivery within 4-7 business days...",
        reviews: [
            { id: 1, rating: 5, comment: "Beautiful fabric!" },
            { id: 2, rating: 4, comment: "Good quality but slightly tight" }
        ]
    },
    {
        id: 4,
        brand: "Drape Designs",
        productName: "Elegant Silk Saree",
        actualPrice: 1650,
        offerPrice: 999,
        discountPercentage: 40,
        categories: ["accessories", "fashion", "new", "trending"],
        images: [
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.24_AM_2_nft1s0.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586422/WhatsApp_Image_2025-06-09_at_11.01.10_AM_1_bz405o.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586425/WhatsApp_Image_2025-06-09_at_11.01.10_AM_2_o9isw3.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_1_qxfck7.jpg',
            'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586424/WhatsApp_Image_2025-06-09_at_11.01.11_AM_fu0pgg.jpg',
        ],
        colorVariants: [
            { color: "Red", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_2_g26kz1.jpg', productId: 2 },
            { color: "Blue", image: 'https://res.cloudinary.com/dpo91btlc/image/upload/c_crop,ar_9:16/v1750586367/WhatsApp_Image_2025-06-09_at_11.01.25_AM_2_g26kz1.jpg', productId: 1 }
        ],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        description: "Traditional handwoven silk saree with zari border...",
        materialDescription: "Pure silk with gold zari work...",
        shippingPolicy: "Delivery within 4-7 business days...",
        reviews: [
            { id: 1, rating: 5, comment: "Beautiful fabric!" },
            { id: 2, rating: 4, comment: "Good quality but slightly tight" }
        ]
    },

];

export default products;