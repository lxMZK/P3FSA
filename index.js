const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const PORT = process.env.PORT || 3001;
const axios = require('axios');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.post('/auth/register', (req, res) => {
  pool.query(
    'SELECT * FROM users WHERE email = $1 OR username = $2',
    [req.body.email, req.body.username],
    async (err, data) => {
      if (err) return res.json(err);
      if (data.rows.length != 0)
        return res.status(409).json('User already exists');

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);

      await pool.query(
        'INSERT INTO users(username, email, password, fname, lname) VALUES ($1, $2, $3, $4, $5)',
        [
          req.body.username,
          req.body.email,
          hash,
          req.body.fname,
          req.body.lname,
        ]
      );
    }
  );
});

app.post('/auth/login', (req, res) => {
  pool.query(
    'SELECT * FROM users WHERE username = $1',
    [req.body.username],
    (err, data) => {
      if (err) return res.json(err);
      if (data.rows.length === 0)
        return res.status(404).json('User not found!');

      const auth = bcrypt.compareSync(req.body.password, data.rows[0].password);

      if (!auth) return res.status(400).json('Wrong password');

      const token = jwt.sign({ id: data.rows[0].id }, 'jwtkey');
      const { password, ...other } = data.rows[0];

      res
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .status(200)
        .json(other);
    }
  );
});

app.post('/auth/logout', (req, res) => {
  res
    .clearCookie('access_token', {
      sameSite: 'none',
      secure: true,
    })
    .status(200)
    .json('logged out');
});

app.post('/contact', async (req, res) => {
  req.body.access_key = process.env.ACCESS_KEY;
  await axios.post('https://api.web3forms.com/submit', req.body);
  return res.status(200).json('Email Sent');
});

app.get('/chat', (req, res) => {
  pool.query(
    'SELECT * FROM messages LEFT JOIN users ON messages.uid = users.id',
    (err, data) => {
      if (err) return res.send(err);

      return res.status(200).json(data);
    }
  );
});

app.post('/chat', async (req, res) => {
  await pool.query('INSERT INTO messages(msg, uid) VALUES ($1, $2)', [
    req.body.msg,
    req.body.id,
  ]);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
