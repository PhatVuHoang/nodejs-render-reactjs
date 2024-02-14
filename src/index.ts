import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import router from "./routes/home.routes";
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.static(__dirname + "/views"));
app.use("/", router);

app.use((_, res) => {
  let htmlContent = fs.readFileSync("src/views/404.html", "utf-8");

  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`[SERVER]: Server is running at http://localhost:${port}`);
});
