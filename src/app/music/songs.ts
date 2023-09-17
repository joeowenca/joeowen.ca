import { StaticImageData } from 'next/image';
import refraction from '../../../public/cover-art/refraction-cover-art.jpg';
import crash from '../../../public/cover-art/crash-cover-art.jpg';
import redalert from '../../../public/cover-art/red-alert-cover-art.jpg';
import lonestar from '../../../public/cover-art/lone-star-cover-art.jpg';
import attackonxen from '../../../public/cover-art/attack-on-xen-cover-art.jpg';
import interkiller from '../../../public/cover-art/interkiller-cover-art.jpg';
import allmine from '../../../public/cover-art/all-mine-cover-art.jpg';

type SongTypes = {
  title: string;
  url: string;
  image: StaticImageData;
}

const songs:SongTypes[] = [
  {
    title: "Refraction",
    url: "https://soundcloud.com/sas-areku/refraction-sas-areku",
    image: refraction,
  },
  {
    title: "CRASH",
    url: "https://soundcloud.com/sas-areku/crash-sas-areku",
    image: crash,
  },
  {
    title: "Red Alert",
    url: "https://soundcloud.com/sas-areku/red-alert",
    image: redalert,
  },
  {
    title: "Lone Star",
    url: "https://soundcloud.com/sas-areku/lone-star",
    image: lonestar,
  },
  {
    title: "Attack On Xen",
    url: "https://soundcloud.com/sas-areku/attack-on-xen",
    image: attackonxen,
  },
  {
    title: "Interkiller",
    url: "https://soundcloud.com/sas-areku/interkiller",
    image: interkiller,
  },
  {
    title: "All Mine",
    url: "https://soundcloud.com/sas-areku/all-mine-patrick-dixon-sas-areku-remix",
    image: allmine,
  }
];

export default songs;