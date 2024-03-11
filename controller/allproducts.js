//fetching model
const Product = require("../models/Products");

//create product controller
exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const response = await Product.create({ name, quantity });
    console.log(name, quantity);
    //send response
    return res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};

//get all products controller
exports.getAllproducts = async (req, res) => {
  try {
    const result = await Product.find({});
    res.status(200).json({
      success: true,
      data: result,
      message: "All products fetch successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};

//delete product controller
exports.deleteProduct = async (req, res) => {
  try {
    //get the id
    const { id } = req.params;
    //delete the product from DB
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: " Product deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};

//update product controller
exports.updateProduct = async (req, res) => {
  try {
    //get the id
    const { id } = req.params;
    const { name, quantity } = req.body;
    const result = await Product.findByIdAndUpdate(
      { _id: id },
      { name, quantity, updatedAt: Date.now() },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: result,
      message: " Product updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};

//get a particular product controller
exports.getProduct = async (req, res) => {
  try {
    const { p_id } = req.params;
    const product = await Product.findById({ _id: p_id });
    if (!product) {
      return res.status(401).json({
        success: false,
        message: "product not found",
      });
    }
    res.status(401).json({
      success: true,
      data: product,
      message: "product fetched ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
