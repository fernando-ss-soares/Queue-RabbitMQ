import express from "express";
import consumeMessage from "./functions/consumerMessage.js";

const app = express();
const PORT = process.env.PORT || 4002;
app.use(express.json());
consumeMessage("order");

app.listen(PORT, () => console.log("Server running at port " + PORT));
