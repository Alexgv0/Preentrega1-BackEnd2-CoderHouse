import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import * as services from "../src/authController.js";

const strategyConfig = {
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true,
};

const singup = async (req, email, password, done) => {
    try {
        const user = await services.getUserByEmail(email);
        if (user) {
            return done(null, false, { message: "This user already exists!" });
        }
        const newUser = await services.register(req.body);
        return done(null, newUser);
    } catch (error) {
        done(error.message);
    }
};

passport.serializeUser(user => {});

passport.deserializeUser(id => {});
