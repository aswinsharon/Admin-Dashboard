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

export interface PlaceHolder {
  placeholder?: string | undefined;
}

export interface UserType {
  _id: string;
  username: string;
  email: string;
  password: string;
  img?: string;
  isActive: boolean;
  isAdmin: boolean;
  phone: string;
  address: string;
}

export type UsersArrayType = UserType[];
