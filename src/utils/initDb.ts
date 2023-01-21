import { initializeTables } from "./database";

initializeTables()
  .then(() => {
    console.log("Database initialized");
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    process.exit();
  });
