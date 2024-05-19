import { StaticImageData } from "next/image";
import Achievement1 from "./achievement1.png";
import Achievement2 from "./achievement2.png";
import Achievement3 from "./achievement3.png";
import Achievement4 from "./achievement4.png";
import Achievement5 from "./achievement5.png";
import Achievement6 from "./achievement6.png";
import Achievement7 from "./achievement7.png";
import Achievement8 from "./achievement8.png";
import Achievement9 from "./achievement9.png";

interface awardsProps {
  id: number;
  name: string;
  img: StaticImageData;
}

const awards: awardsProps[] = [
  { id: 1, name: "Hukum online", img: Achievement1 },
  { id: 2, name: "chamber asia-pacific", img: Achievement2 },
  { id: 3, name: "international advisory", img: Achievement3 },
  { id: 4, name: "future legal leader", img: Achievement4 },
  { id: 5, name: "asia business law journal law firm", img: Achievement5 },
  { id: 6, name: "in-house counsel", img: Achievement6 },
  { id: 7, name: "indonesia's top 100 lawyers", img: Achievement7 },
  { id: 8, name: "who's who legal", img: Achievement8 },
  { id: 9, name: "Asian legal business", img: Achievement9 },
];

export default awards;
