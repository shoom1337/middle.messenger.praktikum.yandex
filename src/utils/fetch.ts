enum METHODS {
  GET = "GET",
  PUT = "PUT",
  POST = "POST",
  DELETE = "DELETE",
}

type RequestOptions = {
  method?: METHODS;
  headers?: Record<string, string>
  timeout?: number
  data?: {[key:string]: string}
}

class Fetch {
  get = (url: string, options = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.GET });
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

  request = (
    url: string,
    options: RequestOptions,
  ): Promise<XMLHttpRequest> => {
    const { method = METHODS.GET, headers = {}, data, timeout = 5000 } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && !!data ? `${url}${this._queryStringify(data)}` : url);
      xhr.timeout = timeout;

      Object.entries(headers).forEach(([header, value]) => {
        xhr.setRequestHeader(header, value);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        console.log(data);
        xhr.send(JSON.stringify(data));
      }
    });
  };

  _queryStringify(data: {[key:string]: string | number}): string {
    const result = Object.entries(data).reduce(
      (acc, [key, value]) => (acc += `${key}=${value}&`),
      "?",
    );
    return result.substr(0, result.length - 1);
  }
}

export default Fetch;
