enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}
const ACCEPTED_DELTA = 1000;
const ACCEPTED_COUNT = 5;

type RequestOptions = {
  method?: METHODS;
  headers?: Record<string, string>;
  timeout?: number;
  data?: { [key: string]: string };
  withCredentials?: boolean;
};

import { ObjectLiteral } from "../common/types";
import { showAlert } from "./showAlert";

class Fetch {
  static __instance: Fetch;
  private __lastRequestTime: Date | number = 0;
  private __requestCounter = 0;

  constructor() {
    if (Fetch.__instance) {
      return Fetch.__instance;
    }

    Fetch.__instance = this;
  }
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
      const currentTime = new Date();
      const delta = Number(currentTime) - Number(this.__lastRequestTime);
      const isFrequently = delta < ACCEPTED_DELTA;
      const isCountDanger = this.__requestCounter >= ACCEPTED_COUNT;

      if (isFrequently && isCountDanger) {
        showAlert({
          message: "DOS?",
          variant: "error",
        });
        this.__requestCounter++;
        return;
      } else {
        this.__lastRequestTime = currentTime;
        this.__requestCounter = 0;
      }
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
      //@ts-ignore
      xhr.send(data);
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
