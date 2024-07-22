const Career = require("../model/carrearModel");

// Create a new career entry
const createCareer = async (req, res) => {
  try {
    const { name, email, number, appliedPosition, description } = req.body;

    const newCareer = new Career({
      name,
      email,
      number,
      appliedPosition,
      description,
    });

    const savedCareer = await newCareer.save();

    res.status(201).json(savedCareer); // Changed status code to 201 Created
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all career entries
const getAllCareers = async (req, res) => {
  try {
    const careers = await Career.find().exec(); // Added .exec() to execute the query

    res.status(200).json(careers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single career entry by ID
const getCareerById = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id).exec(); // Added .exec() to execute the query

    if (!career) {
      return res.status(404).json({ message: 'Career entry not found' });
    }

    res.status(200).json(career);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a career entry by ID
const updateCareer = async (req, res) => {
  try {
    const { name, email, number, appliedPosition, description } = req.body;

    const updatedCareer = await Career.findByIdAndUpdate(
      req.params.id,
      { name, email, number, appliedPosition, description },
      { new: true }
    ).exec(); // Added .exec() to execute the query

    if (!updatedCareer) {
      return res.status(404).json({ message: 'Career entry not found' });
    }

    res.status(200).json(updatedCareer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a career entry by ID
const deleteCareer = async (req, res) => {
  try {
    const deletedCareer = await Career.findByIdAndDelete(req.params.id).exec(); // Added .exec() to execute the query

    if (!deletedCareer) {
      return res.status(404).json({ message: 'Career entry not found' });
    }

    res.status(200).json({ message: 'Career entry deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCareer,
  getAllCareers,
  getCareerById,
  updateCareer,
  deleteCareer,
};
