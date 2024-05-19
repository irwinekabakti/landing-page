import { StaticImageData } from "next/image";
import { nanoid } from "nanoid";
import Kai from "./Kai.webp";
import Mudryk from "./Mudryk.webp";
import Nanang from "./Nanang.webp";
import Badminson from "./Son.webp";
import White from "./White.webp";

interface TestimonialDataProps {
  id: string;
  name: string;
  domain: string;
  img: StaticImageData;
  review: string;
}

const testimonialData: TestimonialDataProps[] = [
  {
    id: nanoid(),
    name: `Mas Kai`,
    domain: `Employment Law`,
    img: Kai,
    review: `Hilink Kinthill Law Firm helped me through a stressful workplace dispute with expert legal advice and support, leading to a favorable outcome. Highly recommend!`,
  },
  {
    id: nanoid(),
    name: `EL Dear God Mudryk`,
    domain: `Corporate`,
    img: Mudryk,
    review: `As a small business owner, I found Hilink Kinthill Law Firm's legal support invaluable for drafting contracts and handling negotiations. Highly recommend!`,
  },
  {
    id: nanoid(),
    name: `Nanang Jackson`,
    domain: `Real Estate Law`,
    img: Nanang,
    review: `Hilink Kinthill Law Firm made buying our first home stress-free, handling all legalities with precision. Couldn't be happier with their service.`,
  },
  {
    id: nanoid(),
    name: `Badminson`,
    domain: `Capital Markets`,
    img: Badminson,
    review: `Hilink Kinthill Law Firm's expertise in capital markets was crucial for our startup. Their strategic advice helped us secure necessary funding.`,
  },
  {
    id: nanoid(),
    name: `Ben White`,
    domain: `Commercial Contracts`,
    img: White,
    review: `Hilink Kinthill Law Firm exceeded our expectations in negotiating commercial contracts, benefiting our procurement process significantly. Highly recommend!`,
  },
];

export default testimonialData;
