import { StaticImageData } from "next/image";
import AIA from "./aia.png";
import Ajaib from "./ajaib.png";
import Allianz from "./allianz.png";
import Alodokter from "./alodokter.png";
import Amartha from "./amartha.png";
import Astra from "./astra.png";
import Blibli from "./blibli.png";
import Ey from "./ey.png";
import Gojek from "./gojek.png";
import Grab from "./grab.png";
import Halodoc from "./halodoc.png";
import Jago from "./jago.png";
import Jenius from "./jenius.png";
import OCBC from "./ocbc.png";
import RuangGuru from "./ruangguru.png";
import Shopee from "./shopee.png";
import Stockbit from "./stockbit-bibit.png";
import Taco from "./taco.png";
import TBS from "./tbs.png";
import TikTok from "./tiktok.png";
import Tokopedia from "./tokopedia.png";
import Traveloka from "./traveloka.png";
import Tsel from "./tsel.png";
import Unilever from "./unilever.png";

interface ClientDataProps {
  id: number;
  name: string;
  img: StaticImageData;
}

const clients: ClientDataProps[] = [
  { id: 1, name: "AIA", img: AIA },
  { id: 2, name: "Ajaib", img: Ajaib },
  { id: 3, name: "Allianz", img: Allianz },
  { id: 4, name: "Alodokter", img: Alodokter },
  { id: 5, name: "Amartha", img: Amartha },
  { id: 6, name: "Astra", img: Astra },
  { id: 7, name: "Blibli", img: Blibli },
  { id: 8, name: "Ey", img: Ey },
  { id: 9, name: "Gojek", img: Gojek },
  { id: 10, name: "Grab", img: Grab },
  { id: 11, name: "Halodoc", img: Halodoc },
  { id: 12, name: "Jago", img: Jago },
  { id: 13, name: "Jenius", img: Jenius },
  { id: 14, name: "OCBC", img: OCBC },
  { id: 15, name: "RuangGuru", img: RuangGuru },
  { id: 16, name: "Shopee", img: Shopee },
  { id: 17, name: "Stockbit", img: Stockbit },
  { id: 18, name: "Taco", img: Taco },
  { id: 19, name: "TBS", img: TBS },
  { id: 20, name: "TikTok", img: TikTok },
  { id: 21, name: "Tokopedia", img: Tokopedia },
  { id: 22, name: "Traveloka", img: Traveloka },
  { id: 23, name: "Tsel", img: Tsel },
  { id: 24, name: "Unilever", img: Unilever },
];

export default clients;
