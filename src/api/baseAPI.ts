import Fetch from "../utils/fetch";
import config from "../config";

import { ObjectLiteral } from "../common/types";
import { showAlert } from "../utils/showAlert";

type requestData = {
  data?: ObjectLiteral;
  headers?: ObjectLiteral | null;
  withCredentials?: false;
};

const defaultHeaders = {
  "Content-type": "application/json",
};

function stringifyData(options: ObjectLiteral) {
  let data = options?.data;
  if (data && typeof data === "object") {
    data = JSON.stringify(data);
  }
  return data;
}

class BaseAPI {
  private _fetch: Fetch;
  private _baseURL: string;

  constructor() {
    this._fetch = new Fetch();
    this._baseURL = config.BASE_URL;
  }

  public post(path: string, options: requestData = {}): ObjectLiteral {
    const data = stringifyData(options);
    return this._fetch
      .post(`${this._baseURL}${path}`, {
        data,
        headers: defaultHeaders,
      })
      .then(this._parseResponse);
  }

  public get(path: string, options: requestData = {}): ObjectLiteral {
    const data = stringifyData(options);
    return this._fetch
      .get(`${this._baseURL}${path}`, {
        data,
        headers: defaultHeaders,
      })
      .then(this._parseResponse);
  }

  public put(
    path: string,
    options: requestData = { headers: null },
    stringifyFlag = true,
  ): ObjectLiteral {
    const { headers, ...rest } = options;
    const data = stringifyFlag ? stringifyData(rest) : options.data;

    return this._fetch
      .put(`${this._baseURL}${path}`, {
        data,
        headers: headers || defaultHeaders,
      })
      .then(this._parseResponse);
  }

  public delete(path: string, options: requestData = {}): ObjectLiteral {
    const data = stringifyData(options);
    return this._fetch
      .delete(`${this._baseURL}${path}`, {
        data,
        headers: defaultHeaders,
      })
      .then(this._parseResponse);
  }

  private _parseResponse(res: XMLHttpRequest) {
    if (res.response === "OK") {
      return {
        status: "success",
      };
    }
    try {
      const response = JSON.parse(res.response);
      return response;
    } catch (e) {
      showAlert({ message: `JSON parse error: ${e.message}`, variant: "error" });
    }
  }
}

export default BaseAPI;
