const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema(
    {
        email: { type: String, unique: true },
        firstName: { type: String },
        lastName: { type: String },
        mobile: { type: String },
        password: { type: String },
        address: { type: String },
        roll: { type: String },
        class: { type: String }
    },
    { timestamps: true, versionKey: false }
);

const StudentModel = mongoose.model("student", StudentSchema);

module.exports = StudentModel;
