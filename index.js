const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.listen(4000, () => {
    console.log('app listening on port 4000');
});