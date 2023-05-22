const express = require("express");
const cors = require("cors");
const { default: helmet } = require("helmet");
const configs = require("./configs/index");
const db = require("./db/index");
const router = require("./router/index.router");
const consts = require("./consts/index");
const app = express();
const middlewares = require("./middlewares/index");
const utils = require("./utils/index");

const PORT = process.env.PORT || 3000;

configs.serverConfig.initialServerConfig();
utils.helpers.createUploadDir("./uploads");

app.use("/uploads", express.static("uploads"));

app.use(express.json());
app.use(helmet());
app.use(cors());

app.use(middlewares.loggerMiddleware);

app.use(`${process.env.APP_PREFIX}${consts.router.USER}`, router.userRouter);
app.use(`${process.env.APP_PREFIX}${consts.router.ORDERS}`, router.ordersRouter);
app.use(`${process.env.APP_PREFIX}${consts.router.STORE}`, router.storeRouter);
app.use(`${process.env.APP_PREFIX}${consts.router.BOOKS}`, router.booksRouter);

db.mongooseCoonection.connectToMongoDb().then(() => {
  app.listen(PORT, () => {
    console.log(`BookHubServer listening on port ${PORT}`);
  });
});
