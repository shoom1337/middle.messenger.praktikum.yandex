import { showAlert } from "./showAlert";
import { router } from "../router";
export function errorHandler(error: XMLHttpRequest): void | Promise<any> {
  if (!error.response) {
    return router.go("/500");
  }
  const { reason } = JSON.parse(error.response);
  showAlert({ message: reason, variant: "error" });
  return Promise.reject(error);
}
