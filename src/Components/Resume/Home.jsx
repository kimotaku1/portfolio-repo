import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex-[3] transition-all duration-500 dark:bg-black dark:text-white">
      <main className="flex max-w-[1000px] flex-col gap-10 p-5 md:mx-10 md:py-14">
        <div className="space-y-5">
          <h1 className="text-2xl font-bold md:text-4xl">About</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 md:text-base">
            Motivated and detail-oriented Full Stack Developer with a strong
            foundation in Information Management. Proficient in React.js,
            MongoDB, and modern web development technologies including Vite,
            Tailwind CSS, and Node.js. Experienced in building dynamic,
            responsive web applications with an emphasis on clean code and
            scalable architecture. Hands-on experience gained through
            collaborative hackathon projects and personal initiatives,
            demonstrating a passion for problem-solving and innovation. Adept at
            working in fast-paced environments, both individually and in teams,
            with a focus on enhancing user experience and implementing efficient
            backend systems. Eager to apply technical expertise and creativity
            in an internship or professional setting to drive impactful digital
            solutions and solve real-world problems.
          </p>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl">Experience</h1>

          <div className="flex flex-col lg:flex-row lg:gap-20">
            <ul>
              <li className="relative  flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">
                  Full Stack Developer (Freelance)
                </span>
                <span className="font-light">Remote</span>
                <span className="text-sm text-gray-400">
                  June 2023 – Present
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Developed and deployed responsive web applications using
                  React.js, Node.js, and MongoDB, enhancing user interfaces and
                  optimizing backend performance. Integrated third-party APIs
                  and services, ensuring seamless data communication and
                  enhancing functionality. Collaborated with clients to gather
                  requirements, propose technical solutions, and deliver
                  projects on time. Utilized Tailwind CSS and DaisyUI for custom
                  styling, ensuring high-performance and visually appealing
                  UI/UX.
                </p>
              </li>
              <li className="relative  flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">
                  Hackathon Participant
                </span>
                <span className="font-light">Various Locations</span>
                <span className="text-sm text-gray-400">2022 – Present</span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Participated in multiple hackathons, building innovative web
                  applications under tight deadlines and collaborating in
                  cross-functional teams. Led the development of a chat
                  application with real-time messaging functionality using
                  React.js, MongoDB, and Socket.io. Leveraged modern JavaScript
                  frameworks and libraries, such as Vite, to ensure optimal
                  build performance and development experience.
                </p>
              </li>
            </ul>
            <ul>
              <li className="relative  flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">
                  Backend Developer – Chat Application Project
                </span>
                <span className="font-light">Academic Project</span>
                <span className="text-sm text-gray-400">
                  May 2023 – September 2023
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Designed and implemented a RESTful API using Node.js and
                  Express, with a MongoDB database to handle user
                  authentication, messaging, and chatroom management. Developed
                  and tested middleware, controllers, and routes, ensuring
                  clean, modular code for scalability and maintainability.
                  Collaborated with frontend developers to integrate the API
                  with a user-friendly React.js interface.
                </p>
              </li>
              <li className="relative  flex flex-col gap-1 border-l p-6 before:absolute before:left-[-6px] before:top-1/2 before:h-3 before:w-3 before:translate-y-1/2 before:rounded-full before:bg-black dark:before:bg-white before:transform">
                <span className="text-lg font-semibold">
                  Frontend Developer (Volunteer Project)
                </span>
                <span className="font-light">Open Source Contribution</span>
                <span className="text-sm text-gray-400">
                  July 2023 – September 2023
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Contributed to an open-source project by developing
                  interactive, mobile-responsive components using React.js and
                  Tailwind CSS. Improved website accessibility by implementing
                  WAI-ARIA standards, enhancing user experience for all
                  audiences. Collaborated with a distributed team of developers
                  via GitHub, actively participating in code reviews and project
                  discussions. Identified and fixed bugs in existing components,
                  improving performance and ensuring cross-browser
                  compatibility.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-3xl space-y-8">
          <h1 className="text-2xl font-bold md:text-4xl">Certificates</h1>

          <div className="space-y-10">
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                JavaScript Algorithms and Data Structures (2023)
              </h3>
              <p className="text-sm text-gray-600  dark:text-gray-400 md:text-base">
                {" "}
                Completed over 300 coding challenges focused on JavaScript
                fundamentals, including recursion, sorting algorithms, and data
                manipulation techniques. Developed problem-solving skills by
                applying algorithms in real-world scenarios, such as creating
                search and sorting functions.
              </p>
            </div>
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                React - The Complete Guide (incl. Hooks, React Router, Redux)
                (2023)
              </h3>
              <p className="text-sm text-gray-600  dark:text-gray-400 md:text-base">
                In-depth training on React.js covering class and functional
                components, React hooks, React Router for navigation, and Redux
                for complex state management. Built several interactive web
                applications, learning how to optimize performance and manage
                side effects using hooks like useEffect and useState.
              </p>
            </div>
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                Backend Development with Node.js and Express (2024)
              </h3>
              <p className="text-sm text-gray-600  dark:text-gray-400 md:text-base">
                Gained hands-on experience in building scalable and secure
                RESTful APIs with Node.js and Express. Learned essential backend
                concepts such as middleware, authentication (JWT), error
                handling, and session management. Created and deployed a fully
                functional backend project integrating MongoDB for data storage.
              </p>
            </div>
            <div className="text-baseline space-y-3">
              <h3 className="text-sm font-semibold md:text-lg">
                MongoDB Basics (2023)
              </h3>
              <p className="text-sm text-gray-600  dark:text-gray-400 md:text-base">
                Acquired knowledge of MongoDB’s architecture, including
                document-oriented design, collections, and BSON format.
                Implemented CRUD operations, created indexes to optimize
                queries, and worked with aggregation pipelines for data
                analysis. Applied MongoDB in building and maintaining databases
                for small-to-medium scale web applications.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-bold md:text-4xl ">References</h1>

          <div className="flex flex-wrap gap-10">
            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">
                Senior Software Engineer, XYZ Solutions
              </h3>
              <h2 className="text-base font-semibold md:text-2xl">John Doe</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: +123 456 7890
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Email: john.doe@xyzsolutions.com
              </p>
            </div>
            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">
                Project Manager, ABC Digital
              </h3>
              <h2 className="text-base font-semibold md:text-2xl">
                Jane Smith
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: +123 987 6543
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Email: jane.smith@abcdigital.com
              </p>
            </div>
            <div className="text-baseline space-y-1">
              <h3 className="text-lg font-light">Mobile Developer</h3>
              <h2 className="text-base font-semibold md:text-2xl">
                Mr. daisy John
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Phone: 9826129302
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Email: user@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
