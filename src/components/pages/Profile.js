import React from 'react';
import { Button } from 'antd';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';

function Profile() {
//   function signOut() {
//     signout()
//       .catch(err => console.log('error signing out: ', err))
//   }
  return (
    <div style={containerStyle}>
      <Button onClick={signOut}>Sign Out</Button>
    </div>
  );
}

const containerStyle = {
  width: 400,
  margin: '20px auto'
}

export default withAuthenticator(Profile);