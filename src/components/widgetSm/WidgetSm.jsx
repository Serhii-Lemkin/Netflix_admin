import './widgetSm.css';
import { Visibility } from '@material-ui/icons';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get('users/admin/find-all?new=true', {
          headers: {
            authorization:
              'Bearer ' + JSON.parse(localStorage.getItem('user')).token,
          },
        });
        setNewUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user, i) => (
          <li className="widgetSmListItem" key={i}>
            <img
              src={user.profilePicture || 'https://i.pravatar.cc/300'}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
              <span className="widgetSmUserTitle">
                {' '}
                {new Date(Date.parse(user.createdAt)).toLocaleDateString()}
              </span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
