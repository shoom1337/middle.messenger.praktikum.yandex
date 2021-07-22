const linksData = [
  {
    data: {
      href: "/login",
      text: "Логин",
    },
  },
  {
    data: {
      href: "/register",
      text: "Регистрация",
    },
  },
  {
    data: {
      href: "/404",
      text: "404",
    },
  },
  {
    data: {
      href: "/500",
      text: "500",
    },
  },
  {
    data: {
      href: "/edit",
      text: "Редактирование профиля",
    },
  },
  {
    data: {
      href: "/password",
      text: "Смена пароля",
    },
  },
  {
    data: {
      href: "/avatar",
      text: "Смена аватара",
    },
  },
];

const el = document.createElement("div");
el.innerText = "chat page";

document.getElementById("root")?.appendChild(el);
