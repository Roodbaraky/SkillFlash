import express from "express";
import { app } from "./app";
import { connectDB } from "../database/connection";

app.use(express.json());
const PORT = 9090;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}... `);
});
connectDB();
