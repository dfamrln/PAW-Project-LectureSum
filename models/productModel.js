const products = [
    { id: 1, name: "Paket Hosting Basic", price: 150000, category: "Hosting" },
    { id: 2, name: "Domain .com", price: 125000, category: "Domain" },
    { id: 3, name: "SSL Certificate", price: 250000, category: "Security" },
    { id: 4, name: "Jasa Pembuatan Website", price: 2500000, category: "Service" }
];

const getAllProducts = () => {
    return products;
};

module.exports = { getAllProducts };