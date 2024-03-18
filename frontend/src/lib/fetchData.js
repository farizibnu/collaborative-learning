import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import Cookies from 'universal-cookie';
import { VITE_BACKEND_URL, VITE_BACKEND_CTB_URL } from './env';
export const getGoogleUserProfile = async () => {
    const token = await getUserToken();
    if(!token){
        console.log("token null");
        return null;
    }
    const apiUrl = `https://www.googleapis.com/oauth2/v1/userinfo`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    };
    return axios.get(`${apiUrl}?access_token=${token}`, config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      //set cookies email
      const cookies = new Cookies();
      cookies.set('email', response.data.email, { path: '/', maxAge: 3600 });
      return response.data;
    })
    .catch((error) => {
      console.error('Error fetching user profile:', error);
      throw error; // You can handle the error or rethrow it based on your requirements
    });
};

export async function loginMahasiswa(loginData){
  const token = await getUserToken();
  axios.post(`${VITE_BACKEND_URL}/oauth/mahasiswa`,loginData,{
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  })
  .then((response)=>{
    console.log("login success");
    const data = {...response.data,ok:true};
    return data;
  })
  .catch((err_res)=>{
    console.log("login failed");
    console.log(JSON.stringify(err_res.response));
    return {ok : false};
  })
}

// Define a function to fetch user profile
export async function getDataDashboard(endpoint) {
  const apiUrl = VITE_BACKEND_URL + endpoint;
  const token = await getUserToken();
  if(!token){
    console.log("token null");
    return null;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  };
    const result = axios.get(apiUrl, config)
    .then((res)=>{
      console.log("mahasiswa : ",JSON.stringify(res.data));
      return res.data;
    })
    .catch((err)=>{
      console.error('Error fetching data:', err);
      return null;
    })
    return result;
}
export async function postDataDashboard(endpoint,data) {
  const apiUrl = VITE_BACKEND_URL + endpoint;
  const token = await getUserToken();
  if(!data){
    console.log("data to send empty");
    return null;
  }
  if(!token){
        console.log("token null");
        return null;
    }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  };
  try {
    const response = await axios.post(apiUrl,data,config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export async function getDataCTB(endpoint) {
  const apiUrl = VITE_BACKEND_CTB_URL + endpoint;
  const token = await getUserToken();
  if(!token){
    console.log("token null");
    return null;
  }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  };
  try {
    const response = await axios.get(apiUrl, config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
export async function postDataCTB(endpoint,data) {
  const apiUrl = VITE_BACKEND_CTB_URL + endpoint;
  const token = await getUserToken();
  if(!data){
    console.log("data to send empty");
    return null;
  }
  if(!token){
        console.log("token null");
        return null;
    }
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  };
  try {
    const response = await axios.post(apiUrl,data,config);
    console.log(JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

export const getUserToken = async () =>{
  const cookies = new Cookies();
  const token = await cookies.get("user_token");
  if(!token)
    return "";
  return token;
}
export const getUserInfo = async () =>{
  const token = await getUserToken();
  if (token) {
    const userProfile = await getGoogleUserProfile(token);
    return userProfile;
  }
  return null;
};