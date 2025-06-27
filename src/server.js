import express from 'express';

import producto from './product/controller.js';

import brand from './brand/controller.js';

const app = express();
app.use(express.json()) 
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});



app.use('/product', producto)
app.use('/brand', brand)