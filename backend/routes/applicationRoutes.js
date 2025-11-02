import express from "express"
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyJob, getApplicants, getApplyJob, updateStatus } from "../controllers/applicationController.js";

const router = express.Router();

router.get("/apply/:id",isAuthenticated,applyJob);
router.get("/get",isAuthenticated,getApplyJob);
router.get("/:id/applicants",isAuthenticated,getApplicants);
router.put("/status/:id/update",isAuthenticated,updateStatus)


export default router;
