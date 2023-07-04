export default function errorHandler(err, req, res) {
  if (err.status === 404) {
    err.message = "The requested route does not exist";
  }
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(400).json({ message: err.message });
}
