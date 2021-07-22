import { ctxProps } from "../utils/templator";

export type BaseComponentProps = {
  data: ctxProps,
  tmpl: string,
  tagName?: string
};

export type ErrorProps = {
  data: {
    message: string,
    status: number
  }
};

export type LinkProps = {
  data: {
    href: string,
    text: string
  },
  tagName: string
};

export type PanelLinkProps = {
  data: {
    href: string
  }
};

export type LayoutProps = {
  data: {
    content: string
  }
};

export type CardProps = {
  data: {
    content: string,
    title?: string
  }
};

export type ButtonProps = {
  data: {
    text: string
  }
};
