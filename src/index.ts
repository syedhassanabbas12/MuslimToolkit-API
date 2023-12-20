import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./api/v1/routes";

// import rootRouter from "./api/v1/routes";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors({ credentials: true }));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8080, () => {
  console.log("Server is running on http://localhost:8080/");
});

const MONGO_URL =
  "mongodb+srv://shahg:admin@cluster0.ce3s5.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", routes());
// app.use("/api", rootRouter); /*  */

// app.listen(PORT, (): void => {
//   console.log(`Server is running on PORT = ${PORT}`);
// });
