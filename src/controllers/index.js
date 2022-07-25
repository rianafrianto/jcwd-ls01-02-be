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
  getProductStockController,
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
  editAddressController,
  getAllAddressesController,
  getPrimaryAddressController,
} = require("./profileControllers");
const {
  fetchProvincesController,
  fetchCitiesController,
  fetchCostController,
} = require("./rajaOngkirController");
const {
  getPrimaryAddressController,
  getAllAddressesController,
  addToCartController,
  getCartController,
  editQuantityonCartController,
  deleteProductCartController,
  uploadReceipeController,
  rejectOrderController,
  confirmOrderController,
  getUserOrdersController,
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
  addToCartController,
  getCartController,
  editQuantityonCartController,
  deleteProductCartController,
  updateProfile,
  getUserDetails,
  uploadReceipeController,
  fetchProvincesController,
  fetchCitiesController,
  addNewAddressController,
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
<<<<<<< HEAD
  getProductStockController,
  getUserOrdersController,
=======
  editAddressController,
  getAllAddressesController,
  getPrimaryAddressController,
>>>>>>> 857df14ed78eca14f7717a33af4a20ea8badb0e4
};
