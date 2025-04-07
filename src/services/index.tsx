import { VITE_API_BFF_URL } from '@/config/env';
import { AUHT_NAME, ROUTES } from '@/constants';
import { getAuth, removeAuth } from '@/utils';
import axios from 'axios';

type ServicesType = 'POST' | 'GET' | 'PATCH' | 'DELETE';
interface ServicesRequest {
  method: ServicesType;
  url: string;
  payload?: any;
}

const controllers: { [key: string]: AbortController } = {};

const Services = ({ method, url, payload }: ServicesRequest) => {
  /**
   * BASE URL
   */

  const BASE_URL = VITE_API_BFF_URL;
  /**
   * GET TOKEN
   */

  const TOKEN = getAuth(AUHT_NAME) ? getAuth(AUHT_NAME) : '';
  /**
   * Controller
   **/

  const createAbortController = (id = 'service') => {
    if (controllers[id]) {
      controllers[id].abort();
    }

    controllers[id] = new AbortController();
    return controllers[id].signal;
  };
  /**
   * Axios
   **/

  const instance = axios.create({
    baseURL: BASE_URL,
    method,
    data: payload,
    url,
    signal: createAbortController(`service-${crypto.randomUUID()}`),
    headers: {
      'Access-Control-Allow-Origin': BASE_URL,
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',

      Authorization: `Bearer ${TOKEN}`,
      Accept: '*/*',
    },
  });
  /**
   * Interceptors
   **/

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      // console.log('Response', response);
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        removeAuth(AUHT_NAME);
        window.location.href = ROUTES.HOME_B2C;
      }
      console.error('Error response', error);
      return Promise.reject(error);
    },
  );
  /**
   * Request
   **/

  return instance.request({
    method,
    url,
    data: payload,
  });
};

export default Services;
