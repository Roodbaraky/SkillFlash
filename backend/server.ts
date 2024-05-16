import express from "express";
import { app } from "./app";
import { connect } from "../database/db";

app.use(express.json());
const PORT = 9090;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}... `);
});
connect();
