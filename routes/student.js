const express = require("express");
const myStudents = require("../models/Student");
const router = express.Router();

//save student information
router.post("/student/save", (req, res) => {
    let newPost = new myStudents(req.body);
    newPost.save((e) => {
        if (e) {
            return res.status(400).json({ error: e });
        }
        return res.status(200).json({ success: "Student save successful" });
    });
});

//get student
router.get("/student", (req, res) => {
    myStudents.find().exec((e, post) => {
        if (e) {
            return res.status(400).json({ Error: e });
        }
        return res.status(200).json({
            success: true,
            exsistingPost: post,
        });
    });
});
//get specific student data
router.get("/student/:id", (req, res) => {
    let postId = req.params.id;
    myStudents.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }
        return res.status(200).json({
            success: true,
            post,
        });
    });
});

//update student
router.put("/student/update/:id", (req, res) => {
    myStudents.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({ Error: err });
            }
            return res.status(200).json({ update: "update success" });
        }
    );
});

//delete student 
router.delete("/student/delete/:id", (req, res) => {
    myStudents.findByIdAndRemove(req.params.id).exec((err, deletePost) => {
        if (err) {
            return res.status(400).json({ Error: "Delete unsuccess", err });
        }
        return res.status(200).json({
            success: "delete success",
            deletePost,
        });
    });
});

module.exports = router;
