import { Request, Response } from 'express';

const PORT = 8000;
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const fetch = require('node-fetch');
require('dotenv').config();
morgan('tiny');

const app = express();

const getTokenURL = 'http://164.90.180.185/api/auth/token/';

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.post('/', (req: Request, res: Response) => {
  console.log('Reaching');
  const data = req.body;
  console.log('request props: ', req.body);
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  };

  fetch(getTokenURL, fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => console.error(error.message));
});

// app.post('/', (req, res) => {
//   const data = req.body;

//   const fetchOptions = {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json',
//       //   'x-cassandra-token': TOKEN_KEYVALUES,
//       Accept: 'application/json',
//     },
//     body: JSON.stringify(data),
//   };

//   fetch(getToken, fetchOptions)
//     .then((response) => response.json())
//     .then((data) => {
//       res.status(201).json({ message: 'POST request successful', data });
//       console.log(data);
//     })
//     .catch((error) => console.log(error.message));
// });

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
