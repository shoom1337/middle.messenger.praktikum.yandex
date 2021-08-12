enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

type RequestOptions = {
  method?: METHODS;
  headers?: Record<string, string>;
  timeout?: number;
  data?: { [key: string]: string };
  withCredentials?: boolean;
};

import { ObjectLiteral } from "../common/types";

class Fetch {
  get = (
    url: string,
    options: { data?: ObjectLiteral; headers?: ObjectLiteral },
  ): Promise<XMLHttpRequest> => {
    return this.request(`${url}${this._queryStringify(options.data)}`, {
      ...options,
      method: METHODS.GET,
    });
  };

  post = (url: string, options = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put = (url: string, options = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (url: string, options = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (url: string, options: RequestOptions): Promise<XMLHttpRequest> => {
    const {
      method = METHODS.GET,
      headers = {},
      data,
      timeout = 5000,
      withCredentials = false,
    } = options;

    return new Promise((resolve, reject) => {
      //@ts-ignore
      const xhr = new window.XMLHttpRequest();

      xhr.open(method, url);
      xhr.timeout = timeout;

      if (withCredentials) {
        xhr.withCredentials = true;
      }

      Object.entries(headers).forEach(([header, value]) => {
        xhr.setRequestHeader(header, value);
      });

      xhr.onload = () => {
        if (xhr.status >= 300) {
          reject(xhr);
        } else {
          resolve(xhr);
        }
      };

      xhr.onabort = () => reject(xhr);
      xhr.onerror = () => reject(xhr);
      xhr.ontimeout = () => reject(xhr);

      xhr.send(JSON.stringify(data));
    });
  };

  _queryStringify(data: ObjectLiteral | undefined): string {
    if (!data) {
      return "";
    }
    const result = Object.entries(data).reduce(
      (acc, [key, value]) => (acc += `${key}=${value}&`),
      "?",
    );
    return result.substr(0, result.length - 1);
  }
}

export default Fetch;
