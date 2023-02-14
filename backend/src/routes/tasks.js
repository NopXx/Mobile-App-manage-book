import { Router } from "express";

import tasksController from "../controllers/tasks";

const router = Router();

/**
 * @swagger
 *  tags:
 *      name: Tasks
 *      description: Task endpoint
 */

/**
 * @swagger
 * /tasks:
 *  get:
 *      summary: Gets all tasks
 *      tags: [Tasks]
 */
router.get("/tasks", tasksController.getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Gets total tasks counter
 *    tags: [Tasks]
 */
router.get("/tasks/count", tasksController.getTaskCount);

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Gets a task by id
 *    tags: [Tasks]
 */
router.get("/tasks/:id", tasksController.getTask);

/**
 * @swagger
 * /tasks:
 *  post:
 *    summary: Save a new task
 *    tags: [Tasks]
 */
router.post("/tasks", tasksController.saveTask);

/**
 * @swagger
 * /tasks:
 *  put:
 *    summary: Update a task by id
 *    tags: [Tasks]
 */
router.put("/tasks/:id", tasksController.updateTask);

/**
 * @swagger
 * /tasks:
 *  delete:
 *    summary: Delete a task by id
 *    tags: [Tasks]
 */
router.delete("/tasks/:id", tasksController.deleteTask);

export default router;
