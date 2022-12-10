const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.post('/auth/register', async (req, res) => {
  pool.query(
    'SELECT * FROM users WHERE email = $1 OR username = $2',
    [req.body.email, req.body.username],
    (err, data) => {
      if (err) return res.json(err);
      if (data.rows.length != 0)
        return res.status(409).json('User already exists');

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      console.log(hash);

      pool.query(
        'INSERT INTO users(username, email, password) VALUES ($1, $2, $3)',
        [req.body.username, req.body.email, hash]
      );
    }
  );
});

app.post('/auth/login', async (req, res) => {
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

app.post('/auth/logout', async (req, res) => {
  res.clearCookie("access_token",{
    sameSite:"none",
    secure:true
  }).status(200).json('logged out')
});

app.listen(3001, () => {
  console.log('server on 3001');
});
