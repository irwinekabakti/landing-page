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
import { nanoid } from "nanoid";

interface ClientDataProps {
  id: string;
  name: string;
  img: StaticImageData;
}

const clients: ClientDataProps[] = [
  { id: nanoid(), name: "AIA", img: AIA },
  { id: nanoid(), name: "Ajaib", img: Ajaib },
  { id: nanoid(), name: "Allianz", img: Allianz },
  { id: nanoid(), name: "Alodokter", img: Alodokter },
  { id: nanoid(), name: "Amartha", img: Amartha },
  { id: nanoid(), name: "Astra", img: Astra },
  { id: nanoid(), name: "Blibli", img: Blibli },
  { id: nanoid(), name: "Ey", img: Ey },
  { id: nanoid(), name: "Gojek", img: Gojek },
  { id: nanoid(), name: "Grab", img: Grab },
  { id: nanoid(), name: "Halodoc", img: Halodoc },
  { id: nanoid(), name: "Jago", img: Jago },
  { id: nanoid(), name: "Jenius", img: Jenius },
  { id: nanoid(), name: "OCBC", img: OCBC },
  { id: nanoid(), name: "RuangGuru", img: RuangGuru },
  { id: nanoid(), name: "Shopee", img: Shopee },
  { id: nanoid(), name: "Stockbit", img: Stockbit },
  { id: nanoid(), name: "Taco", img: Taco },
  { id: nanoid(), name: "TBS", img: TBS },
  { id: nanoid(), name: "TikTok", img: TikTok },
  { id: nanoid(), name: "Tokopedia", img: Tokopedia },
  { id: nanoid(), name: "Traveloka", img: Traveloka },
  { id: nanoid(), name: "Tsel", img: Tsel },
  { id: nanoid(), name: "Unilever", img: Unilever },
];

export default clients;
