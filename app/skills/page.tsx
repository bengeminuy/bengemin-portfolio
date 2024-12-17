import "../../styles/action_buttons.css";
import "../../styles/fading_border.css";

import MainSkills from "./MainSkills";
import SubSkills from "./SubSkills";

export default function Skills() {
  return (
    <main className="flex flex-col gap-2 pt-28 2xl:pt-32 xl:pr-16 2xl:pr-0 h-screen w-full max-w-screen-2xl items-center transform scale-100">
      <h1 className="text-xl xl:text-6xl 2xl:text-8xl leading-normal font-bold w-5/6 portrait:w-full portrait:pl-4 opacity-80">
        SKILLS
        <span className="text-xs xl:text-3xl 2xl:text-4xl align-top pl-1 xl:pl-2">
          02
        </span>
      </h1>
      <div className="flex py-2 px-4 w-5/6 gap-4 2xl:text-2xl xl:text-l portrait:flex-col portrait:b-20 portrait:w-full portrait:overflow-y-auto scrollable-div">
        <div className="flex flex-col w-2/5 max-w-2/5 items-end portrait:w-full portrait:max-w-full portrait:items-start">
          <h2 className="font-bold 2xl:text-4xl xl:text-3xl pb-2">MAIN</h2>
          <div className="flex portrait:flex-row w-full flex-wrap p-2 gap-2 justify-end portrait:justify-center">
            <MainSkills />
          </div>
        </div>
        <div className="inline-block landscape:h-full landscape:w-0.5 self-stretch bg-neutral-100 opacity-80 portrait:opacity-0" />
        <div className="flex flex-col w-3/5 max-w-3/5 portrait:w-full portrait:max-w-full portrait:items-start">
          <h2 className="font-bold 2xl:text-4xl xl:text-3xl pb-2">
            SUB
            <span className="2xl:text-2xl xl:text-xl align-middle pl-2 font-extralight">
              {"*sorted by expertise"}
            </span>
          </h2>
          <div className="flex w-full flex-wrap p-2 gap-2 justify-start portrait:justify-center">
            <SubSkills />
          </div>
        </div>
      </div>
    </main>
  );
}
