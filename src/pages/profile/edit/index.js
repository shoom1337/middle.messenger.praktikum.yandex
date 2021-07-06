import Layout from "../../../layout/gradient";
import Avatar from "../../../components/avatar";
import Card from "../../../components/card-no-header";
import EditProfileForm from "../../../modules/profile/editForm";
import Button from "../../../components/button";
import PanelLink from "../../../components/panel-link/panel-link";

const cardData = {
  data: {
    content: EditProfileForm,
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
};

const layoutData = {
  data: {
    title: "test",
    content:
      new Avatar().content +
      new Card(cardData).content +
      new Button(buttonData).content +
      new PanelLink(panelLinkData).content,
  },
};

const page = new Layout(layoutData);

export default page;
