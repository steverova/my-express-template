import { Router } from "express";
// import { select, execute } from "../../database/db.js";
const router = Router();

/* GET home page. */
router.get("/", async function (_, res) {
  res.status(200).send({ message: "hola" });
});

export default router;
