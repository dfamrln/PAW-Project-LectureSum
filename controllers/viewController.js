const materiModel = require('../models/materiModel');

const renderDashboard = (req, res) => {
    const daftarMateri = materiModel.getAllMateri();
    res.render('index', { 
        title: 'LectureSum - Dashboard Materi', 
        materi: daftarMateri 
    });
};

module.exports = { renderDashboard };