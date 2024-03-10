import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
export const fetchUserProfile = (user) => {
    if(!user){
        console.log("user null");
        return null;
      }
    const apiUrl = `https://www.googleapis.com/oauth2/v1/userinfo`;
    const config = {
    headers: {
      Authorization: `Bearer ${user.access_token}`,
      Accept: 'application/json',
    },
  };
    console.log("here")
    return axios.get(`${apiUrl}?access_token=${user.access_token}`, config)
    .then((response) => response.data)
    .catch((error) => {
      console.error('Error fetching user profile:', error);
      throw error; // You can handle the error or rethrow it based on your requirements
    });
};