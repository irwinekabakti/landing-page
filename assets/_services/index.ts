import { nanoid } from "nanoid";
import { StaticImageData } from "next/image";
export interface ServiceDataProps {
  id: string;
  name: string;
  img: StaticImageData;
  route: string;
  overview: string[];
  description: string;
  ground?: {
    title: string;
    items: string[];
  };
  explanation?: string;
}

import Banking from "./banking.webp";
import Capital from "./capital_market.webp";
import Commercial from "./commercial.webp";
import Compliance from "./compliance.webp";
import Construction from "./construction.webp";
import Corporate from "./corporate.webp";
import Dispute from "./dispute.webp";
import Employment from "./employment.webp";
import RealEstate from "./real_estate.webp";
import Technology from "./technology.webp";
import Restructuring from "./restructuring.webp";
import Government from "./goverment.webp";

const serviceData: ServiceDataProps[] = [
  {
    id: nanoid(),
    name: "Banking and Finance",
    img: Banking,
    route: "banking-and-finance",
    overview: [
      "Our team is committed to working with our clients in raising financing or transacting in Indonesia. The team is effective in bringing solutions to borrowers and issuers. Our clients include financial institutions, SMEs, insurance companies, and private equity funds.",
    ],
    description:
      "With the increasing regulations and restrictions for lenders and borrowers alike, we position our firm in the midst of these challenges to construct solutions that vital and secured.",
    ground: {
      title: "Our on-the-ground team can cover:",
      items: [
        "Acquisition Finance",
        "Corporate Banking",
        "Trade Finance",
        "Debt Capital Markets",
        "Project Finance",
        "Structured Finance",
        "Securitization",
        "Financial Restructuring and Creditor Rights",
      ],
    },
  },
  {
    id: nanoid(),
    name: "Capital Markets",
    img: Capital,
    route: "capital-markets",
    overview: [
      "Our experience ranges from handling IPOs to listing and bond issues, secondary fundraising, locally, regionally and internationally.",
    ],
    description:
      "We are one of the leading law firms in Indonesia in covering capital markets. Our team of lawyers cover a full spectrum of areas from equity capital markets, debt capital markets, and funds markets. Our in-depth knowledge of the Indonesia market coupled with our innate ingenuity has made Hilink Kinthill Law Firm the go-to firm for advisory on capital markets.",
    ground: {
      title: "We advise on:",
      items: [
        "Debt capital and structured product offerings",
        "IPOs and listings",
        "Placements, right issues, bonus issues and other secondary issues",
        "Issues of bonds, notes, warrants, depository receipts, redeemable preference shares and convertible loan stocks",
        "Continuing listing requirements, corporate disclosure and corporate governance",
        "Capital and corporate restructuring",
        "Employee share schemes",
      ],
    },
  },
  {
    id: nanoid(),
    name: "Commercial Contracts",
    img: Commercial,
    route: "commercial-contracts",
    overview: [
      "We draft contracts for a range of transactions from joint ventures, sales and marketing, manufacturing, supply and distribution to outsourcing contracts. Our team of experts have the know-how to dig deep and understand the commercial drivers to ensure that negotiations are handled swiftly and efficiently. Our experience is multi-jurisdictional, multilingual and diverse industry experience.",
    ],
    description:
      "Our team of lawyers are experienced in advising on a range of commercial contracts across industries and sectors. We are highly adept in navigating the nuances and considerations for drafting contracts for our clients which include both international and regional companies in various sectors from agribusiness to technology. Our clients range from technology startups to SMEs and MNCs in the region.",
    ground: {
      title: "We advise on:",
      items: [
        "      Sale of goods or services agreements",
        "Joint ventures",
        "Manufacturing",
        "Supply and distribution",
        "Outsourcing contracts",
      ],
    },
  },
  {
    id: nanoid(),
    name: "Compliance and Investigations",
    img: Compliance,
    route: "compliance-and-investigations",
    overview: [
      "When it comes to investigations, our team is adept at navigating the complexities on a range of issues including bribery and corruption, money laundering, fraud, tax evasion, product liability and labor law. Our team is equipped to meet any challenge at any scale, fully understanding the current regulatory framework in Indonesia, and the client’s industries and needs. We have advised a number of clients on compliance and investigative issues across industries and sectors locally, domestically, and internationally.",
    ],
    description:
      "Our team of lawyers are here to help you mitigate risks, operate ethically, while keeping the focus on growing your business in the Indonesia market. Our full service team has experience in advising clients on compliance matters across industries and sectors locally, domestically, and internationally.",
    ground: {
      title: "We advise on:",
      items: [
        "      Subject matter, sector based or country orientated investigations",
        "Internal investigations, regulatory investigations and criminal investigations",
        "Risk reviews, regulatory risk gap analysis and proactive compliance strategy audits",
        "Compliance strategies that keep exposure to a minimum",
        "Response to contentious and non-contentious regulatory and contractual issues",
      ],
    },
  },
  {
    id: nanoid(),
    name: "Mega Projects and State Owned Enterprises",
    img: Construction,
    route: "mega-projects-and-state-owned-enterprises",
    overview: [
      "At Hilink Kinthill Law Firm, our Mega Projects practice area is dedicated to providing expert legal services to clients involved in complex strategic government projects including but not limited to State owned enterprises. Our attorneys have extensive experience in this area and are well-versed in the legal issues and challenges that can arise during the development and execution of mega projects.",
      "We have a track record of success in representing clients in a variety of sectors, including infrastructure, energy, and natural resources. Our attorneys have a deep understanding of the regulatory and legal frameworks that govern mega projects and are skilled at navigating the complex stakeholder landscape that often surrounds these initiatives.",
    ],
    description:
      "Hilink Kinthill Law Firm's Mega Projects team provides expert legal services for complex government projects. Our attorneys have a track record of success in various sectors, including energy and infrastructure, and offer integrated services covering corporate reorganization, M&A, capital markets, and project development. Our goal is to successfully navigate the legal challenges of mega projects for our clients.",
    ground: {
      title:
        "We provide integrated services across legal disciplines and project management for complex projects and transactions. Our services include:",
      items: [
        "Corporate reorganization and restructuring, including incorporation of holding and subholding companies and formulation of corporate charters.",
        "Mergers and Acquisitions.",
        "Capital Market-Related Transactions.",
        "Development of Energy, Infrastructure, Telecommunications, and Industrial Projects.",
      ],
    },
    explanation:
      "Overall, our Mega Projects practice area is equipped to handle all legal aspects of complex strategic government projects, from inception to completion. Our attorneys are dedicated to providing our clients with the highest level of legal representation and to achieving successful outcomes on their behalf.",
  },
  {
    id: nanoid(),
    name: "Corporate and M&A",
    img: Corporate,
    route: "corporate-and-m-a",
    overview: [
      "Merging our local expertise with our deep understanding of the client industry and challenges, has proved effective in executing transactions fast and efficiently. Our full-service approach also ensures that we are providing the most personalised approach and precise execution for each and every one of our clients.",
    ],
    description:
      "Our team has successfully advised both local, regional and international clients in transactions from public and private acquisitions, privatizations, joint ventures and strategic investments across sectors and industries in Indonesia. We have completed a range of transactions, regardless of complexity across various industries including agribusiness, consumer goods, energy, e-commerce, real estate, technology, and logistics.",
    ground: {
      title: "Our lawyers have expertise in the following areas:",
      items: [
        "Cross-border and international mergers and acquisitions",
        "Privatizations",
        "Private Equity and Strategic Investments",
        "Spin-offs and Split-ups",
        "Securities Offerings and Other Capital-Raising Transactions",
        "Corporate reorganization and restructuring",
        "General corporate issues",
        "Corporate governance issues",
      ],
    },
  },
  {
    id: nanoid(),
    name: "Dispute Resolution and Litigation",
    img: Dispute,
    route: "dispute-resolution-and-litigation",
    overview: [
      "The combination of our local expertise, personalised approach and precise execution have managed and resolved disputes in areas including banking and finance, employment and labor, insurance, intellectual property, and shareholder disputes.",
    ],
    description:
      "Our dispute resolution and litigation lawyers have a strong track record in advising companies on disputes and investigations across all industries and sectors including financial institutions, energy, infrastructure, logistics, technology and transport.",
    ground: {
      title: "We provide advice and support on:",
      items: [
        "Arbitration",
        "Banking & Finance Disputes",
        "Commercial & Contract Disputes",
        "Constitutional Law",
        "Corporate and M&A Disputes",
        "Debt Recovery",
        "Employment Disputes",
        "Enforcement Proceedings",
        "Environmental Litigation",
        "Insurance Disputes",
        "Intellectual Property Disputes",
        "Mediation",
        "Public Law & Administrative Litigation",
        "Regulatory Proceedings",
        "Restructuring & Insolvency",
        "White-Collar Defense & Corporate Offence",
      ],
    },
  },
  {
    id: nanoid(),
    name: "Employment",
    img: Employment,
    route: "employment",
    overview: [
      "From reviewing, drafting and vetting employment contracts to resolving employment contract issues and disputes, our on-the-ground team has been the go-to for many regional and international companies in Indonesia.",
    ],
    description:
      "Our experienced team of employment lawyers are well equipped with the expertise needed to advise you on legal issues and needs involving employment. We have a strong track record on advising both emerging and established companies regionally and internationally on a range of employment needs and disputes.",
    ground: {
      title: "Our team can advise on:",
      items: [
        "        Employment appointment and termination",
        "Employment policies",
        "Executive compensation",
        "Restructuring, reorganisation and retrenchments",
        "Mergers and acquisitions (i.e. transfer of employees and rationalisation)",
        "Contentious employment issues",
      ],
    },
  },
  {
    id: nanoid(),
    name: "Intellectual Property",
    img: RealEstate,
    route: "intellectual-property",
    overview: [
      "Hilink Kinthill Law Firm is dedicated to helping businesses and individuals protect their intellectual property rights. Our team of experienced attorneys is skilled in handling a wide range of intellectual property matters, including patents, trademarks, copyrights, and trade secrets.",
      "We are able to service clients across the region, providing knowledgeable and personalized representation to meet their unique needs. Our attorneys have a deep understanding of the laws surrounding intellectual property and are able to effectively navigate the complex legal landscape.",
      "Whether you are looking to secure your intellectual property rights, enforce your rights against an infringer, or resolve a dispute, Hilink Kinthill Law Firm has the expertise to help. Our attorneys have a track record of success in representing clients in intellectual property matters, and we are committed to achieving the best possible outcome for our clients.",
    ],
    description:
      "Hilink Kinthill Law Firm is dedicated to helping businesses and individuals protect their intellectual property rights. Our team of experienced attorneys is skilled in handling a wide range of intellectual property matters, including patents, trademarks, copyrights, and trade secrets.",
    ground: {
      title: "",
      items: [],
    },
  },
  {
    id: nanoid(),
    name: "Technology & Data Protection",
    img: Technology,
    route: "Technology-and-Data-Protection",
    overview: [
      "Our practice covers a wide regional scope, and we have worked with clients from a variety of industries, including healthcare, finance, technology, and more. We are proud to have been recognized as an award-winning practice, and we strive to provide the highest level of service to all of our clients.",
    ],
    description:
      "At Hilink Kinthill Law Firm, our Data Protection practice is highly regarded as a leader in the field. Our team has a deep understanding of the complex laws and regulations surrounding data protection, and we are dedicated to helping our clients navigate this rapidly evolving area of law.",
    ground: {
      title:
        "Some of the typical data protection work that law firms like ours handle includes:",
      items: [
        "Advising clients on compliance with data protection laws and regulations, including the General Data Protection Regulation (GDPR)",
        "Assisting clients with data breaches and incidents, including responding to notifications, managing investigations, and mitigating potential harm",
        "Drafting and reviewing privacy policies, terms of service, and other related documents",
        "Providing guidance on data protection issues related to mergers and acquisitions, including due diligence and integration",
        "Advocating for clients in data protection-related disputes and litigations",
        "Counseling clients on best practices for data protection, including data retention and destruction policies, data security measures, and employee training",
      ],
    },
    explanation:
      "At Hilink Kinthill Law Firm, we are committed to helping our clients effectively manage their data protection obligations and minimize risk. If you have any questions or need assistance with a data protection issue, please don't hesitate to reach out to our experienced team.",
  },
  {
    id: nanoid(),
    name: "Restructuring and Insolvency",
    img: Restructuring,
    route: "restructuring-and-insolvency",
    overview: [
      "We have represented investors, lenders, and creditors in Indonesia and are known to resolve these matters as quickly and efficiently as possible.",
    ],
    description:
      "Emerging and established companies today are faced with complex challenges in an increasingly volatile environment in both the emerging and international markets. Our team is here to help you navigate through financial difficulty with our local and sector expertise, and deep understanding of local regulation.",
    ground: {
      title: "We provide personalised and sound counsel on matters including:",
      items: [
        "Formal insolvency proceedings",
        "Restructuring plans",
        "Debt rescheduling",
        "Out-of-court work-outs",
        "Crisis management and corporate contingency planning",
        "Implementation of corporate restructurings, including asset dispositions and judicial proceedings",
        "Bankruptcy litigation",
      ],
    },
  },
  {
    id: nanoid(),
    name: "Government",
    img: Government,
    route: "government",
    overview: [
      "The Government Focus Group practice area at Hilink Kinthill Law Firm covers a broad range of legal services related to central and regional government agencies, including administrative law, regulatory compliance, government contracts, lobbying, and public policy advocacy. Our team of experienced attorneys is well-versed in navigating the complex legal landscape of central and regional government regulations and policies, and we are dedicated to helping our clients achieve their goals while maintaining compliance with applicable laws and regulations.",
      "At Hilink Kinthill Law Firm, we understand that dealing with issues related to central and regional government agencies can be stressful and time-consuming for businesses and individuals. That's why we strive to provide personalized legal services that meet the unique needs of our clients. Whether you need assistance with government contracts, regulatory compliance, or public policy advocacy, our team is here to help.",
    ],
    description:
      "The Government Focus Group practice area at Hilink Kinthill Law Firm covers a broad range of legal services related to central and regional government agencies, including administrative law, regulatory compliance, government contracts, lobbying, and public policy advocacy",
    ground: {
      title: "Our services include:",
      items: [
        "Government Contracting: We assist businesses in navigating the complexities of central and regional government contracting, including procurement, negotiation, and compliance with applicable regulations.",
        "Regulatory Compliance: Our attorneys provide guidance to clients on complying with central and regional government regulations, including environmental, healthcare, and safety regulations.",
        "Lobbying: We represent clients before central and regional government agencies and legislative bodies, advocating for their interests and working to shape public policy.",
        "Public Policy Advocacy: Our team provides strategic counsel to clients on policy issues, helping them to understand the implications of proposed legislation and regulations.",
      ],
    },
    explanation:
      "At GHP Law Firm, we pride ourselves on our commitment to our client's success. Our experienced attorneys work diligently to provide customized legal solutions that meet the unique needs of each client. Contact us today to learn more about how we can assist you with your central and regional government-related legal needs.",
  },
];

export default serviceData;
