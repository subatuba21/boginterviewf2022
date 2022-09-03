import express from "express";
import {config} from 'dotenv-safe';
import {connectFunc} from './db/setup';
import './db/User';

config();
connectFunc();
const app = express();

app.listen(1500, () => {
  console.log("Server is running on port 1500");
});
