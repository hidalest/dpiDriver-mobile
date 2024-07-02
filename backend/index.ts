import { Request, Response } from 'express';

const PORT = 8000;
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const fetch = require('node-fetch');
require('dotenv').config();
morgan('tiny');

const app = express();

const apiEndpoint = 'http://164.90.180.185/api';

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const fetchOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  fetch(`${apiEndpoint}/current-user/`, fetchOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      return fetch(`${apiEndpoint}/dashboard`, fetchOptions)
        .then((dashboardResponse) => {
          if (!dashboardResponse.ok) {
            throw new Error(`HTTP error! status: ${dashboardResponse.status}`);
          }
          return dashboardResponse.json();
        })
        .then((dashboardData) => {
          console.log('🚀 ~ .then ~ data:', data);
          console.log('🚀 ~ .then ~ dashboardData:', dashboardData);
          const getAllUserData = dashboardData.results.find(
            //TODO change this for the acual id of the login user which is data.id
            (item: any) => item.id === 7696
          );
          console.log('🚀 ~ .then ~ getAllUserData:', getAllUserData);

          console.log(getAllUserData);
          res.json(getAllUserData);
        });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
});

app.post('/', (req: Request, res: Response) => {
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

  fetch(`${apiEndpoint}/auth/token/`, fetchOptions)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((error) => console.error(error.message));
});

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
