import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.routes.js";
import taskRouter from "./routes/task.routes.js";
import adminRouter from "./routes/admin.routes.js";

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}))

app.use("/api/v1/auth", authRouter);

app.use("/api/v1/tasks", taskRouter);

app.use("/api/v1/admin", adminRouter);

export default app;