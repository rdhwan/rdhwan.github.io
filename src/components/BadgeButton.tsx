import { ReactNode } from "react";

type BadgeButtonProps = {
  text: string;
  logo: ReactNode;
  url: string;
};

const BadgeButton = ({ text, logo, url }: BadgeButtonProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener norefferer"
      className="flex flex-row items-center justify-center bg-secondary w-fit rounded-full gap-1 px-2"
    >
      {logo}
      <p className="text-background font-montserrat font-bold text-sm">
        {text}
      </p>
    </a>
  );
};

export default BadgeButton;
