const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
const { request, response } = require('express');
const stripe = require("stripe")("sk_test_51HRvttIVnuUPSojMJRZJQr64TT6KCvapsrnGLJkHPUqP7jFwSvOksiRRniHLbORrlMtiH6fqfqxBwCKi1Nvgqkdb00jE4TXBwX")

// API


// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));


app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved .. for this amount' , total)

    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,  //submits of the currency
        currency: "usd",
        });

    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// listen command
exports.api = functions.https.onRequest(app);

// (http://localhost:5001/challeng-c1a55/us-central1/api)