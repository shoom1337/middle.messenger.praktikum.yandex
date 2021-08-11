import Block from "../components/block";

export type ObjectLiteral = Record<string, any>;

export type PageProps = {
  components: Record<string, Block>;
  title: string;
  events?: {
    [key: string]: (event: Event) => void;
  };
};
