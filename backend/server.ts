require("dotenv").config();

import express from "express";
import mongoose, { connect } from "mongoose";
import cors from "cors";
import session from "express-session";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";
import passport from "passport";
import passportLocal from "passport-local";
import flash from "connect-flash";

const User = require("./models/User");
import { UserInterface, DatabaseUserInterface } from "./utils/Interfaces";
const LocalStrategy = passportLocal.Strategy;

const app = express();

declare var process: {
  env: {
    [key: string]: string;
  };
};

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Successfully connected to the database`))
  .catch((error) => {
    console.error(`An error ocurred trying to connect to the database`, error);
  });

const complaintRouter = require("./routes/complaints.routes");
const userRouter = require("./routes/user.routes");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  res.locals.sessionUser = req.user;
  next();
});

passport.use(
  new LocalStrategy((username: string, password: string, done) => {
    User.findOne(
      { username: username },
      (err: Error, user: DatabaseUserInterface) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result: boolean) => {
          if (err) throw err;
          if (result) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      }
    );
  })
);

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

passport.deserializeUser((id: string, done) => {
  User.findOne({ _id: id }, (err: Error, user: DatabaseUserInterface) => {
    const userInformation: UserInterface = {
      username: user.username,
      password: user.password,
      id: user._id,
    };
    done(err, userInformation);
  });
});

app.use("/api/complaint", complaintRouter);
app.use("/api/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on http://localhost:${process.env.PORT}`);
});

module.exports = app;
