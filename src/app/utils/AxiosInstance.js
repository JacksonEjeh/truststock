import axios from "axios";
import Store from "../redux/store";
import { logOut, refreshToken } from "../redux/slices/UserSlice";

// Initialize the Axios instance
const Api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true, // Ensures credentials (cookies) are sent with the request
});

Api.interceptors.request.use(
  (config) => {
    const state = Store.getState();
    const token = state.user.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response?.status === 401 || error.response?.status === 403) &&
      !originalRequest._retry
    ) {
      // Prevent retrying the request multiple times
      originalRequest._retry = true;

      try {
        const resultAction = await Store.dispatch(refreshToken());
        if(refreshToken.fulfilled.match(resultAction)){
          const newToken = resultAction.payload;

          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return Api(originalRequest); // Retry the request with the new token
        }

        // If the refresh token fails, log out the user
        Store.dispatch(logOut());
        window.location.replace('/sign-in');
        return Promise.reject(error);

      } catch (err) {
        alert('Your session has expired. Please sign in again.');
        Store.dispatch(logOut());
        window.location.replace('/sign-in');
        return Promise.reject(err); // Reject the request
      }
    }
    // If the error is not related to token expiration, reject the error
    return Promise.reject(error);
  }
);

export default Api;
