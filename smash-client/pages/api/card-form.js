import { addCard } from "../../lib/rest";

export default function handler(req, res) {
  const body = req.body;

  console.log("body: ", body);

  addCard(req.body);

  res.status(201).json({ data: req.body });
}
