require('dotenv').config(); // get local .env variables into process.env
const express = require('express');
const app = express();
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const PORT = process.env.PORT || 3500;

// Custom logger middleware.
app.use(logger);

// Serve static files for root
app.use(express.static('./public'));

// routes
app.use('/search', require('./routes/api/query'));

// 404 handler
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('json')) {
        res.json({ error: '404 not found' });
    } else {
        res.type('txt').send('404 not found');
    }
})

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))