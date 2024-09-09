const express = require("express");
const userRouter = require("./Routes/userRoutes");
const connectDb = require("./Config/Db");
const app = express();
const port = 3000;

connectDb('mongodb+srv://karanlakhanpalji:karansharma25399@cluster0.8vlefqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
