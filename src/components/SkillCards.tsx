import { useState } from "react";
import { ISkill } from "../data/skills";

export default function SkillCards(props: ISkill) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div
        className={`${
          expanded ? "flex-grow" : ""
        } w-full flex flex-col p-2 px-4 my-4 outline outline-primary rounded-xl mx-2 justify-center`}
      >
        <button
          className={`text-lg font-bold font-overpass text-center ${
            expanded ? "pb-2" : ""
          }`}
          onClick={() => setExpanded(!expanded)}
        >
          {props.lang}
        </button>
        {expanded && (
          <p className="text-lg font-overpass text-justify">{props.brief}</p>
        )}
      </div>
    </>
  );
}
