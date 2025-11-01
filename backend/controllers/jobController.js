import { Job } from "../models/jobModel.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirement,
      salary,
      location,
      experience,
      jobType,
      position,
      company,
      application,
    } = req.body;

    if (
      !title ||
      !description ||
      !requirement ||
      !salary ||
      !location ||
      !jobType ||
      !position ||
      !company ||
      !application ||
      !experience
    ) {
      return res.status(400).send({
        message: "Something is missing",
        success: false,
      });
    }

    const job = await Job.create({
      title,
      description,
      requirement,
      salary,
      location,
      jobType,
      position,
      company,
      application,
      experience,
      created_by: req.id,
    });

    res.status(200).send({
      message: "Job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query);
    if (!jobs || jobs.length === 0) {
      return res.status(400).send({
        message: "Jobs not found",
        success: false,
      });
    }
    return res.status(200).send({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getJobById = async (req, res) => {
  try {
    const id = req.params.id;
    const job = await Job.findById(id);
    if (!job) {
      return res.status(400).send({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).send({
      job,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId });
    if (!jobs || jobs.length === 0) {
      return res.status(400).send({
        message: "Jobs not found",
        success: false,
      });
    }
    return res.status(200).send({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
