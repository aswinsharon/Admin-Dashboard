import { ReactNode } from "react";
import { RelativeRoutingType } from "react-router-dom";

export interface childType {
  children?: ReactNode;
}
export interface MenuItemType {
  title: string;
  list: Array<{
    title: string;
    path: RelativeRoutingType;
    icon: ReactNode;
  }>;
}
export interface MenuLinkItemType {
  item: {
    path: RelativeRoutingType;
    icon: ReactNode;
    title: string;
  };
}
