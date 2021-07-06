import Layout from "../../../layout/gradient";
// import Avatar from "../../../components/avatar";
import Card from "../../../components/card";
import EditProfileForm from "../../../modules/profile/editForm";
import Button from "../../../components/button";
import PanelLink from "../../../components/panel-link/panel-link";

import "./edit.scss";

const avatarData = {
  data: {},
  className: "profile-avatar",
};

const cardData = {
  data: {
    content: EditProfileForm,
  },
  className: "profile-card",
  type: "no-header",
};

const buttonData = {
  data: {
    text: "Сохранить",
  },
  className: "profile-edit-btn",
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
