import express from "express";

import router from "./router/router.js";
import { SERVER_PORT } from "./config/config.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.listen(SERVER_PORT, () => {
  console.log(`Server funcionando en puerto: `, SERVER_PORT);
});