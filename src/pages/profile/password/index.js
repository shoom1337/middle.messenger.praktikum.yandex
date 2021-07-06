import Layout from "../../../layout/gradient";
// import Avatar from "../../../components/avatar";
import Card from "../../../components/card";
import EditPasswordFrom from "../../../modules/profile/passwordForm";
import Button from "../../../components/button";
import PanelLink from "../../../components/panel-link/panel-link";

import "./password.scss";

const avatarData = {
  data: {},
  className: "password-avatar",
};

const cardData = {
  data: {
    content: EditPasswordFrom,
  },
  className: "password-card",
  type: "no-header",
};

const buttonData = {
  data: {
    text: "Сохранить",
  },
  className: "password-edit-btn",
};

const panelLinkData = {
  data: {
    href: "/",
  },
  className: "profile-back-link",
};

const layoutData = {
  data: {
    title: "test",
    content:
      // new Avatar(avatarData).render() +
      new Card(cardData).render() +
      new Button(buttonData).render() +
      new PanelLink(panelLinkData).render(),
  },
  className: "layout",
  title: "Логин",
};

const page = new Layout(layoutData);

export default page;
