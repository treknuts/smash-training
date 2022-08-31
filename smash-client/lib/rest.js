import { readFileSync, writeFileSync } from "fs";
import path from "path";

const cardFilePath = path.join(process.cwd(), "/cards.json");

export function getCardData() {
  const rawCardData = readFileSync(cardFilePath, "utf-8");
  const jsonCardData = JSON.parse(rawCardData);
  return jsonCardData;
}

export function addCard(card) {
  // worked put wiped the shit
  // writeFileSync(cardFilePath, JSON.stringify(card), "utf-8");
  var cardJson = getCardData();

  cardJson.cards.push(card);

  writeFileSync(cardFilePath, JSON.stringify(cardJson), "utf-8");
}
