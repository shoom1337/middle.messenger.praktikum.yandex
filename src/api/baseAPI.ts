import Fetch from "../utils/fetch";
import config from "../config";

import { ObjectLiteral } from "../common/types";

const defaultHeaders = {
  "Content-type": "application/json",
};

class BaseAPI {
  private _fetch: Fetch;
  private _baseURL: string;

  constructor() {
    this._fetch = new Fetch();
    this._baseURL = config.BASE_URL;
  }

  public post(path: string, options: ObjectLiteral): ObjectLiteral {
    return this._fetch
      .post(`${this._baseURL}${path}`, {
        ...options,
        headers: defaultHeaders,
      })
      .then(this._parseResponse);
  }

  public get(path: string, options?: ObjectLiteral): ObjectLiteral {
    return this._fetch
      .get(`${this._baseURL}${path}`, {
        ...options,
        headers: defaultHeaders,
      })
      .then(this._parseResponse);
  }

  public put(path: string, options: ObjectLiteral): ObjectLiteral {
    const { headers, ...rest } = options;

    return this._fetch
      .put(`${this._baseURL}${path}`, {
        ...rest,
        headers: headers || defaultHeaders,
      })
      .then(this._parseResponse);
  }

  private _parseResponse(res: XMLHttpRequest) {
    if (res.response === "OK") {
      return {
        status: "success",
      };
    }
    const response = JSON.parse(res.response);

    return response;
  }
}

export default BaseAPI;
