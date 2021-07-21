import Layout from "../../../layout/gradient";
import Avatar from "../../../components/avatar";
import Card from "../../../components/card-no-header";
import EditAvatarForm from "../../../modules/profile/avatarForm";
import Button from "../../../components/button";
import PanelLink from "../../../components/panel-link/panel-link";

import { CardProps } from "../../../common/types";
import { ButtonProps } from "../../../common/types";
import { PanelLinkProps } from "../../../common/types";
import { LayoutProps } from "../../../common/types";

const cardData: CardProps = {
  data: {
    content: EditAvatarForm,
  },
};

const buttonData: ButtonProps = {
  data: {
    text: "Сохранить",
  },
};

const panelLinkData: PanelLinkProps = {
  data: {
    href: "/",
  },
};

const layoutData: LayoutProps = {
  data: {
    content:
      new Avatar().content +
      new Card(cardData).content +
      new Button(buttonData).content +
      new PanelLink(panelLinkData).content,
  },
};

const page = new Layout(layoutData);

export default page;
