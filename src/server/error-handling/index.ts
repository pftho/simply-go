import { Express, Request, Response, NextFunction } from "express";

export default (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    // this middleware runs whenever requested page is not available
    res.status(404).json({ errorMessage: "This route does not exist" });
  });

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    // whenever you call next(err), this middleware will handle the error
    console.error("ERROR", req.method, req.path, err);

    // only render if the error occurred before sending the response
    if (!res.headersSent) {
      res.status(500).json({
        errorMessage: "Internal server error. Check the server console",
      });
    }
  });
};
