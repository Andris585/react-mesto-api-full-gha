/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const cors = require('cors');
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');
const { login, createNewUser } = require('./controllers/users');
const { auth } = require('./middlewares/auth');
const NotFound = require('./errors/NotFound');
const errorHandler = require('./middlewares/errorHandler');
const { loginValidation, createNewUserValidation } = require('./utils/validation');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 5000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb');

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(requestLogger);
app.post('/signin', loginValidation, login);
app.post('/signup', createNewUserValidation, createNewUser);
app.use(auth);
app.use(usersRouter);
app.use(cardsRouter);
app.use('*', () => {
  throw new NotFound('Запрашиваемая страница не найдена');
});
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Прослушивается порт: ${PORT}`);
});
