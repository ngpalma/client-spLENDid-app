import { ReactNode } from "react";

// Cards

export interface ImageData {
  img: string;
  title: string;
  main: boolean;
}

export interface QuiltedImageListProps {
  itemData: ImageData[];
}

export interface ProductCardProps {
  prodName: string;
  ownerName: string;
  pricePerDay: string;
  description: string;
  imgProd: ImageData[];
}

export interface Product {
  prodId: number;
  prodName: string;
  // modificar para poder hacer el cambio de moneda -> de string a number!!!!!
  pricePerDay: string;
  active: boolean;
  description: string;
}

export interface User {
  userId: string;
  userImg?: string;
  userName: string;
  products: Product[];
}

// Language
export type LanguageContextType = {
  language: string;
  changeLanguage: (lang: string) => void;
};

export type LanguageProviderProps = {
  children: ReactNode;
};

// Estado de Usuario
interface UserAddState {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
