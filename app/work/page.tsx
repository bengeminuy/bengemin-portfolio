import "../../styles/fading_border.css";
import DesktopWork from "./DesktopWork";
import MobileWork from "./MobileWork";

export default function Work() {
  return (
    <main className="flex flex-col items-center pt-28 px-8 flex-grow w-full h-screen gap-2">
      <h1 className="2xl:text-8xl xl:text-6xl leading-normal font-bold w-max opacity-80 mb-8 grow-0">
        WORK HISTORY
        <span className="2xl:text-4xl xl:text-3xl align-top pl-2">03</span>
      </h1>
      <MobileWork />
      <DesktopWork />
    </main>
  );
}
