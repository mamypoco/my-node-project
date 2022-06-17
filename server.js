const express = require("express");
const morgan = require("morgan");
const bookRouter = require("./routes/bookRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
pp.use(morgan("dev"));
app.use(express.json());

app.use("/campsites", bookRouter);

///code here

app.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
});
