import { Navigate, Route, Routes, useParams } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import { courses } from "../Database";

export default function Courses() {
  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const course = courses.find((course) => course._id === cid);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}
      </h2>

      <nav>
        <ul>
          {links.map((link) => {
            const path = createPath(link);
            const isActive = location.pathname === path;

            return (
              <li key={link}>
                <Link
                  to={path}
                  className={isActive ? "active" : ""}
                  style={{
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: isActive ? "underline" : "none",
                  }}
                >
                  {link}
                </Link>
              </li>
            );
          }
          )
          }
        </ul>
      </nav>
    </div>
  );
}
