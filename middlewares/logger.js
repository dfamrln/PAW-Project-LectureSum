const logger = (req, res, next) => {
    // Mencatat waktu saat response selesai dikirim
    res.on('finish', () => {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${req.method} ${req.originalUrl} - Status: ${res.statusCode}`);
    });
    next();
};

module.exports = logger;

