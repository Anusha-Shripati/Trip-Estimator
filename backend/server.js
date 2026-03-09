import app from "./app.js";
import { connectDB } from "./src/config/database.js";
const PORT = 4000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on the ${PORT} `);
});
