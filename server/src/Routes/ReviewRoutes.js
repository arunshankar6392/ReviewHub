const express = require("express");
const ReviewSchema = require("../models/ReviewSchema");
const UserSchema = require("../models/UserSchema");
const ReviewRouter = express.Router();
const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) => {
	const token = req.headers.authorization;
	if(token){
		jwt.verify(token,"jwtSecretHueHue",(err) => {
		if(err)return res.sendStatus(403);
		next();
		});
	} else {
    alert("Login First")                
		res.sendStatus(401);
	}	
};

ReviewRouter.get("/", async (req, res) => {
  try {
    const response = await ReviewSchema.find({});
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

ReviewRouter.post("/", verifyToken ,async (req, res) => {
  const review = new ReviewSchema(req.body);
  console.log(review);
  try {
    const response = await review.save();
    res.json({ message: "Review Added Successfully" });
  } catch (error) {
    res.json(error);
  }
});

ReviewRouter.put("/", verifyToken , async (req, res) => {
  try {
    const review = await ReviewSchema.findById(req.body.reviewID);
    const user = await UserSchema.findById(req.body.userID);
    user.savedReviews.push(review);
    const response = await user.save();
    res.json({ savedReviews: user.savedReviews });
  } catch (error) {
    res.json(error);
  }
});

ReviewRouter.get(`/savedReviews/ids/:userID`, async (req, res) => {
    try {
      const user = await UserSchema.findById(req.params.userID);
      res.json({ savedReviews: user?.savedReviews });
    } catch (err) {
      res.json(err);
    }
  });

ReviewRouter.get("/savedReviews/:userID", async (req, res) => {
  try {
    const user = await UserSchema.findById(req.params.userID);
    const savedReviews = await ReviewSchema.find({
      _id: { $in: user.savedReviews },
    });
    res.json({ savedReviews });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

ReviewRouter.get("/:reviewID", async (req, res) => {
  try {
    const reviewID = req.params.reviewID;
    const review = await ReviewSchema.findById(reviewID);
    
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    res.json(review);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});



module.exports = ReviewRouter;