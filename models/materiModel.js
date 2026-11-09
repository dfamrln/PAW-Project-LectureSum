const { DataTypes } = require('sequelize');
const sequelize = require('../config/appConfig');

const Materi = sequelize.define('Materi', {
    judul: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mata_kuliah: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pertemuan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [1],
                msg: "Nilai pertemuan minimal adalah 1"
            }
        }
    },
    status: {
        type: DataTypes.ENUM('Draf', 'Terbit'),
        defaultValue: 'Draf'
    }
}, {
    tableName: 'materi',
    timestamps: true 
});

module.exports = Materi;