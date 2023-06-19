const express = require('express');

//Import Quotes and utility Funcs
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const quotesRoutes = express.Router();

//GET all Quotes
quotesRoutes.get('/', (req, res, next) => {
    if (req.query.person) {
        const authorQuotes = quotes.filter(q => q.person === req.query.person);
        if (authorQuotes.length) {
            res.send({ quotes: authorQuotes });
        } else {
            res.status(404).send('Not Found');
        }
    } else {

        res.send({ quotes: quotes });
    }
})

//GET Random quote
quotesRoutes.get('/random', (req, res, next) => {
    res.send({ quote: getRandomElement(quotes) });
})

//CREATE a new Quote
quotesRoutes.post('/', (req, res, next) => {
    const quote = req.query.quote;
    const person = req.query.person;
    if (quote && person) {
        quotes.push({ quote: quote, person: person })
        res.send({ quote: { quote, person } })
    } else {
        res.status(400).send('Failed to Create Quote')
    }
})

module.exports = { quotesRoutes }