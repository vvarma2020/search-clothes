const express = require('express');
const app = express();
const { logger } = require('./middleware/logEvents');
const PORT = process.env.PORT || 3500;

// Custom logger middleware.
app.use(logger);

console.log('testing...');

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))