import Layout from "../../../layout/gradient";
import Avatar from "../../../components/avatar";
import Card from "../../../components/card-no-header";
import EditPasswordFrom from "../../../modules/profile/passwordForm";
import Button from "../../../components/button";
import PanelLink from "../../../components/panel-link/panel-link";

const cardData = {
  data: {
    content: EditPasswordFrom,
  },
};

const buttonData = {
  data: {
    text: "Сохранить",
  },
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
      new Avatar().content +
      new Card(cardData).content +
      new Button(buttonData).content +
      new PanelLink(panelLinkData).render(),
  },
  className: "layout",
  title: "Логин",
};

const page = new Layout(layoutData);

export default page;
