require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

require("body-parser-xml")(bodyParser);

const app = express();
const uname = process.env.UNAME;
const upass = process.env.UPASS;
app.use(cors());
app.use(express.json());

const uri = `https://xml2.travelsim.com/tsim_xml/service/xmlgate?uname=${uname}&upass=${upass}&plain=1&command=getrates&aserviceid=9060&servicetype=voice&ratesid=6781`;

app.use(
  bodyParser.xml({
    limit: "1MB", // Reject payload bigger than 1
    xmlParseOptions: {
      normalize: true, // Trim whitespace inside text nodes
      normalizeTags: true, // Transform tags to lowercase
      explicitArray: false, // Only put nodes in array if >1
    },
  })
);

app.get("/tariffs", (req, res) => {
  try {
    const res = axios.get(uri);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => console.log("server running"));
