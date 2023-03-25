export interface IProjects {
  name: string;
  imgPath: string;
  brief?: string;
  link?: string;
}

export const projectsData: IProjects[] = [
  {
    name: "Resinwatch",
    imgPath: "assets/projects/ResinWatchLogo.png",
    brief:
      "Genshin mini-stats tracker project using ESP8266 and SSD1306 OLED display",
    link: "https://github.com/rdhwan/resinwatch/",
  },
  {
    name: "Quotify",
    imgPath: "assets/projects/Quotify.png",
    brief: "Another quotes generator",
    link: "https://github.com/rdhwan/quotify/",
  },
];
