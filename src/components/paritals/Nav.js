import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, UserOutlined, ProfileOutlined } from '@ant-design/icons';
import { Hub } from 'aws-amplify/utils';
import checkUser from './checkUser';

const Nav = (props) => {
  const { current } = props;
  const [user, updateUser] = useState({});
  useEffect(() => {
    checkUser(updateUser);
    Hub.listen('auth', (data) => {
      const { payload: { event } } = data;
      console.log('event: ', event);
      if (event === 'signIn' || event === 'signOut') checkUser(updateUser);
    });
  }, []);

  return (
    <div>
      <Menu selectedKeys={[current]} mode="horizontal">
        <Menu.Item key='home'>
          <Link to={`/`}>
            <HomeOutlined />Home
          </Link>
        </Menu.Item>
        <Menu.Item key='profile'>
          <Link to='/profile'>
            <UserOutlined />Profile
          </Link>
        </Menu.Item>
        {
          user.isAuthorized && (
            <Menu.Item key='admin'>
              <Link to='/admin'>
                <ProfileOutlined />Admin
              </Link>
            </Menu.Item>
          )
        }
      </Menu>

      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Nav;
