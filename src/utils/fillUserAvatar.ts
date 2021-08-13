import Block from "../components/block";
import config from "../config";

export default function (fileName: string, avatar: Block): void {
  if (fileName && avatar) {
    avatar.setProps({
      src: `${config.BASE_URL}/resources${fileName}`,
    });
  }
}
