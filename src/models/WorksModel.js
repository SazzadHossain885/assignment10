const mongoose = require("mongoose");

const WorkSchema = mongoose.Schema(
    {
        title: { type: String },
        classNote: { type: String },
        description: { type: String },
        status: { type: String },
        email: { type: String }
    },
    { timestamps: true, versionKey: false }
);

const WorkModel = mongoose.model("work", WorkSchema);

module.exports = WorkModel;