import * as express from "express";

import * as bookController from "./controllers/bookController";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req: Request, res: Response) => res.send("hi"))

// API Endpoints
app.get("/", bookController.allBooks);
app.get("/{id}", bookController.getBook);
app.post("/", bookController.addBook);
app.put("/{id}", bookController.updateBook);
app.delete("/{id}", bookController.deleteBook);

const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});