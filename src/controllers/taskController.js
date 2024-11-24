import prisma from '../../prisma/prismaClient.js';

export const getTasks = async (req, res, next) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

export const getTask = async (req, res, next) => {
    try {
      const { id } = req.params;
      const task = await prisma.task.findUnique({
        where: { id: Number(id) },
      });
  
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
  
      res.json(task);
    } catch (err) {
      next(err);
    }
  };

export const createTask = async (req, res, next) => {
  try {
    const { title, color } = req.body;
    const task = await prisma.task.create({
      data: { title, color },
    });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { title, color, completed },
    });
    res.json(task);
  } catch (err) {
    next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.task.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};