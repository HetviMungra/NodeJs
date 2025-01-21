const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const schema = require("../model/firestSchema");

passport.use(
  "local",
  new localStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      console.log("dfghjk");
      
      console.log(email,password);
      
      let admin = await schema.findOne({ email: email });
      if (admin) {
        if (admin.password == password) {
          return done(null, admin);
        } else {
          return done(null, false);
        }
      } else {
        return done(null, false);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (userId, done) => {
  let admin = await schema.findById(userId);
  done(null, admin);
});

passport.checkAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = passport;

// https://www.passportjs.org/  download : npm install passport-local   , npm i passport , npm i express-session
