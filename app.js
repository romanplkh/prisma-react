const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const Clarifai = require("clarifai");
if (process.env.NODE_ENV !== "production") require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

const clarifyHelper = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFI_KEY
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "Application", "build")));

  app.get("*", (req, res) => {
    res.sendfile(path.join(__dirname, "Application", "build", "index.html"));
  });
}

app.post("/getdata", async (req, res) => {
  const { imageUrl } = req.body;

  if (imageUrl == null || imageUrl.length == 0)
    return res.json({
      message: "Please provide a valid url to an image of a person"
    });

  try {
    const dataFromApi = await clarifyHelper.models.predict(
      Clarifai.DEMOGRAPHICS_MODEL,
      imageUrl
    );

    return res.json(dataFromApi);
  } catch (error) {
    return res.json(error);
  }
});

app.listen(port, err => {
  if (err) throw err;
  console.log(`App is running in port ${port}`);
});
