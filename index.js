import express from "express";
import connectDb from "./connectDb.js";
import todoRoutes from "./todo/todo.routes.js";
import userRoutes from "./user/user.routes.js";

const app = express();

// to make app understand json
app.use(express.json());

// connect db
connectDb();

// register routes
app.use(todoRoutes);
app.use(userRoutes);

// port and server
// const PORT = process.env.API_PORT;
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
