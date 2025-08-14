import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;


const proverbs = JSON.parse(fs.readFileSync("data/proverbs.json", "utf-8"));
app.use(express.json());

app.get("/api/random", (req, res) => {
  const random = proverbs[Math.floor(Math.random() * proverbs.length)];
  res.json(random);
});

app.get("/api/random/:count", (req, res) => {
  const count = parseInt(req.params.count) || 1;
  const shuffled = [...proverbs].sort(() => 0.5 - Math.random());
  res.json(shuffled.slice(0, count));
});

app.get("/api/all", (req, res) => {
  res.json(proverbs);
});

app.get("/api/category/:cat", (req, res) => {
  const category = req.params.cat.toLowerCase();
  const filtered = proverbs.filter(p => p.category.toLowerCase() === category);
  res.json(filtered.length ? filtered : { message: "No proverbs found in this category." });
});

app.get("/api/search/:keyword", (req, res) => {
  const keyword = req.params.keyword.toLowerCase();
  const results = proverbs.filter(p =>
    p.proverb.toLowerCase().includes(keyword) ||
    p.transliteration.toLowerCase().includes(keyword) ||
    p.meaning.toLowerCase().includes(keyword)
  );
  res.json(results.length ? results : { message: "No matching proverbs found." });
});

app.get("/api/transliteration/:text", (req, res) => {
  const text = req.params.text.toLowerCase();
  const results = proverbs.filter(p => p.transliteration.toLowerCase().includes(text));
  res.json(results.length ? results : { message: "No matching proverbs found." });
});

app.get("/api/meaning/:text", (req, res) => {
  const text = req.params.text.toLowerCase();
  const results = proverbs.filter(p => p.meaning.toLowerCase().includes(text));
  res.json(results.length ? results : { message: "No matching proverbs found." });
});

app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
