   // Product Data
        const productsData = {
            newArrivals: [
                {
                    id: 1,
                    brand: "PROSIE",
                    name: "Neo-Luxe Trench Coat",
                    price: 8.9,
                    originalPrice: 11,
                    discount: "25% OFF",
                    colors: [
                        { name: "Black", code: "#000000", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" },
                        { name: "Gray", code: "#808080", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" }
                    ]
                },
                {
                    id: 2,
                    brand: "PROSIE",
                    name: "Holographic Evening Gown",
                    price: 12.9,
                    originalPrice: 15,
                    discount: "19% OFF",
                    colors: [
                        { name: "Silver", code: "#C0C0C0", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" },
                        { name: "Rose Gold", code: "#B76E79", image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80" }
                    ]
                },
                {
                    id: 3,
                    brand: "PROSIE",
                    name: "Cashmere Blazer",
                    price: 17,
                    originalPrice: 19,
                    discount: "24% OFF",
                    colors: [
                        { name: "Camel", code: "#c19a6b", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" },
                        { name: "Navy", code: "#000080", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" }
                    ]
                },
                {
                    id: 4,
                    brand: "PROSIE",
                    name: "Silk Camisole Dress",
                    price: 13.6,
                    originalPrice: 14,
                    discount: "30% OFF",
                    colors: [
                        { name: "Burgundy", code: "#800020", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" },
                        { name: "Emerald", code: "#50C878", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" }
                    ]
                },
                {
                    id: 5,
                    brand: "PROSIE",
                    name: "Wool Wide-Leg Trousers",
                    price: 12.2,
                    originalPrice: 13.4,
                    discount: "28% OFF",
                    colors: [
                        { name: "Charcoal", code: "#36454F", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" },
                        { name: "Cream", code: "#F5F5DC", image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" }
                    ]
                },
                {
                    id: 6,
                    brand: "PROSIE",
                    name: "Leather Moto Jacket",
                    price: 12.3,
                    originalPrice: 13,
                    discount: "25% OFF",
                    colors: [
                        { name: "Black", code: "#000000", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" }
                    ]
                },
                {
                    id: 7,
                    brand: "PROSIE",
                    name: "Velvet Blazer",
                    price: 459,
                    originalPrice: 599,
                    discount: "23% OFF",
                    colors: [
                        { name: "Navy", code: "#000080", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" }
                    ]
                },
                {
                    id: 8,
                    brand: "PROSIE",
                    name: "Satin Slip Dress",
                    price: 12.7,
                    originalPrice: 13.9,
                    discount: "25% OFF",
                    colors: [
                        { name: "Champagne", code: "#F7E7CE", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" }
                    ]
                },
                {
                    id: 9,
                    brand: "PROSIE",
                    name: "Cashmere Sweater",
                    price: 12.1,
                    originalPrice: 13.1,
                    discount: "30% OFF",
                    colors: [
                        { name: "Camel", code: "#c19a6b", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" }
                    ]
                },
                {
                    id: 10,
                    brand: "PROSIE",
                    name: "Wool Blend Coat",
                    price: 5.3,
                    originalPrice: 7,
                    discount: "25% OFF",
                    colors: [
                        { name: "Camel", code: "#c19a6b", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" }
                    ]
                },
                {
                    id: 11,
                    brand: "PROSIE",
                    name: "Cashmere Sweater",
                    price: 10,
                    originalPrice: 13,
                    discount: "30% OFF",
                    colors: [
                        { name: "Camel", code: "#c19a6b", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80" }
                    ]
                },
                {
                    id: 12,
                    brand: "PROSIE",
                    name: "Wool Blend Coat",
                    price: 8,
                    originalPrice: 11,
                    discount: "25% OFF",
                    colors: [
                        { name: "Camel", code: "#c19a6b", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" }
                    ]
                }
            ]

        };