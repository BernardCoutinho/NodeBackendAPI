const app = require('./app');

require('dotenv').config()
const PORT = process.env.PORTA || 3000

app.listen(PORT, () => console.log('Server is running on port 3000...'))