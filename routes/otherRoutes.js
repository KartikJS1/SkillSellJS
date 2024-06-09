import express from "express";
import { isAuthenticated } from "../middlewares/auth.js"
import { contact, courseRequest, getDashboardStats } from "../controllers/otherControllers.js";


const router = express.Router();

// Contact Form 
router.route("/contact").post(contact);


// Request Form 
router.route("/courserequest").post(courseRequest);

// Dashboard Stats
router.route("/dashboardstats").get(getDashboardStats);


export default router;