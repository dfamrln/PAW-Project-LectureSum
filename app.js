const express = require('express');
const app = express();
const path = require('path');

const logger = require('./middlewares/logger');
const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(logger);

app.use('/api', apiRoutes);
app.use('/', viewRoutes);

const PORT = 5173; 
app.listen(PORT, () => {
    console.log(`LectureSum Server aktif di http://localhost:${PORT}`);
});