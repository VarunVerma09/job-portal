import {Company} from "../models/companyModel.js";

export const registerCompany = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send({
        massege: "Company name is required",
        success: false,
      });
    }
    let company = await Company.findOne({ name: name });
    if (company) {
      return res.status(404).send({
        massege: "Company already exist",
        success: false,
      });
    }
    company = await Company.create({
      name: name,
      success: true,
    });
    return res.status(200).send({
      massege: "Company Created Successfully",
      success: true,
      company,
    });
  } catch (error) {
    console.log(error);

    return res.status(404).send({
      massege: "Error in Company registration",
      success: false,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.findOne({ userId });
    if (!companies) {
      return res.status(404).send({
        massege: "Company Not Found!",
        success: false,
      });
    }
  } catch (error) {
    console.log(error);

    return res.status(404).send({
      massege: "Error in Company registration",
      success: false,
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).send({
        massege: "Company Not Found!",
        success: false,
      });
    }
    return res.status(200).send({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(404).send({
      massege: "Error in Company registration",
      success: false,
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    const updateData = { name, description, website, location };
    const company = await Company.findByIdUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res.status(404).send({
        massege: "Company Not Foud!",
        success: false,
      });
    }
    return res.status(200).send({
      massege: "information Updated",
      success: true,
    });
  } catch (error) {
    console.log(error);

    return res.status(404).send({
      massege: "Error in Company registration",
      success: false,
    });
  }
};
