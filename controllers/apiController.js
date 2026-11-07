const Materi = require('../models/materiModel');

const getStatus = (req, res) => {
    res.json({ status: "success", message: "API & Database PostgreSQL terhubung." });
};

const getMateri = async (req, res) => {
    try {
        const data = await Materi.findAll({ order: [['createdAt', 'DESC']] });
        res.json(data);
    } catch (error) { res.status(500).json({ error: error.message }); }
};

const getMateriById = async (req, res) => {
    try {
        const data = await Materi.findByPk(req.params.id);
        if(!data) return res.status(404).json({ message: "Data tidak ditemukan" });
        res.json(data);
    } catch (error) { res.status(500).json({ error: error.message }); }
};

const createMateri = async (req, res) => {
    try {
        await Materi.create(req.body);
        res.status(201).json({ message: "Materi berhasil ditambahkan" });
    } catch (error) { res.status(500).json({ error: error.message }); }
};

const updateMateri = async (req, res) => {
    try {
        await Materi.update(req.body, { where: { id: req.params.id } });
        res.json({ message: "Materi berhasil diperbarui" });
    } catch (error) { res.status(500).json({ error: error.message }); }
};

const deleteMateri = async (req, res) => {
    try {
        await Materi.destroy({ where: { id: req.params.id } });
        res.json({ message: "Materi berhasil dihapus" });
    } catch (error) { res.status(500).json({ error: error.message }); }
};

module.exports = { getStatus, getMateri, getMateriById, createMateri, updateMateri, deleteMateri };