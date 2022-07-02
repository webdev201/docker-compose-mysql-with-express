const express = require("express");
const knex = require("./database/knex");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/posts", async (req, res) => {
  const posts = await knex("posts").select("*");
  return res.json(posts);
});

// Create route for adding post data
app.post("/posts", async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await knex("posts").insert({
      title,
      content,
    });

    return res.status(201).json({ id: post[0], title, content });
  } catch (err) {
    return res.status(500).json({
      message: " Uh oh! Something went wrong adding this post",
    });
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});
