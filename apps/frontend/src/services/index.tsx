import axios, { AxiosResponse } from "axios";

const controllers: { [key: string]: AbortController } = {};

const Services = (headers: object, url?: string) => {
  /**
   * Axios
   **/
  const instance = axios.create({
    baseURL: url,
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": url,
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  });

  const createAbortController = (id = "service") => {
    if (controllers[id]) {
      controllers[id].abort();
    }

    controllers[id] = new AbortController();
    return controllers[id].signal;
  };

  return {
    post: async (
      url: string,
      payload?: object,
      id?: string
    ): Promise<AxiosResponse<any, any>> => {
      const signal = createAbortController(id);

      return await instance
        .post(url, JSON.stringify(payload), { signal })
        .catch(({ response } = {}) => {
          if (response) {
            const { message } = response.data;
            const status = response.status;

            return {
              message,
              status,
            };
          }

          return response;
        });
    },
    put: async (
      url: string,
      payload?: object,
      id?: string
    ): Promise<AxiosResponse<any, any>> => {
      const signal = createAbortController(id);

      return await instance
        .put(url, JSON.stringify(payload), { signal })
        .catch(({ response } = {}) => {
          if (response) {
            const { message } = response.data;
            const status = response.status;

            return {
              message,
              status,
            };
          }

          return response;
        });
    },
    get: async (url: string, id?: string): Promise<AxiosResponse<any, any>> => {
      const signal = createAbortController(id);

      return await instance.get(url, { signal }).catch(({ response } = {}) => {
        if (response) {
          const { message } = response.data;
          const status = response.status;

          return {
            message,
            status,
          };
        }
        return response;
      });
    },
  };
};
export default Services;
