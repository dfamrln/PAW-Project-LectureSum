const materiModel = require('../models/productModel');

const getStatus = (req, res) => {
    res.json({
        status: "success",
        app: "LectureSum API",
        message: "Server middleware dan endpoint berjalan dengan baik."
    });
};

const getProduk = (req, res) => {
    // Memenuhi syarat tugas /api/produk, namun mereturn entitas materi LectureSum
    const materi = materiModel.getAllMateri();
    res.json(materi); 
};

module.exports = {
    getStatus,
    getProduk
};