const express = require("express");
const app = express();
//using express in comparison to app.js
const Joi = require("joi");

app.use(express.json());
//This is middleware to use express.json

const courses = [
   { id: 1, name: "course1" },
   { id: 2, name: "course2" },
   { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
   res.send("Hello Mami, so nice to see you again!");
});

app.get("/api/courses", (req, res) => {
   res.send(courses);
});

app.post("/api/courses", (req, res) => {
   const { error } = validateCourse(req.body); //result.error
   if (error) return res.status(400).send(error.details[0].message);

   const course = {
      id: courses.length + 1,
      name: req.body.name,
   };
   courses.push(course);
   res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
   const course = courses.find((c) => c.id === parseInt(req.params.id));
   if (!course)
      return res
         .status(404)
         .send("The course with the given ID was not found.");

   const { error } = validateCourse(req.body); //result.error
   if (error) return res.status(400).send(error.details[0].message);

   course.name = req.body.name; //update course
   res.send(course); //Return the updated course
});

function validateCourse(course) {
   const schema = Joi.object({
      name: Joi.string().min(3).required(),
   });

   return schema.validate(course);
}

app.get("/api/courses/:id", (req, res) => {
   const course = courses.find((c) => c.id === parseInt(req.params.id));
   if (!course)
      return res
         .status(404)
         .send("The course with the given ID was not found.");
   res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
   const course = courses.find((c) => c.id === parseInt(req.params.id));
   if (!course)
      return res
         .status(404)
         .send("The course with the given ID was not found.");

   const index = courses.indexOf(course);
   courses.splice(index, 1);

   res.send(course);
});

// PORT can be changed based on your environemnt so set this as variable
// use environmental port# (if there is), otherwise use 3000
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
