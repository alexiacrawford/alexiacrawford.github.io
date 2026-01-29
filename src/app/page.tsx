'use client';
import TopBar from '@/components/TopBar';
import Image from 'next/image';


export default function Home() {
  return (
    // see if i can push
    <>
      <main className="relative z-10 flex flex-col lg:flex-row w-full min-h-screen">
        {/* Left section (sticky header/intro) */}
        <div className="w-full lg:w-[40%] flex flex-col justify-start items-start pl-20 pr-10 py-10 lg:sticky lg:top-0 h-fit lg:h-screen lg:items-end lg:pr-0">
          <div className="w-full lg:w-auto lg:pl-0 lg:pr-10">
          <Image
            src="/headshot.jpg"
            alt="Alexia Crawford"
            width={256}
            height={256}
            unoptimized
            className="w-64 h-64 rounded-full object-cover mb-6 border-2 border-white"
          />
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white pl-0 lg:pl-0">Alexia Crawford</h1>
            <p className="text-lg text-gray-300 max-w-md pl-6 lg:pl-0">
              Software Developer, Tech analyst, and CS Student at University of Oregon
            </p>
            <TopBar />
          </div>
        </div>
        <div className="w-full lg:w-[20%]"></div>

        {/* Right section (scrollable content) */}
        <div className="w-full lg:w-[40%] px-10 py-20 space-y-24">
          {/* Replace these with real content later */}
          <section id="about">
            <h2 className="text-3xl font-semibold mb-4 text-white pl-2">About</h2>
            <p className="text-gray-400 pl-2">I am a fourth-year Computer Science student at the University of Oregon, with minors in Math and Sociology. I am passionate about web design, technology, software development, and more. I&apos;ve also worked on game projects and thoroughly enjoyed it and plan to work on more in the future.</p><br></br>
            <p className="text-gray-400 pl-2">I&apos;m currently exploring topics in AI, digital forensics, and fashion/ second hand shopping. I am actively working on two websites, one for AI assisted fashion and another for finding second hand sales in your area. I am learning many new tools and technologies.</p><br></br>
            <p className="text-gray-400 pl-2">I&apos;m currently seeking job opportunities where I can continue to grow, learn, work with professionals, and make an impact.</p>
          </section>

            <section id="experience">
            <h2 className="text-3xl font-semibold mb-4 text-white pl-2">Experience</h2>
            <div className="space-y-6">

              {/* Experience 1 */}
              <div className="group flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5">
                <div className="text-sm text-gray-400 min-w-[100px] sm:pt-1">Jan. 2025 (current)</div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition duration-200">
                    Technology Analyst | University of Oregon
                  </h3>
                  <ul className="text-gray-400 mt-1 text-sm list-disc list-inside space-y-1">
                    <li>Assisted with software issues by clarifying user questions and identifying problems.</li>
                    <li>Provided technical and functional recommendations based on user requirements.</li>
                    <li>Administered and maintained anti-virus and anti-malware software on end-user computing devices.</li>
                  </ul>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="group flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5">
                <div className="text-sm text-gray-400 min-w-[100px] sm:pt-1">Jun. 2024 &ndash; Sep. 2024</div>
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition duration-200">
                    Software Developer Intern | Rhebus, Inc.
                  </h3>
                  <ul className="text-gray-400 mt-1 text-sm list-disc list-inside space-y-1">
                    <li>Demonstrated adaptability by learning and applying new technologies, tools, and methods.</li>
                    <li>Developed problem-solving skills by troubleshooting issues.</li>
                    <li>Worked with developers to identify and remove software bugs.</li>
                    <li>Collaborated with team members to design, develop, and launch a software product.</li>
                    <li>Supported development and QA staff to develop new products.</li>
                    <li>Learned how to write simple test cases for back end software.</li>
                  </ul>
                </div>
              </div>

            </div>


          </section>
          <div className="pt-6">
          <a
            href="/Crawford_Alexia-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-lime-300 transition duration-200"
          >
            View Full Résumé <span aria-hidden="true">↗</span>
          </a>
        </div>


          <section id="projects">
          <h2 className="text-3xl font-semibold mb-6 text-white pl-2">Projects</h2>
          <div className="space-y-6">
            <a
              href="https://github.com/alexiacrawford/Cone_Crisis"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row gap-4 p-5 rounded-lg transition-colors duration-200 hover:bg-white/5"
            >
            <Image
              src="/ConeCrisis.png"
              alt="Project 3 thumbnail"
              width={160}
              height={112}
              className="w-full md:w-40 h-28 object-cover rounded-md border border-white/10"
            />

              <div>
                <h3 className="text-lg font-semibold text-white group-hover:text-lime-300 transition duration-200">
                  Cone Crisis
                </h3>
                <p className="text-gray-400 mt-1 text-sm">
                  Cone Crisis is a fast-paced ice cream shop simulator developed in Unity where players manage customer orders under time pressure. Gameplay includes scooping flavors, building sundaes, and handling increasing difficulty as customer demand rises. Designed with responsive UI, custom shaders, and smooth animations to deliver an engaging experience. Features player progression, scoring, and in-game tutorials.                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['C#', 'Unity', 'ShaderLab', 'HLSL', 'Game Development'].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </section>

          

        </div>
      </main>
    </>
  );
}
