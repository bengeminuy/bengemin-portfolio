import Image from "next/image";
import Nokia from "../../public/images/work/nokia.png";
import Microlines from "../../public/images/work/microlines.png";
import Streamline from "../../public/images/work/streamline.png";
import Nipponware from "../../public/images/work/nipponware.png";

export default function MobileWork() {
  return (
    <div className="flex md:hidden flex-col gap-4 text-sm portrait:pb-20 w-full portrait:overflow-y-auto scrollable-div">
      <div className="flex flex-col items-center w-full gap-4">
        <Image className="timeline-img" src={Nokia} alt={"nokia logo"} />
        <div className="bg-custom_accent2 p-6 rounded-md shadow-md">
          <span className="font-bold text-white text-xs tracking-wide">
            June 2017 to August 2017
          </span>
          <h1 className="text-xl text-custom_accent font-bold pt-1">
            {"Nokia - Internship"}
          </h1>
          <ul className="pt-1 list-disc pl-8 text-left">
            <li>
              Developed the backend for a meeting room reservation app that
              helped lessen wasted time caused by various teams using the same
              meeting room at a particular time.
            </li>
            <li>
              Led the creation of a monitoring app for checking incoming and
              ongoing prontos that shortened response times and turnaround times
              after allowing teams to monitor these more easily.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-4">
        <Image className="timeline-img" src={Nokia} alt={"nokia logo"} />
        <div className="bg-custom_accent2 p-6 rounded-md shadow-md">
          <span className="font-bold text-white text-xs tracking-wide">
            August 2018 to December 2019
          </span>
          <h1 className="text-xl text-custom_accent font-bold pt-1">
            {"Nokia - Software Engineer"}
          </h1>
          <ul className="pt-1 text-left list-disc pl-8">
            <li>
              Solved various bugs in the team that mainly handles the
              communication between the various teams in the company.
            </li>
            <li>
              Refactored and improved on legacy code speeding up the packaged
              software by around twenty percent.
            </li>
            <li>
              Proactively spearheaded various features that clients requested
              from our team.
            </li>
            <li>
              Developed a tool for the managers that helped in boosting
              productivity and was awarded for it.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-4">
        <Image
          className="timeline-img"
          src={Microlines}
          alt={"microlines logo"}
        />
        <div className="bg-custom_accent2 p-6 rounded-md shadow-md">
          <span className="font-bold text-white text-xs tracking-wide">
            January 2020 to December 2022
          </span>
          <h1 className="text-xl text-custom_accent font-bold pt-1">
            {"Microlines Sales Corporation - Fullstack Developer"}
          </h1>
          <ul className="pt-1 text-left list-disc pl-8">
            <li>
              Developed a webapp from the ground up for digitalizing all the
              records, be it sales, payments, or reports, of the company.
            </li>
            <li>
              Sped up the productivity of the company by removing all double
              effort tasks produced by erroneous written encoding and making
              data accessible instantaneously regardless of location.
            </li>
            <li>
              Worked alongside encoders and managers to fulfill feature requests
              and suggest any necessary improvement to their needs.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-4">
        <Image
          className="timeline-img"
          src={Streamline}
          alt={"streamline logo"}
        />
        <div className="bg-custom_accent2 p-6 rounded-md shadow-md">
          <span className="font-bold text-white text-xs tracking-wide">
            January 2023 to December 2023
          </span>
          <h1 className="text-xl text-custom_accent font-bold pt-1">
            {"Streamline Blinds Corporation - Fullstack Developer"}
          </h1>
          <ul className="pt-1 text-left list-disc pl-8">
            <li>
              Developed a webapp that digitalized and centralized all their data
              while also linking it to the database for Microlines as per the
              request from both Microlines and Streamline.
            </li>
            <li>
              Created more automated in-depth report generating tools as
              requested by managers that eliminated the slow turnover of data
              from one branch to another.
            </li>
            <li>
              Improved queries and shortened overall loading times for a
              smoother experience for all users.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center w-full gap-4">
        <Image
          className="timeline-img"
          src={Nipponware}
          alt={"nipponware logo"}
        />
        <div className="bg-custom_accent2 p-6 rounded-md shadow-md">
          <span className="font-bold text-white text-xs tracking-wide">
            January 2024 to Present
          </span>
          <h1 className="text-xl text-custom_accent font-bold pt-1">
            {"Nipponware Dinnerware  - Fullstack Developer"}
          </h1>
          <ul className="pt-1 text-left list-disc pl-8">
            <li>
              Developed a webapp for internal use and a mobile companion app for
              customer use, digitalizing and automating various processes in
              their business.
            </li>
            <li>
              Worked alongside encoders, customers, and managers to develop
              various features that led to faster business processes.
            </li>
            <li>
              Conducted huge training seminars to easily teach all every single
              user type how to use the respective webapp and mobile app with
              regards to all supported business processes.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}