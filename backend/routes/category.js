const { Category } = require("../models/category");
const { Farm } = require("../models/farm");
const express = require("express");
const router = express.Router();

router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();

    if (!categoryList) {
        res.status(500).json({ success: false });
    }
    res.status(200).send(categoryList);
});

router.get(`/:id`, async (req, res) => {
    console.log(req.params.id)
    let category = await Category.find()
    let FarmCategory=[]
    category.map((a)=>{
        console.log(a.farm)
        if(a.farm==req.params.id){
            FarmCategory.push(a)
        }
    })
    console.log(FarmCategory)

    if (!category) {
        res.status(500).json({
            message: "The category with given ID was not found",
        });
    }
    res.status(200).send(FarmCategory);
});

router.post(`/`, async (req, res) => {
    const  farm = await Farm.findById(req.body.farm)
    if (!farm) {
        res.status(400).json({
            message: "Invalid Farm ",
        });
    }


    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
        color: req.body.color,
        farm:req.body.farm
    });
    category = await category.save();
    if (!category)
        return res.status(404).send("the category cannot be created!");

    res.send(category);
});

router.put("/:id", async (req, res) => {
    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            icon: req.body.icon,
            color: req.body.color,
        },
        { new: true }
    );

    if (!category)
        return res.status(400).send("the category cannot be created!");

    res.send(category);
});

router.delete(`/:id`, (req, res) => {
    Category.findByIdAndRemove(req.params.id)
        .then((category) => {
            if (category) {
                return res.status(200).json({
                    success: true,
                    message: "the category is deleted!",
                });
            } else {
                return res
                    .status(404)
                    .json({ success: false, message: "category not found" });
            }
        })
        .catch((err) => {
            return res.status(400).json({ success: false, error: err });
        });
});

module.exports = router;
