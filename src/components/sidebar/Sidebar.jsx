import './sidebar.css';
import { LineStyle, PermIdentity, PlayArrow } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/content" className="link">
              <li className="sidebarListItem">
                <PlayArrow className="sidebarIcon" />
                Content
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
