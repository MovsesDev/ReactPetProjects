const { Router } = require("express");

const router = Router();
const createSbjectSearch = require("../module/filt_func");
const Home = require("../models/home");

const creatCount = (data, limit, index = 1, arr = []) => {
  if (data <= 0) {
    return arr;
  }
  return creatCount(data - limit, limit, index + 1, [...arr, index]);
};

router.post("/filt_page/:id", async (req, res) => {
  try {
    const limit = 8;
    const body = req.body;
    let newBody = {};

    for (let prop in body) {
      if (body[prop]) {
        newBody[prop] = body[prop];
      }
    }

    const id = req.params;
    const filter = await createSbjectSearch(newBody);
    const countDocuments = await Home.find(filter).countDocuments();
    const count = creatCount(countDocuments, limit);

    const candidate = await Home.find(filter)
      .sort({ $natural: -1 })
      .skip((id.id - 1) * limit)
      .limit(limit);

    res.json({ candidate, count });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
});

module.exports = router;
