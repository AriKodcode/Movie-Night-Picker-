import express from "express";
import cors from "cors";
import router from "./routes/apiMovie.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/movie", router);

app.listen(3000, () => {
  console.log("server run on port 3000");
});
