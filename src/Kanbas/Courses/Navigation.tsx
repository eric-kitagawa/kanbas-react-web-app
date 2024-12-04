import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const location = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const path = `/Kanbas/Courses/${cid}/${link}`;

        const isActive = location.pathname.startsWith(
          `/Kanbas/Courses/${cid}/Assignments`
        )
          ? link === "Assignments"
          : location.pathname === path;

        return (
          <Link
            key={link}
            to={path}
            className={`list-group-item border-0 ${
              isActive ? "text-black active" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}