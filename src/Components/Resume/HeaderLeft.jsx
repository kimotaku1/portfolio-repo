import React from "react";
import profile_img from "../../assets/profile_img.jpg";
import {
  BiCurrentLocation,
  BiEnvelope,
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiMoon,
  BiPhone,
  BiSun,
} from "react-icons/bi";

const HeaderLeft = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="min-h-screen flex-1 relative p-10 transition-all duration-500 dark:bg-black dark:text-white sm:border-r dark:border-gray-700">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={profile_img} alt="" className="w-32 h-32 rounded-full " />

          <div className="text-center space-y-1">
            <h1 className="text-4xl font-light">
              Bibek <span className="font-semibold">Bhandari</span>
            </h1>
            <h3 className="text-xl font-light">Web Developer</h3>
          </div>

          <button className="absolute right-10 top-10" onClick={toggleDarkMode}>
            {darkMode ? (
              <BiSun className="text-2xl" />
            ) : (
              <BiMoon className="text-2xl" />
            )}
          </button>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiCurrentLocation className="text-xl" />
              <span>Sunakothi, Lalitpur</span>
            </li>
            <li className="flex items-center gap-2">
              <BiEnvelope className="text-xl" />
              <span>narutobibek000@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <BiPhone className="text-xl" />
              <span>9810121270</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SOCIAL</h1>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <BiLogoGithub className="text-xl" />
              <span>github.com/kimotaku1</span>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoTwitter className="text-xl" />
              <span>twitteruser</span>
            </li>
            <li className="flex items-center gap-2">
              <BiLogoLinkedin className="text-xl" />
              <span>linkedinuser</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">EDUCATION</h1>
          <ul>
            <li className="relative  flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">+2</span>
              <span className="font-light">NEB</span>
              <span className="text-sm text-gray-400">2075-2078</span>
            </li>
            <li className="relative  flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">
                Information Management
              </span>
              <span className="font-light">Tribhuvan University</span>
              <span className="text-sm text-gray-400">2079-2083</span>
            </li>
            <li className="relative  flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
              <span className="font-semibold md:text-lg">Business School</span>
              <span className="font-light">university y</span>
              <span className="text-sm text-gray-400">2023- on going</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">SKILLS</h1>
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black text-white p-2 text-center dark:bg-white dark:text-black">
                HTML
              </span>
              <span className="rounded-xl bg-black text-white p-2 text-center dark:bg-white dark:text-black">
                CSS
              </span>
              <span className="rounded-xl bg-black text-white p-2 text-center dark:bg-white dark:text-black">
                JavaScript
              </span>
              <span className="rounded-xl bg-black text-white p-2 text-center dark:bg-white dark:text-black">
                React
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-xl bg-black text-white p-2 text-center dark:bg-white dark:text-black">
                Next.js
              </span>
              <span className="rounded-xl bg-black text-white p-2 text-center dark:bg-white dark:text-black">
                MongoDB
              </span>
              <span className="rounded-xl bg-black text-white p-2 text-center dark:bg-white dark:text-black">
                Express.js
              </span>
              <span className="rounded-xl bg-black text-white p-2 text-center dark:bg-white dark:text-black">
                Problem-Solving
              </span>
              <span className="rounded-xl bg-black text-white p-2 text-center dark:bg-white dark:text-black">
                Adaptability
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">HOBBIES</h1>
          <div className="flex flex-wrap gap-16 p-3">
            <ul className="flex list-disc flex-col gap-3">
              <li>Coding and Development</li>
              <li>Workout</li>
              <li>Traveling</li>
            </ul>
            <ul className="flex list-disc flex-col gap-3">
              <li>Hiking</li>
              <li>Gaming</li>
              <li>Reading Books</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-5 border-b p-5 dark:border-gray-700">
          <h1 className="text-base font-semibold md:text-2xl">LANGUAGES</h1>
          <ul className="flex list-disc flex-wrap gap-12 md:text-lg">
            <li>English</li>
            <li>Nepali</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
