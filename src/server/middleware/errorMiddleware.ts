import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
  console.error("Error occurred:", err.message);
  res.status(500).json({ errorMessage: "Internal Server Error" });
};

export default errorMiddleware;
