const express = require("express");
const router = express.Router();
let courses = require("../models/course.model");

router.get("/", (req, res) => {
  res.json(courses);
});

router.post("/newcourse", (req, res) => {
  // console.log(req.body);
  // console.log("Add new course here..");
  let newCourse = req.body;
  courses.push(newCourse);
  res.json({ msg: "success" });
});

router.delete("/:id",(req,res)=>{
    console.log("deleted from here");
    let theCourseId = +req.params.id;
    courses =courses.filter(course=>course.id!=theCourseId);
    res.json({msg:"success"});
})

module.exports = router;
