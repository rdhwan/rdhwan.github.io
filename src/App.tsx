import SocialMediaButtons from "./components/SocialMediaButton";
import SkillCards from "./components/SkillCards";
import ProjectCards from "./components/ProjectCards";
import { skillData } from "./data/skills";
import { projectsData } from "./data/projects";

export default function App() {
  return (
    <div className="flex flex-col h-auto justify-center items-center bg-background">
      <div className="w-full max-w-4xl p-8 flex flex-col items-center">
        <div className="flex flex-col items-center">
          <img
            src="assets/ridhwan.jpg"
            alt="Fathan Ridhwan"
            className="h-48 rounded-full border border-primary border-dashed p-2"
          />
          <div className="flex flex-col py-4 items-center justify-center">
            <div className="flex flex-col items-center justify-center font-montserrat text-primary">
              <h1 className="font-bold text-xl">Fathan Ridhwan</h1>
              <h2 className="font-montserrat font-light text-lg">
                Universitas Multimedia Nusantara
              </h2>
            </div>
            <SocialMediaButtons />
          </div>
        </div>
        <div className="h-1 w-full bg-primary rounded-full" />
        <div className="flex flex-col py-4 font-overpass text-secondary">
          <p className="text-lg text-justify py-4">
            I am Muhammad Fathan Ridhwan, an 18-year-old pursuing a degree in
            Computer Engineering from the University of Multimedia Nusantara. I
            have a passion for programming, particularly in building APIs. I
            possess exceptional problem-solving skills and a keen attention to
            detail, which have allowed me to complete challenging projects with
            ease.
            <br />
            <br />
            My ambition, adaptability, and enthusiasm for programming make me an
            ideal candidate for any organization seeking a talented and
            innovative programmer. I am eager to take on any challenging
            programming project that comes my way and am confident in my ability
            to deliver exceptional results. Please do not hesitate to reach out
            to me if you believe I can be of assistance to your team.
          </p>
        </div>
        <div className="flex w-full flex-col py-4 text-secondary">
          <h1 className="text-xl font-bold font-montserrat pb-2">Skills</h1>
          <div className="flex flex-col items-center px-2">
            {skillData.map((e) => (
              <SkillCards lang={e.lang} brief={e.brief} />
            ))}
          </div>
        </div>
        <div className="flex w-full flex-col py-4 text-secondary">
          <h1 className="text-xl font-bold font-montserrat pb-2">Projects</h1>
          <div className="flex flex-col flex-wrap justify-start sm:flex-row items-center sm:items-start">
            {projectsData.map((e) => (
              <ProjectCards
                name={e.name}
                imgPath={e.imgPath}
                brief={e.brief}
                link={e.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
