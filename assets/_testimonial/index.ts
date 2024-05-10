import { StaticImageData } from "next/image";
import { nanoid } from "nanoid";
import JohnMorgan from "./John_Morgan.jpg";
import EllieAnderson from "./Ellie_Anderson.jpg";
import NiaAdebayo from "./Nia_Adebayo.jpg";
import RigoLouie from "./Rigo_Louie.jpg";
import MiaWilliams from "./Mia_Williams.jpg";

interface TestimonialDataProps {
  id: string;
  name: string;
  img: StaticImageData;
  review: string;
}

const testimonialData: TestimonialDataProps[] = [
  {
    id: nanoid(),
    name: `John Morgan`,
    img: JohnMorgan,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: nanoid(),
    name: `Ellie Anderson`,
    img: EllieAnderson,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: nanoid(),
    name: `Nia Adebayo`,
    img: NiaAdebayo,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: nanoid(),
    name: `Rigo Louie`,
    img: RigoLouie,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    id: nanoid(),
    name: `Mia Williams`,
    img: MiaWilliams,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
];

export default testimonialData;
