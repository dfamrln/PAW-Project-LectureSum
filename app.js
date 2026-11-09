require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./config/appConfig');
const logger = require('./middlewares/logger');
const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use('/api', apiRoutes);
app.use('/', viewRoutes);

const PORT = process.env.PORT || 5173;

sequelize.sync() 
    .then(() => {
        console.log('Database PostgreSQL berhasil terhubung & tersinkronisasi.');
        app.listen(PORT, () => {
            console.log(`LectureSum Server aktif di http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Koneksi database gagal:', err));