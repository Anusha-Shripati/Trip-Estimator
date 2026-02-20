const validator = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        message: "Invalid Field values",
        errors: error.details.map((d) => d.message),
      });
    }
    next();
  };
};
