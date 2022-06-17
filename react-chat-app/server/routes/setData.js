const { Router } = require("express");
const router = Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// const Home = require("../models/home");
// const HomeList = require("../models/homeList");

// const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])

router.post("/add", async (req, res) => {
  try {
    res.status(201).json({ message: "" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
});

router.post("/updat/:id", async (req, res) => {
  try {
    res.status(201).json({ message: "" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
});

// router.get('/images/:key', (req, res) => {
//   console.log(req.params)
//   const key = req.params.key
//   const readStream = getFileStream(key)

//   readStream.pipe(res)
// })

// router.post('/images', upload.single('image'), async (req, res) => {
//   const file = req.file
//   // console.log(file)

//   // apply filter
//   // resize

//   const result = await uploadFile(file)
//   await unlinkFile(file.path)
//   // console.log(result)
//   const description = req.body.description
//   res.send({ imagePath: `/images/${result.Key}` })
// })

module.exports = router;
