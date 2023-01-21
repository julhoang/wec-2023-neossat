import knex from "knex";
import path from "path";

export const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve("./db.sqlite"),
  },
});

export const initializeTables = async () => {
  if (!(await db.schema.hasTable("questions"))) {
    await db.schema.createTable("questions", (table) => {
      table.increments("id").primary();
      table.string("question").notNullable();
      table.string("options").notNullable();
      table.string("theme").notNullable();
      table.string("wrongcount").notNullable();
      table.string("knowledge").notNullable();
    });
  }

  if (!(await db.schema.hasTable("users"))) {
    await db.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("answered");
      table.string("correct");
      table.string("incorrect");
    });
  }
};

export const updateQuizResult = async (ques_id: number, count: number) => {
  if (await db.schema.hasTable("questions")) {
    await db("questions")
      .update({
        wrongcount: count,
      })
      .where("id", ques_id);
  }
};
