const {
  registerController,
  keepLoginController,
  emailVerificationController,
  verificationController,
  loginController,
  forgotPasswordController,
  tokenPasswordController,
  changePassword,
  profilePictureController,
  resetPasswordController,
} = require("./authController");
const {
  loginAdminController,
  filterProductsController,
  getOrdersController,
  validPrescriptionController,
  getProductsController,
  newProductController,
  getProductDetailsController,
  editProductController,
  deleteProductController,
  getReportController,
  addStockController,
  getNameController,
} = require("./adminController");
const {
  fetchProductsController,
  fetchProductDetailsController,
  fetchPromoProductsController,
  filterProductController,
} = require("./productController");

const {
  updateProfile,
  getUserDetails,
  addNewAddressController,
  changePrimaryAddressController,
} = require("./profileControllers");
const {
  fetchProvincesController,
  fetchCitiesController,
  fetchCostController,
} = require("./rajaOngkirController");
const {
  getPrimaryAddressController,
  getAllAddressesController,
  uploadReceipeController,
  rejectOrderController,
  confirmOrderController,
} = require("./transactionController");

module.exports = {
  newProductController,
  registerController,
  keepLoginController,
  emailVerificationController,
  verificationController,
  loginAdminController,
  loginController,
  forgotPasswordController,
  tokenPasswordController,
  changePassword,
  fetchProductsController,
  fetchProductDetailsController,
  profilePictureController,
  filterProductController,
  resetPasswordController,
  fetchPromoProductsController,
  updateProfile,
  getUserDetails,
  uploadReceipeController,
  fetchProvincesController,
  fetchCitiesController,
  addNewAddressController,
  getPrimaryAddressController,
  getAllAddressesController,
  changePrimaryAddressController,
  rejectOrderController,
  confirmOrderController,
  fetchCostController,
  filterProductsController,
  getOrdersController,
  validPrescriptionController,
  getProductsController,
  deleteProductController,
  getProductDetailsController,
  editProductController,
  getReportController,
  getNameController,
  addStockController,
};
