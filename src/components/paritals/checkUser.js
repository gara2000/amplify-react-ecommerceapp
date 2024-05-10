import { fetchAuthSession } from "aws-amplify/auth";

async function checkUser(updateUser){
    const session = await fetchAuthSession()
        .catch(err=>console.log("error fetching session: ", err));
    console.log("checkUser.js : Session: ", session);
    if(!session.tokens){
        console.log("session: ", session);
        updateUser({});
        return;
    }
    const { tokens: {accessToken: {payload}}} = session;
    const isAuthorized = payload['cognito:groups'] &&
        payload['cognito:groups'].includes('Admin');
    updateUser({
        username: payload['cognito:username'],
        isAuthorized
    })
}

export default checkUser;