import Link from "next/link";
import "../styles/action_buttons.css";
import "../styles/animated_text.css";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 p-12 pt-32 md:p-14 md:pt-36 xl:p-16 xl:pt-40 2xl:p-16 2xl:pt-72 w-full max-w-screen-2xl">
      <hgroup className="flex flex-col justify-between">
        <h1 className="text-left text-3xl md:text-5xl xl:text-7xl leading-normal font-bold pb-4 md:pb-6 lg:pb-8">{`HI, I'M BENGEMIN!`}</h1>
        <div className="animated-text">
          <h2 className="text-left text-2xl md:text-3xl xl:text-5xl leading-normal font-semibold md:pb-2 lg:pb-4">
            YOUR <span></span>
          </h2>
        </div>
        <h2 className="text-left text-2xl md:text-3xl xl:text-5xl font-semibold">
          FULLSTACK DEVELOPER
        </h2>
        <h3 className="text-left text-md xl:text-xl pt-4 md:pt-6 lg:pt-8">
          {`>>> `}Let me turn your{" "}
          <span className="text-custom_accent">ideas</span> into a{" "}
          <span className="text-custom_accent">reality</span>.
        </h3>
      </hgroup>
      <div className="flex flex-col gap-8 landscape:flex-row lg:gap-12 z-1">
        <Link className="action-btn" href="/about">
          Get to Know Me
        </Link>
        <Link className="action-btn" href="/projects">
          Check Out My Works
        </Link>
      </div>
    </main>
  );
}
