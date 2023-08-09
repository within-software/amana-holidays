

const express = require('express');
const strapi = require('strapi');
const cors = require('cors'); // Import the cors package

const app = express();
const server = http.createServer(strapi.app);

// Allow requests from your production domain(s)
const allowedOrigins = ['https://within-software.com', 'https://www.within-software.com'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Your existing configuration
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

strapi(/* {...} */).start();
server.listen(1337, () => {
  console.log('Strapi server running at http://localhost:1337');
});





/*
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});

*/