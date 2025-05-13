import { AppLinks, FooterLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
    {
        label: "Accueil",
        baseUrl: "/",
        type: "internal"
    },
    {
        label: "Projets",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Coders monkeys",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Formations",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "external"
    },
];  

const footerUsersLinks: AppLinks[] = [
    {
        label: "Mon espace",
        baseUrl: "/mon-espace",
        type: "internal"
    },
    {
        label: "Connexion",
        baseUrl: "/connexion",
        type: "internal"
    },
    {
        label: "Inscription",
        baseUrl: "/connexion/inscription",
        type: "internal"
    },
    {
        label: "Mot de passe oublié",
        baseUrl: "/connexion/mot-de-passe-perdu",
        type: "internal"
    },
];  

const footerInformationsLinks: AppLinks[] = [
    {
        label: "CGO",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Confifentialité",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "A propos",
        baseUrl: "/#",
        type: "internal"
    },
    {
        label: "Contact",
        baseUrl: "/#",
        type: "external"
    },
];

export const footerSocialsNetworksLinks: AppLinks[] = [
    {
        label: "Youtube",
        baseUrl: "https://youtube.com/@remotemonkey",
        type: "external",
        icon: RiYoutubeFill,
    },
    {
        label: "LinkedIn",
        baseUrl: "/#",
        type: "external",
        icon: RiLinkedinFill,
    },
    {
        label: "Slack",
        baseUrl: "/#",
        type: "external",
        icon: RiSlackFill,
    },
];

export const footerLinks: FooterLinks[] = [
    {
        label: "App",
        links: footerApplicationLinks,
    },
    {
        label: "Utilisateurs",
        links: footerUsersLinks,
    },
    {
        label: "Informations",
        links: footerInformationsLinks,
    },
    {
        label: "Reseaux",
        links: footerSocialsNetworksLinks,
    },
];