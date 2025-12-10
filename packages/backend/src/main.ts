import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ response: "Hello, World!"});
});

app.post("/challenges", (req: Request, res: Response) => {
  const receivedData = req.body;
  res.send({ receivedData });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});