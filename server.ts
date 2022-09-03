import express from "express";
import {config} from 'dotenv-safe';
import {connectFunc} from './db/setup';
import './db/User';
import { UserModel } from "./db/User";

config();
connectFunc();
const app = express();

app.get('/randomUser', async (req, res) => {
  const user = new UserModel({name: 'test'});
  await user.save();
  res.send(user._id);
});

app.listen(1500, () => {
  console.log("Server is running on port 1500");
});
