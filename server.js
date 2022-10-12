const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

console.log('testing...');

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))