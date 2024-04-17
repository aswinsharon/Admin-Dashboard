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
export interface UserFormResponse {
  username: string;
  email: string;
  password: string;
  img?: string;
  isActive: string;
  isAdmin: string;
  phone: string;
  address: string;
}

export type UsersArrayType = UserType[];

export interface AuthContextType {
  auth: Record<string, any>; // Adjust the type based on your auth object structure
  setAuth: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

export type LoginData = {
  username: string;
  password: string;
}
