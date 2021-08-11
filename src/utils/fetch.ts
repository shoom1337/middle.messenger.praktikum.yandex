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
    options: { data?: { [key: string]: string }; headers?: ObjectLiteral },
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
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.timeout = timeout;

      if (withCredentials) {
        console.log("creden");
        xhr.withCredentials = true;
      }

      Object.entries(headers).forEach(([header, value]) => {
        xhr.setRequestHeader(header, value);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      xhr.send(JSON.stringify(data));
    });
  };

  _queryStringify(data: { [key: string]: string | number }): string {
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
