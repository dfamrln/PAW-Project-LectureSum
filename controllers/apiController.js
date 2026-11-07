const materiModel = require('../models/materiModel');

const getStatus = (req, res) => {
    res.json({
        status: "success",
        app: "LectureSum API",
        message: "Server middleware dan endpoint berjalan dengan baik."
    });
};

const getProduk = (req, res) => {

    const materi = materiModel.getAllMateri();
    res.json(materi); 
};

module.exports = {
    getStatus,
    getProduk
};