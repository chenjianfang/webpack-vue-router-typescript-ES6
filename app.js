const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'/')));
app.use(express.static(path.join(__dirname,'/dist/html')));

app.listen(9000);