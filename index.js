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

// console.log(process.env.SERPSTACK_ACCESS_KEY);


app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))