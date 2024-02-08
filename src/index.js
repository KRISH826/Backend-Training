/** @format */
import express from "express";
const app = express();
const port = process.env.PORT || 3030;

const jokes = [
  {
    id: 1,
    joke: "Why don't scientists trust atoms? Because they make up everything!",
    category: "Science",
  },
  {
    id: 2,
    joke: "I'm reading a book on anti-gravity. It's impossible to put down!",
    category: "Science",
  },
  {
    id: 3,
    joke: "Did you hear about the mathematician who’s afraid of negative numbers? He’ll stop at nothing to avoid them!",
    category: "Math",
  },
  {
    id: 4,
    joke: "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    category: "Math",
  },
  {
    id: 5,
    joke: "Why don't skeletons fight each other? They don't have the guts!",
    category: "Puns",
  },
  {
    id: 6,
    joke: "What do you call fake spaghetti? An impasta!",
    category: "Puns",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// get a list of five jokes
app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

app.get("/api/", (req, res) => {
  res.send("hello api");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
