const express = require('express');
const app = express();

const { quotesRoutes } = require('./quotesRoutes.js')

//Initialize quotes Router
app.use('/api/quotes', quotesRoutes);
app.use(express.static('public'));


const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
}
);

