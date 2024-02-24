import { CSSProperties } from "react";

export interface IButton {
  pathName?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
  onClick?: () => void;
}
