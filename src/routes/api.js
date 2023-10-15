const express = require("express");
const {createStudent, readStudent, updateStudent, deleteStudent, login} = require("../controllers/StudentsController");
const {createWork, readWork, updateWork, deleteWork} = require("../controllers/WorksController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");

const router = express.Router();

// Student Manage
router.post("/createStudent", createStudent);
router.get("/readStudent", readStudent);
router.put("/updateStudent", updateStudent);
router.delete("/deleteStudent", deleteStudent);
router.post("/login", login);

// Work Manage
router.post("/createWork", AuthVerifyMiddleware, createWork);
router.get("/readWork/:id", AuthVerifyMiddleware, readWork);
router.put("/updateWork/:id", AuthVerifyMiddleware, updateWork);
router.delete("/deleteWork/:id", AuthVerifyMiddleware, deleteWork);


module.exports = router;