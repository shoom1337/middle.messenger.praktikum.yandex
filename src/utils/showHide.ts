const HIDDEN_CLASS = "hidden";

export default function (rootId: string, show: boolean): void {
  if (!rootId) {
    return;
  }
  const root = document.getElementById(rootId);
  if (!root) {
    return;
  }
  if (show) {
    root.classList.remove(HIDDEN_CLASS);
  } else {
    root.classList.add(HIDDEN_CLASS);
  }
}
