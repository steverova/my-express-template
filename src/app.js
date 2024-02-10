import express, { json, urlencoded } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import indexRouter from "./routes/public/index.js";
import errorHandler from "./middleware/errorHandler.js";
// import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", indexRouter);
// app.use(errorHandler);
try {
  app.listen(PORT, () => {
    console.log(`Server is running in port http://localhost:${PORT}`);
  });
} catch (error) {
  console.error("Error starting the server:", error);
}

export default app;
