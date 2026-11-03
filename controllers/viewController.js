const materiModel = require('../models/productModel');

const renderDashboard = (req, res) => {
    const daftarMateri = materiModel.getAllMateri();
    res.render('index', { 
        title: 'LectureSum - Dashboard Materi', 
        materi: daftarMateri 
    });
};

module.exports = { renderDashboard };