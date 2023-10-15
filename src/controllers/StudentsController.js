const jwt = require("jsonwebtoken");
const StudentModel = require("../models/StudentsModel");

// Create
exports.createStudent = async (req, res) => {
    try {
        const result = await StudentModel.create(req.body);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "fail", data: error });
    }
};

// Read
exports.readStudent = async (req, res) => {
    try {
        const email = req.body.email;
        const result = await StudentModel.findOne({email: email});
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "fail", data: error });
    }
};

// Update
exports.updateStudent = async (req, res) => {
    try {
        const email = req.body.email;
        const result = await StudentModel.updateOne({ email: email }, req.body);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "fail", data: error });
    }
};

// Delete
exports.deleteStudent = async (req, res) => {
    try {
        const email = req.body.email;
        const result = await StudentModel.deleteOne({ email: email });
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "fail", data: error });
    }
};

// Login
exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const result = await StudentModel.findOne({email: email, password: password});
        if(result){
            const payLoad = {
                exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
                data: email,
            };
            const token = jwt.sign(payLoad, process.env.JWT_SECRET_KEY);
            res.status(200).json({ status: "success", token: token });
        }
    } catch (error) {
        res.status(400).json({ status: "fail", data: error });
    }
};