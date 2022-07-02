/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("posts").del();
  await knex("posts").insert([
    { id: 1, title: "Post 1", content: "post 1 content" },
    { id: 2, title: "Post 2", content: "post 2 content" },
    { id: 3, title: "Post 3", content: "post 3 content" },
  ]);
};
