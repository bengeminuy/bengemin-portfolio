import Image from "next/image";
import Nokia from "../../public/images/projects/nokia.png";
import PRC from "../../public/images/projects/prc.png";
import Streamline from "../../public/images/projects/streamline.png";
import Giftify from "../../public/images/projects/giftify.png";
import Nipponware from "../../public/images/projects/nipponware.png";
import CGC from "../../public/images/projects/cgc.png";

export default function Projects() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="2xl:text-8xl xl:text-6xl leading-normal font-bold w-max opacity-80 mb-8 grow-0">
        PROJECTS
        <span className="2xl:text-4xl xl:text-3xl align-top pl-2">04</span>
      </h1>
      <div className="flex flex-col py-2 px-4 w-5/6 2xl:gap-8 xl:gap-4 2xl:text-2xl xl:text-l">
        <div className="relative flex 2xl:gap-8 xl:gap-4">
          <div className="2xl:w-[400px] xl:w-[350px] aspect-[4/3] rounded-xl shadow z-10 overflow-hidden">
            <figure className="relative object-cover rounded-xl overflow-hidden">
              <Image className="rounded-xl" src={Nokia} alt="nokia image" />
              <figcaption className="absolute left-0 bottom-0 h-full flex flex-col justify-between align-middle text-center break-normal bg-custom_accent2 2xl:p-8 xl:p-6 opacity-0 ease-in-out hover:opacity-100 duration-500">
                <h1 className="2xl:text-2xl xl:text-xl text-left">
                  Ruby on Rails based webapp allowing team leaders to reserve
                  meeting rooms without overlaps and conflicts.
                </h1>
                <h2 className="2xl:text-lg xl:text-md text-right">@2017</h2>
              </figcaption>
            </figure>
          </div>
          <div className="2xl:w-[400px] xl:w-[350px] aspect-[4/3] rounded-xl shadow z-10 overflow-hidden">
            <figure className="relative object-cover rounded-xl overflow-hidden">
              <Image className="rounded-xl" src={PRC} alt="prc image" />
              <figcaption className="absolute left-0 bottom-0 h-full flex flex-col justify-between align-middle text-center break-normal bg-custom_accent2 2xl:p-8 xl:p-6 opacity-0 ease-in-out hover:opacity-100 duration-500">
                <h1 className="2xl:text-2xl xl:text-xl text-left">
                  Java based Android app enabling PRC volunteers to receive
                  notifications about latest events and activities.
                </h1>
                <h2 className="2xl:text-lg xl:text-md text-right">@2018</h2>
              </figcaption>
            </figure>
          </div>
          <div className="2xl:w-[400px] xl:w-[350px] aspect-[4/3] rounded-xl shadow z-10 overflow-hidden">
            <figure className="relative object-cover rounded-xl overflow-hidden">
              <Image
                className="rounded-xl"
                src={Streamline}
                alt="streamline image"
              />
              <figcaption className="absolute left-0 bottom-0 h-full flex flex-col justify-between align-middle text-center break-normal bg-custom_accent2 2xl:p-8 xl:p-6 opacity-0 ease-in-out hover:opacity-100 duration-500">
                <h1 className="2xl:text-2xl xl:text-xl text-left">
                  React based webapp using Firebase digitalizing all records and
                  automating all reports for Streamline and its sister
                  companies.
                </h1>
                <h2 className="2xl:text-lg xl:text-md text-right">@2022</h2>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="flex 2xl:gap-8 xl:gap-4">
          <div className="2xl:w-[450px] xl:w-[350px] aspect-[4/3] rounded-xl shadow z-10 overflow-hidden">
            <figure className="relative object-cover rounded-xl overflow-hidden">
              <Image className="rounded-xl" src={Giftify} alt="giftify image" />
              <figcaption className="absolute left-0 bottom-0 h-full flex flex-col justify-between align-middle text-center break-normal bg-custom_accent2 2xl:p-8 xl:p-6 opacity-0 ease-in-out hover:opacity-100 duration-500">
                <h1 className="2xl:text-2xl xl:text-xl text-left">
                  Flutter based mobile webapp letting users create wishlists and
                  exchange gift groups while also matchmaking the group
                  automatically.
                </h1>
                <h2 className="2xl:text-lg xl:text-md text-right">@2023</h2>
              </figcaption>
            </figure>
          </div>
          <div className="2xl:w-[450px] xl:w-[350px] aspect-[4/3] rounded-xl shadow z-10 overflow-hidden">
            <figure className="relative object-cover rounded-xl overflow-hidden">
              <Image
                className="rounded-xl"
                src={Nipponware}
                alt="nipponware image"
              />
              <figcaption className="absolute left-0 bottom-0 h-full flex flex-col justify-between align-middle text-center break-normal bg-custom_accent2 2xl:p-8 xl:p-6 opacity-0 ease-in-out hover:opacity-100 duration-500">
                <h1 className="2xl:text-2xl xl:text-xl text-left">
                  NextJS based webapp and Flutter based mobile app for
                  digitalizing order and inventory processes with third party
                  promodisers and suppliers.
                </h1>
                <h2 className="2xl:text-lg xl:text-md text-right">@2023</h2>
              </figcaption>
            </figure>
          </div>
          <div className="2xl:w-[450px] xl:w-[350px] aspect-[4/3] rounded-xl shadow z-10 overflow-hidden">
            <figure className="relative object-cover rounded-xl overflow-hidden">
              <Image className="rounded-xl" src={CGC} alt="cgc image" />
              <figcaption className="absolute left-0 bottom-0 h-full flex flex-col justify-between align-middle text-center break-normal bg-custom_accent2 2xl:p-8 xl:p-6 opacity-0 ease-in-out hover:opacity-100 duration-500">
                <h1 className="2xl:text-2xl xl:text-xl text-left">
                  NextJS based webapp using Firebase permitting church leaders
                  to view and encode all personal and baptismal records online.
                </h1>
                <h2 className="2xl:text-lg xl:text-md text-right">@2023</h2>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </main>
  );
}
