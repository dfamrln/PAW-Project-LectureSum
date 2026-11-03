const materiData = [
    { 
        id: 1, 
        judul: "UI/UX dan Wireframing", 
        mata_kuliah: "Pengembangan Aplikasi Web", 
        pertemuan: 4, 
        status: "Draf",
        aksi: "Tinjau"
    },
    { 
        id: 2, 
        judul: "Layout Responsif", 
        mata_kuliah: "Pengembangan Aplikasi Web", 
        pertemuan: 3, 
        status: "Terbit",
        aksi: "Lihat"
    }
];

const getAllMateri = () => {
    return materiData;
};

module.exports = { getAllMateri };