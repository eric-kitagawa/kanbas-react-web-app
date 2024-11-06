import { Link, useParams, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const { cid } = useParams();
  console.log("courseId:", cid);
  const location = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map(link => (
        <Link
          to={`/Kanbas/Courses/${cid}/${link}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          className= {`list-group-item text-danger border border-0 ${location.pathname.includes(link) ? 'active' : 'text-danger'}`}
          >
            {link}
          </Link>
      ))}
    </div>
  );
}