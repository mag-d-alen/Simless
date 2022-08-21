const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const { Console } = require("console");

require("body-parser-xml")(bodyParser);

const app = express();

const uri =
  "https://xml2.travelsim.com/tsim_xml/service/xmlgate?uname=XXXXX&upass=XXXX&plain=1&command=getrates&aserviceid=9060&servicetype=voice&ratesid=6781";
app.use(
  bodyParser.xml({
    limit: "1MB", // Reject payload bigger than 1 MB
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
    console.log(res.body);
  } catch (error) {}
});

app.listen(8000, () => console.log("server running"));
