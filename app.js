const express = require("express");
const app = express();
const { PORT = 3000 } = process.env;

const usersRouter = require("./routes/users");
const cardRouter = require("./routes/cards");

app.use("/users", usersRouter);
app.use("/cards", cardRouter);


app.use((req, res) => {
  res.status(404).send({ message: "Recurso no encontrado" });
});

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
