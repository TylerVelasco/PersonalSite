import SectionHeader from "../../components/SectionHeader";
import { Bug, UsersFour, PersonSimpleHike, Coffee } from "@phosphor-icons/react";
import IconCard from "../../components/IconCard";
import "../css/AboutSection.css";

export default function AboutSection() {
    return (
        <div className="flex">
            <div className="mx-auto w-full text-center">
                <SectionHeader title="About Me" />
                <p className="mt-4 text-2xl md:text-3xl sm:text-xl font-medium text-gray-600 dark:text-gray-300">
                    Hey! I’m a QA Engineer with 7 years of experience making sure software behaves itself—even when it really doesn’t want to.
                </p>
                <p className="mt-4 text-2xl md:text-3xl sm:text-xl font-medium text-gray-600 dark:text-gray-300">
                    Outside the world of <span className="relative group">
                        bugs
                        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center bg-gray-800 text-white text-md px-2 py-1 rounded shadow-lg">
                            <Bug className="mr-1" size={36} />
                            Bug
                        </span>
                    </span> and automation, I’m usually chasing a different kind of adventure: raising two amazing little girls with my awesome wife. Whether we’re out hiking a trail, finding the next unique bite to eat, or just navigating the wild terrain of bedtime routines, family life is my favorite kind of chaos.
                </p>
                <p className="mt-4 text-2xl md:text-3xl sm:text-xl font-medium text-gray-600 dark:text-gray-300">
                    I run on cold brew, dad jokes, and a healthy obsession with finding the best breakfast. Oh, and we’ve got a couple of dogs who keep life interesting—but let’s be real, the kids run the show.
                </p>
                {/* Icon Cards */}
                <div className="icon-card-container">
                    <IconCard icon={UsersFour} label="Family" />
                    <IconCard icon={PersonSimpleHike} label="Hiking" />
                    <IconCard icon={Coffee} label="Coffee" />
                </div>
            </div>
        </div>
    );
}