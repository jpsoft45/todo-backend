export const validateTask = (req, res, next) => {
    const { title, color } = req.body;
  
    if (!title || typeof title !== 'string') {
      return res.status(400).json({ error: 'Title is required and must be a string.' });
    }
  
    const validColors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "brown",
    ];
  
    if (color && !validColors.includes(color)) {
      return res.status(400).json({ error: 'Invalid color selected.' });
    }
  
    next();
  };