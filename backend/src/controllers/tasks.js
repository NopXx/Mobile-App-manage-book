import { pool } from "../database";

const getTasks = async (req, res) => {
  try {
    const [result] = await pool.promise().query("SELECT * FROM tasks");
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool
      .promise()
      .query("SELECT * FROM tasks WHERE `id` = ?", [id]);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

const getTaskCount = async (req, res) => {
  try {
    const [result] = await pool.promise().query("SELECT COUNT(*) FROM tasks");
    res.json(result["COUNT(*)"]);
  } catch (error) {
    console.log(error);
  }
};

const saveTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const [result] = await pool
      .promise()
      .query("INSERT INTO tasks (title, description) VALUES (?, ?)", [
        title,
        description,
      ]);
    res.json({
      id: result.insertId,
      ...req.body,
    });
  } catch (error) {
    console.log(erorr);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.promise().query("DELETE FROM tasks WHERE id = ?", [id]);
    res.json({ message: "Deleted" });
  } catch (error) {
    console.log(error);
  }
};
const updateTask = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool
      .promise()
      .query("UPDATE tasks SET ? WHERE id = ?", [req.body, id]);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export default {
  getTask,
  updateTask,
  getTasks,
  getTaskCount,
  saveTask,
  deleteTask,
};
