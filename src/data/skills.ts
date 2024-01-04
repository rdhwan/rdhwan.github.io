type Skill = {
  framework: string;
  logoPath: string;
  ghLink: string;
};

export const frontEnd: Skill[] = [
  {
    framework: "React",
    logoPath: "/assets/logos/react.png",
    ghLink: "https://github.com/facebook/react",
  },
  {
    framework: "Next JS",
    logoPath: "/assets/logos/next.png",
    ghLink: "https://github.com/vercel/next.js",
  },
  {
    framework: "Remix",
    logoPath: "/assets/logos/remix.png",
    ghLink: "https://github.com/remix-run",
  },
  {
    framework: "Tailwind CSS",
    logoPath: "/assets/logos/tailwind.png",
    ghLink: "https://github.com/tailwindlabs/tailwindcss",
  },
  {
    framework: "Chakra UI",
    logoPath: "/assets/logos/chakra.png",
    ghLink: "https://github.com/chakra-ui/chakra-ui",
  },
  {
    framework: "Framer Motion",
    logoPath: "/assets/logos/framer.webp",
    ghLink: "https://github.com/framer/motion",
  },
];

export const backEnd: Skill[] = [
  {
    framework: "Express JS",
    logoPath: "/assets/logos/express.png",
    ghLink: "https://github.com/expressjs/express",
  },
  {
    framework: "Elysia",
    logoPath: "/assets/logos/elysia.svg",
    ghLink: "https://github.com/elysiajs/elysia",
  },
  {
    framework: "FastAPI",
    logoPath: "/assets/logos/fastapi.png",
    ghLink: "https://github.com/tiangolo/fastapi",
  },
  {
    framework: "Prisma",
    logoPath: "/assets/logos/prisma.svg",
    ghLink: "https://github.com/prisma/prisma",
  },
];

export const mobile: Skill[] = [
  {
    framework: "Expo",
    logoPath: "/assets/logos/expo.png",
    ghLink: "https://github.com/expo/expo",
  },
  {
    framework: "Flutter",
    logoPath: "/assets/logos/flutter.png",
    ghLink: "https://github.com/flutter/flutter",
  },
];

export const others: Skill[] = [
  {
    framework: "Ubuntu Server",
    logoPath: "/assets/logos/ubuntu.png",
    ghLink: "https://ubuntu.com/",
  },
  {
    framework: "Docker",
    logoPath: "/assets/logos/docker.png",
    ghLink: "https://github.com/docker",
  },
  {
    framework: "OpenWRT",
    logoPath: "/assets/logos/openwrt.png",
    ghLink: "https://github.com/openwrt/openwrt",
  },
];
