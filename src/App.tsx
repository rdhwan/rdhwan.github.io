import SocialMediaButtons from "./components/SocialMediaButton";
import ProjectCards from "./components/ProjectCards";
import { backEnd, frontEnd, mobile, others } from "./data/skills";
import { projectsData } from "./data/projects";
import BadgeButton from "./components/BadgeButton";

export default function App() {
  const age = new Date().getFullYear() - new Date("2004-07-12").getFullYear();

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
        <div className="flex flex-col py-6 font-overpass text-secondary">
          <h1 className="text-2xl font-bold font-montserrat pb-2">About Me</h1>
          <div className="h-1 w-full bg-primary rounded-full" />
          <p className="text-lg text-justify py-4">
            I'm Muhammad Fathan Ridhwan, a {age}-year-old pursuing a degree in{" "}
            <a
              href="https://tk.umn.ac.id"
              target="_blank"
              className="underline"
            >
              Computer Engineering
            </a>{" "}
            from the{" "}
            <a
              href="https://www.umn.ac.id/"
              target="_blank"
              className="underline"
            >
              Universitas Multimedia Nusantara
            </a>
            . I have a huge passion for programming, particularly in building
            full-stack applications.
            <br />
            <br />
            In my free time, I love getting my hands dirty with programming and
            playing around with some hardware. It's my way of unleashing
            creativity and turning ideas into reality. Whether it's coding up a
            new project or tinkering with different hardware components, I find
            joy in the process of bringing things to life. Exploring the endless
            possibilities of technology is not just a hobby for me, but a
            passion that keeps me excited and motivated. It's in these moments
            of coding and hardware tinkering that I truly feel in my element.
            <br />
            <br />
            My ambition, adaptability, and enthusiasm for programming make me an
            ideal candidate for any organization seeking a talented and
            innovative programmer. I am eager to take on any challenging
            projects that comes my way and am confident in my ability to deliver
            exceptional results. Please do not hesitate to reach out to me if
            you believe I can be of assistance to your team.
          </p>
        </div>
        <div className="flex w-full flex-col py-4 text-secondary">
          <h1 className="justify-center text-2xl font-bold font-montserrat pb-2">
            Skills
          </h1>

          <div className="h-1 w-full bg-primary rounded-full" />

          <div className="flex flex-col px-2 py-4">
            <h2 className="text-xl font-bold font-montserrat my-6 text-center">
              Front-end
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {/* skills */}
              {frontEnd.map((e) => (
                <a href={e.ghLink} target="_blank">
                  <img src={e.logoPath} alt={e.framework} className="h-16" />
                </a>
              ))}
            </div>

            <h2 className="text-xl font-bold font-montserrat my-6 text-center">
              Back-end
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {/* skills */}
              {backEnd.map((e) => (
                <a href={e.ghLink} target="_blank">
                  <img src={e.logoPath} alt={e.framework} className="h-16" />
                </a>
              ))}
            </div>

            <h2 className="text-xl font-bold font-montserrat my-6 text-center">
              Mobile
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {/* skills */}
              {mobile.map((e) => (
                <a href={e.ghLink} target="_blank">
                  <img src={e.logoPath} alt={e.framework} className="h-16" />
                </a>
              ))}
            </div>

            <h2 className="text-xl font-bold font-montserrat my-6 text-center">
              Others
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {/* skills */}
              {others.map((e) => (
                <a href={e.ghLink} target="_blank">
                  <img src={e.logoPath} alt={e.framework} className="h-16" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col py-4 text-secondary">
          <h1 className="text-2xl font-bold font-montserrat pb-2">Works</h1>
          <div className="h-1 w-full bg-primary rounded-full" />
        </div>

        <div className="flex w-full flex-col py-4 text-secondary">
          <h1 className="text-2xl font-bold font-montserrat pb-2">
            Side Projects
          </h1>
          <div className="h-1 w-full bg-primary rounded-full" />
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
