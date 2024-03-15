import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import Cookies from 'universal-cookie';
export const fetchUserProfile = async (access_token) => {
    if(!access_token){
        console.log("token null");
        return null;
      }
    const apiUrl = `https://www.googleapis.com/oauth2/v1/userinfo`;
    const config = {
    headers: {
      Authorization: `Bearer ${access_token}`,
      Accept: 'application/json',
    },
  };
    return axios.get(`${apiUrl}?access_token=${access_token}`, config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      console.error('Error fetching user profile:', error);
      throw error; // You can handle the error or rethrow it based on your requirements
    });
};

export const getUserInfo = async () =>{
  const cookies = new Cookies();
  const token = cookies.get("user_token");
  if (token) {
    const userProfile = await fetchUserProfile(token);
    return userProfile;
  }
  return null;
};