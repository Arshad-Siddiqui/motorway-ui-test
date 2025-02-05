"use strict";

const app = require("express")();
const images = require("./src/images.json");

const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

app.get("/images", ({ query }, res) => {
  const i = query.limit ? images.slice(0, parseInt(query.limit)) : images;

  setTimeout(() => {
    return res.status(200).json(i);
  }, randomInterval(500, 1500));
});

const port = 5001;
app.listen(port, () => {
  process.stdout.write(`Server is available on http://localhost:${port}/\n`);
});
