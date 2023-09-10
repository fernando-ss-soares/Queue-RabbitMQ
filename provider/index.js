import express from "express";
import sendMessage from "./functions/sendMessage.js";

const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.json());

app.get("/send-queue", (req, res) => {
  res.send("Mensagem enviada para fila order");
  sendMessage("order", {product: "Seguro de Vida",term: "2024",policy: "123456"});
});

app.listen(PORT, () => console.log("Server running at port " + PORT));
