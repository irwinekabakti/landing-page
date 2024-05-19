import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaTwitter, FaThreads } from "react-icons/fa6";

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
      { id: 3, name: "Our Team", url: "/OurTeam" },
      { id: 4, name: "Jobs", url: "/" },
      { id: 5, name: "Privacy Policy", url: "/" },
      { id: 6, name: "Contact Us", url: "/" },
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

interface Question {
  id: number;
  question: string;
  answer: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "What types of cases does your law firm handle?",
    answer:
      "Our law firm handles a variety of cases including but not limited to personal injury, family law, criminal defense, and corporate law. We have specialists in each field to provide expert legal advice and representation.",
  },
  {
    id: 2,
    question: "How will I be kept informed about my case?",
    answer:
      "Your case will be handled by one of our experienced attorneys, who will be your primary point of contact. Depending on the complexity of your case, a team of attorneys and paralegals may also be involved to ensure the best possible outcome.",
  },
  {
    id: 3,
    question: "How long will it take to resolve my case?",
    answer:
      "The duration of a case varies widely depending on its nature and complexity. Some cases can be resolved quickly through negotiation or settlement, while others, especially those that go to trial, may take several months or even years. We will provide a more specific timeline after reviewing the details of your case.",
  },
  {
    id: 4,
    question: "Is everything I share with my attorney confidential?",
    answer:
      "Yes, everything you share with your attorney is confidential. We are bound by attorney-client privilege, which means we cannot disclose any information you provide without your explicit consent, except under certain legal circumstances.",
  },
  {
    id: 5,
    question: "What should I bring to my initial consultation?",
    answer:
      "For your initial consultation, please bring any relevant documents related to your case, such as contracts, correspondence, court documents, and any other pertinent information. This will help us better understand your situation and provide accurate legal advice.",
  },
];

export const skills: string[] = [
  "Banking and Finance",
  "Capital Markets",
  "Commercial Contracts",
  "Compliance and Investigations",
  "Mega Projects and State Owned Enterprises",
  "Corporate and M&A",
  "Dispute Resolution and Litigation",
  "Employment",
  "Intellectual Property",
  "Technology & Data Protection",
  "Restructuring and Insolvency",
  "Government",
];
