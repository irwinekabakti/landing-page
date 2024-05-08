import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaTwitter, FaThreads } from "react-icons/fa6";

// FOOTER SECTION
interface Link {
  id: number;
  name: string;
  url: string;
}

interface FooterLink {
  id: number;
  title: string;
  links: Link[];
}

export const FOOTER_LINKS: FooterLink[] = [
  {
    id: 1,
    title: "Learn More",
    links: [
      { id: 1, name: "About Hilink", url: "/about" },
      { id: 2, name: "Press Releases", url: "/" },
      { id: 3, name: "Environment", url: "/OurTeam" },
      { id: 4, name: "Jobs", url: "/" },
      { id: 5, name: "Privacy Policy", url: "/" },
      { id: 6, name: "Contact Us", url: "/contact" },
    ],
  },
  {
    id: 2,
    title: "Our Community",
    links: [
      { id: 1, name: "Climbing xixixi", url: "/" },
      { id: 2, name: "Hiking hilink", url: "/" },
      { id: 3, name: "Hilink kinthill", url: "/about" },
    ],
  },
];

interface ContactLink {
  id: number;
  label: string;
  type: "phone" | "mail";
  value: string;
}

interface ContactInfo {
  title: string;
  links: ContactLink[];
}

export const FOOTER_CONTACT_INFO: ContactInfo = {
  title: "Contact Us",
  links: [
    { id: 1, label: "Admin Officer", type: "phone", value: "+123-456-7890" },
    {
      id: 2,
      label: "Email Officer",
      type: "mail",
      value: "hilink@akinthil.com",
    },
  ],
};

interface SocialType {
  id: number;
  name: string;
  url: string;
  icon: IconType;
  color: string;
}

interface SocialsType {
  title: string;
  social: SocialType[];
}

export const SOCIALS: SocialsType = {
  title: "Social",
  social: [
    {
      id: 1,
      name: "Facebook",
      url: "https://www.facebook.com/",
      icon: FaFacebook,
      color: "text-blue-600",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://www.instagram.com/",
      icon: FaInstagram,
      color: "text-pink-600",
    },
    {
      id: 3,
      name: "Twitter",
      url: "https://twitter.com/",
      icon: FaTwitter,
      color: "text-gray-900",
    },
    {
      id: 4,
      name: "Threads",
      url: "https://www.threads.net/",
      icon: FaThreads,
      color: "text-[#333]",
    },
  ],
};
