import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <table className="table table-striped">
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Tony</span>{" "}
                        <span className="wd-last-name">Stark</span></td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td> </tr>
                        
                        <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Chris</span>{" "}
                        <span className="wd-last-name">Anun</span></td>
                        <td className="wd-login-id">12343222</td>
                        <td className="wd-section">S102</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-11-01</td>
                        <td className="wd-total-activity">10:25:32</td> </tr>

                        <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Eric</span>{" "}
                        <span className="wd-last-name">Kitagawa</span></td>
                        <td className="wd-login-id">00277788383</td>
                        <td className="wd-section">S999</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2024-10-07</td>
                        <td className="wd-total-activity">09:00:32</td> </tr>

                        <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Ashley</span>{" "}
                        <span className="wd-last-name">Davis</span></td>
                        <td className="wd-login-id">77788322</td>
                        <td className="wd-section">S002</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2026-10-01</td>
                        <td className="wd-total-activity">10:21:32</td> </tr>

                        <tr><td className="wd-full-name text-nowrap">
                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                        <span className="wd-first-name">Fred</span>{" "}
                        <span className="wd-last-name">Rogers</span></td>
                        <td className="wd-login-id">23129302</td>
                        <td className="wd-section">S920</td>
                        <td className="wd-role">TEACHER</td>
                        <td className="wd-last-activity">2010-10-01</td>
                        <td className="wd-total-activity">10:21:32</td> </tr>

                </tbody>
            </table>
        </div>
        );
}