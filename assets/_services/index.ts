import { StaticImageData } from "next/image";
import Banking from "./banking.png";
import Capital from "./capital_market.png";
import Commercial from "./commercial.png";
import Compliance from "./compliance.png";
import Construction from "./construction.png";
import Corporate from "./corporate.png";
import Dispute from "./dispute.png";
import Employment from "./employment.png";
import RealEstate from "./real_estate.png";
import Technology from "./technology.png";
import { nanoid } from "nanoid";

interface ServiceDataProps {
  id: string;
  name: string;
  img: StaticImageData;
}

const service: ServiceDataProps[] = [
  { id: nanoid(), name: "Banking and Finance", img: Banking },
  { id: nanoid(), name: "Capital Markets", img: Capital },
  { id: nanoid(), name: "Commercial Contracts", img: Commercial },
  { id: nanoid(), name: "Compliance and Investigations", img: Compliance },
  {
    id: nanoid(),
    name: "Mega Projects and State Owned Enterprises",
    img: Construction,
  },
  { id: nanoid(), name: "Corporate and M&A", img: Corporate },
  { id: nanoid(), name: "Dispute Resolution and Litigation", img: Dispute },
  { id: nanoid(), name: "Employment", img: Employment },
  { id: nanoid(), name: "Intellectual Property", img: RealEstate },
  { id: nanoid(), name: "Technology & Data Protection", img: Technology },
];

export default service;
