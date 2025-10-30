// src/utils/imagesMap.ts

// Importa tus imágenes locales
import landin from "../assets/Globals/landing.png";
import login from "../assets/Globals/loginlogo.png";
import pay from "../assets/Globals/paypage.png";
import sponsor from "../assets/copamex/sponsor_coursel.png"
import YTvideo from "../assets/copamex/YTvideo.png"

export const DESCRIPTION ={
  CopamexBox:
    "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  landing:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  GlobalBox: 
      "You can obtain information about your virtual cards and view the latest transactions, + a dashboard and landing page",

}

export const TITLE = {
  GlobalBox: "Developing streaming page for live events, and video api the youtube; using Next.js, i using for all fron Tailwind css. ",
  landin:"Marketing UI Design in Figma.",
  CopamexBox: 
      "Web Application Development using React, Node.js, Tailwind CSS (some Material-UI components), and Firebase/MySQL/PHP database.",

}

// Mapeo
export const IMAGES  = {
  landing: { src: landin, alt: "Landing Logo" },
  loginlogo: { src: login, alt: "Login Logo" },
  paypage: { src: pay, alt: "Pay Logo" },
  sponsor_coursel: { src: sponsor, alt: "Sponsor img" },
  YTvideo: { src: YTvideo, alt: "YouTube img" },

  CopamexBox:[
    { src: sponsor, alt: "Sponsor img" },
    { src: YTvideo, alt: "YouTube img" }
  ],

  GlobalBox:[
    { src: landin, alt: "Landing Logo" },
    { src: login, alt: "Login Logo" },
    { src: pay, alt: "Pay Logo" }
  ],
};