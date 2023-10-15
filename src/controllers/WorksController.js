const WorkModel = require("../models/WorksModel");

exports.createWork = async (req, res) => {
    try {
        let result = await WorkModel.create(req.body);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "fail", data: error });
    }
};

exports.readWork = async (req, res) => {
    try {
        console.log("abdul kalam");
        const result = await WorkModel.findOne({_id: req.params.id});
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "fail", data: error });
    }
};

exports.updateWork = async (req, res) => {
    try {
        const Query = { _id: req.params.id };
        let result = await WorkModel.updateOne(Query, req.body);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "fail", data: error });
    }
};

exports.deleteWork = async (req, res) => {
    try {
        const Query = { _id: req.params.id };
        let result = await WorkModel.deleteOne(Query);
        res.status(200).json({ status: "success", data: result });
    } catch (error) {
        res.status(400).json({ status: "fail", data: error });
    }
};