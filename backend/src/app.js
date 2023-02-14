import express from "express";
import taskRoutes from "./routes/tasks";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { swaggerOptions } from "./swaggerOptions";

const specs = swaggerJSDoc(swaggerOptions);

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

// Routes
app.use(taskRoutes);

// Swagger
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

export default app;
