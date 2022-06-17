const express = require("express");
const bookRouter = express.Router();

bookRouter
   .route("/")

   // I will create a JSON file for book collection

   .get((req, res) => {
      res.end("Will send all your book library");
   })

   .post((req, res) => {
      res.end(
         `Will add the new book: ${req.body.name} with description ${req.body.description} to the collection: ${req.body}`
      );
   })

   .put((req, res) => {
      res.end(`Will update the book information for ${req.body.name}`);
   })

   .delete((req, res) => {
      res.end("Deleting the book ${req.body.name}");
   });

module.exports = bookRouter;
