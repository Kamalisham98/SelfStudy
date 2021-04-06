const jwt = require("jsonwebtoken");

class AuthController {
  async getToken(req, res) {
    try {
      // Get the req.user from passport auth
      const body = {
        user: { id: req.user._id },
      };
      // Create jwt token
      const token = jwt.sign(body, process.env.JWT_SECRET);

      return res.status(200).json({
        message: "Success",
        token,
      });
    } catch (error) {
      return res.status(500).json({
        message: "internal server error",
      });
    }
  }
}

module.exports = new AuthController();
