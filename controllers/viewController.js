const Materi = require('../models/materiModel');

const renderDashboard = async (req, res) => {
    try {
        const daftarMateri = await Materi.findAll({ order: [['createdAt', 'DESC']] });
        res.render('index', { title: 'LectureSum - Dashboard', materi: daftarMateri });
    } catch (error) {
        res.status(500).send("Gagal memuat dashboard");
    }
};

const renderForm = async (req, res) => {
    try {
        const id = req.query.id; 
        let materiEdit = null;
        if (id) materiEdit = await Materi.findByPk(id);
        
        res.render('form', { 
            title: materiEdit ? 'Edit Materi' : 'Tambah Materi', 
            materi: materiEdit 
        });
    } catch (error) {
        res.status(500).send("Gagal memuat form");
    }
};

module.exports = { renderDashboard, renderForm };