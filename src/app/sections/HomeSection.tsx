import Image from "next/image";
import { GithubLogo, LinkedinLogo, DownloadSimple, Bug } from "@phosphor-icons/react"; // Import icons from phosphor-icons
import profileImage from "../../assets/profile.jpg"; // Import the image

export default function HomeSection() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="absolute top-10 text-center">
                <h1
                    className="text-5xl md:text-8xl sm:text-6xl font-bold"
                    style={{ fontFamily: "'Playwrite MX Guides', sans-serif" }}
                >
                    Tyler Velasco
                </h1>
                <h2 className="text-3xl md:text-4xl sm:text-xl font-medium mt-2 text-gray-600 dark:text-gray-300">
                    QA Engineer / SDET
                </h2>
                <p className="text-2xl md:text-2xl sm:text-base mt-2 text-gray-500 dark:text-gray-400 italic">
                    Break less, test more—quality isn’t a number, it’s a mindset.
                </p>
                <div className="flex justify-center gap-8 mt-6">
                    <a
                        href="/path-to-resume.pdf" // Replace with the actual path to your resume
                        download
                        className="flex items-center justify-center text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        title="Download Resume"
                    >
                        <DownloadSimple size={64} className="md:w-16 md:h-16 sm:w-8 sm:h-8" />
                    </a>
                    <a
                        href="https://github.com/TylerVelasco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        title="GitHub Profile"
                    >
                        <GithubLogo size={64} className="md:w-16 md:h-16 sm:w-8 sm:h-8" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tyler-velasco-51388a125"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                        title="LinkedIn Profile"
                    >
                        <LinkedinLogo size={64} className="md:w-16 md:h-16 sm:w-8 sm:h-8" />
                    </a>
                </div>
                <div className="flex justify-center">
                    <div className="group perspective mt-10">
                        <div className="text-center relative w-75 h-75 md:w-75 md:h-75 sm:w-32 sm:h-32 preserve-3d group-hover:rotate-y-180 duration-700">
                            <div className="absolute backface-hidden">
                                <Image
                                    src={profileImage}
                                    alt="Profile"
                                    className="rounded-lg"
                                    width={600}
                                    height={600}
                                />
                            </div>
                            <div className="absolute w-full h-full bg-gray-800 text-white flex flex-col items-center justify-center rounded-lg rotate-y-180 backface-hidden">
                                <Bug size={64} className="mb-2 md:w-12 md:h-12 sm:w-8 sm:h-8" /> {/* Bug icon */}
                                <p className="text-center text-lg md:text-sm sm:text-xs">
                                    Oh you found a bug, nice!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}