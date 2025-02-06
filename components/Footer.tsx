import ContactIcons from "./ContactIcons";

export default function Footer() {
  return (
    <header className="w-full portrait:max-w-4xl max-w-5xl pt-[3vh] lg:pt-[5vh] pb-[3vh] lg:pb-[5vh] portrait:px-[1.5rem]">
      <div className="flex justify-center items-center gap-4">
        <h1 className="font-bold text-white text-2xl">Say Hi! 👋</h1>
        <ContactIcons />
      </div>
    </header>
  );
}
