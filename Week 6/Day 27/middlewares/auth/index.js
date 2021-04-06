const passport = require("passport"); // Import passport
const localStrategy = require("passport-local").Strategy; // import Localtrategy
const bcrypt = require("bcrypt"); // Import bcrypt (excrypt and comparePassword)
const JWTstrategy = require("passport-jwt").Strategy; // Import JWT Strategy
const ExtractJWT = require("passport-jwt").ExtractJwt; // Import ExtractJWT
const { user } = require("../../models"); // import user model

exports.signup = async (req, res, next) => {
  passport.authenticate("signup", { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({
        message: " Internal server error",
        error: err,
      });
    }

    if (!user) {
      return res.status(401).json({
        status: "error",
        message: info.message,
      });
    }

    req.user = user;

    next();
  })(req, res, next);
};

// if user sign up
passport.use(
  "signup",
  new localStrategy(
    {
      usernameField: "email", // field for username from req.body.email
      passwordField: "password", // field for password from req.body.password
      passReqToCallback: true, // read other requests
    },
    async (req, email, password, done) => {
      try {
        // Create user
        let userSignUp = await user.create(req.body);

        return done(null, userSignUp, {
          message: "User can be created",
        });
      } catch (error) {
        return done(error, false, {
          message: "User can't be created",
        });
      }
    }
  )
);

// Sign In
exports.signin = async (req, res, next) => {
  passport.authenticate("signin", { session: false }, (err, user, info) => {
    if (err) {
      console.log(err)
      return res.status(500).json({
        message: " Internal server error",
        error: err,
      });
    }

    if (!user) {
      return res.status(401).json({
        status: "error",
        message: info.message,
      });
    }

    req.user = user;

    next();
  })(req, res, next);
};

// if user sign up
passport.use(
  "signin",
  new localStrategy(
    {
      usernameField: "email", // field for username from req.body.email
      passwordField: "password", // field for password from req.body.password
      passReqToCallback: true, // read other requests
    },
    async (req, email, password, done) => {
      try {
        // Create user
        let userSignIn = await user.findOne({email});


        if(!userSignIn){
          return done(null,false, {
            message: "Email not found"
          })
        }

        let validate = await bcrypt.compare(password, userSignIn.password);

        //if password is wrong


        if(!validate){
          return done(null,false, {
            message: "Wrong password"
          })
        }
        return done(null, userSignIn, {
          message: "User can sign in",
        });
      } catch (error) {
        return done(error, false, {
          message: "User can't sign in",
        });
      }
    }
  )
);
