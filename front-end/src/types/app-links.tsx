import { IconType } from "react-icons";

export interface AppLinks {
    label: string;
    baseUrl: string;
    type: string; // @todo refactor this
    icon?: IconType;
}

export interface FooterLinks {
    label: string;
    links: AppLinks[];
}