import express from "express";
import cors from "cors";
import "dotenv/config";
import session from "express-session";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:5173",
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "none",
    secure: true
  },
  proxy: true
};

app.set("trust proxy", 1);

app.use(session(sessionOptions));

app.use(express.json());

// Kambaz
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
EnrollmentRoutes(app);
AssignmentRoutes(app);

Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);
