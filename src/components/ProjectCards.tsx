import { IProjects } from "../data/projects";

export default function ProjectCards(props: IProjects) {
  return (
    <>
      <a
        className="flex flex-col h-60 w-64 m-2 p-4 bg-primary hover:bg-secondary transition ease-in-out duration-300 delay-75 text-background rounded-xl"
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="text-2xl font-overpass font-bold">{props.name}</h1>

        <div className="flex justify-center">
          <img
            src={props.imgPath}
            alt={props.name}
            className="h-32 w-32 object-scale-down"
          />
        </div>
        {props.brief && (
          <p className="font-overpass text-sm text-justify">{props.brief}</p>
        )}
      </a>
    </>
  );
}
