import { Alert, AlertProps } from "../components/alert/alert";

export const showAlert = (props: AlertProps): void => {
  const alert = new Alert(props);

  document.body.append(alert.element);
  setTimeout(() => {
    alert.remove();
  }, 2000);
};
