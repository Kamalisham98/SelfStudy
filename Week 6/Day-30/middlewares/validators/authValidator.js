const validator  = require("validator");

exports.signup = async (req, res, next)=> {
    let errors = [];

    // check req.body.email is email
    if  (!validator.isEmail(req.body.email)) {
        errors.push("Email field must be a valid email");
   }

   // bisa tambah validasi nama juga pake isAlpha

   // check whether password is strong
   if (!validator.isStrongPassword(req.body.password)) {
       errors.push(
           "Password must have a minimum length of 8 characters, 1 lower case, 1 upper case 1 number and 1 symbol"
       );
   }

   // check passwordConfirmation
   if (req.body.confirmPassword !== req.body.password) {
       errors.push("Password confirmation must be same as password");
   }

   // if errors length > 0, it will make error message
   if (errors.length > 0) {
       // because bad request
       return res.status(400).json({
           message: errors.join(", "),
       });
   }

   next();
}

exports.signin = async (req, res, next)=> {
    let errors = [];

    // check req.body.email is email
    if  (!validator.isEmail(req.body.email)) {
        errors.push("Email field must be a valid email");
   }

   // if errors length > 0, it will make error message
   if (errors.length > 0) {
       // because bad request
       return res.status(400).json({
           message: errors.join(", "),
       });
   }

   next();
}