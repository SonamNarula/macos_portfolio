
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
    BriefcaseBusiness,
    Code2,
    Trophy,
    Mail,
    ArrowDownRight,
    ExternalLink,
} from "lucide-react";

const socialLinks = [
    {
        name: "LinkedIn",
        handle: "Let's connect",
        href: "https://www.linkedin.com/in/sonamnarula",
        icon: BriefcaseBusiness,
    },
    {
        name: "LeetCode",
        handle: "sonamnarula2005",
        href: "https://leetcode.com/sonamnarula2005",
        icon: Code2,
    },
    {
        name: "Codolio",
        handle: "Coding profile",
        href: "https://codolio.com/profile/0PG2lf5S",
        icon: Trophy,
    },
    {
        name: "Email",
        handle: "Let's talk",
        href: "mailto:sonamnarula2108@gmail.com",
        icon: Mail,
    },
];

const Welcome = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".welcome-item",
                { opacity: 0, y: 25 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="flex min-h-screen items-center justify-center px-5 pb-16 pt-20 text-white"
        >
            <div className="w-full max-w-3xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl sm:p-12">

                <div className="welcome-item mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/80">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                    Available to connect
                </div>

                <p className="welcome-item mb-3 text-lg text-white/70">
                    Hello there, I'm
                </p>

                <h1 className="welcome-item text-5xl font-bold tracking-tight sm:text-7xl">
                    Sonam Narula<span className="text-blue-300">.</span>
                </h1>

                <h2 className="welcome-item mt-5 text-xl font-medium text-white/90 sm:text-2xl">
                    Developer. Problem Solver. Curious Mind.
                </h2>

                <p className="welcome-item mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                    A Computer Science student who loves building things,
                    solving problems, and exploring the world of technology.
                    Welcome to my little corner of the internet.
                </p>

                <div className="welcome-item mt-9 flex flex-wrap gap-3">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.name}
                                href={social.href}
                                target={social.name === "Email" ? undefined : "_blank"}
                                rel="noreferrer"
                                className="group flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                            >
                                <Icon size={20} />

                                <div>
                                    <p className="text-sm font-semibold">
                                        {social.name}
                                    </p>
                                    <p className="text-xs text-white/60">
                                        {social.handle}
                                    </p>
                                </div>

                                <ExternalLink
                                    size={13}
                                    className="ml-1 opacity-50 transition group-hover:opacity-100"
                                />
                            </a>
                        );
                    })}
                </div>

                <div className="welcome-item mt-10 flex items-center gap-2 text-sm text-white/60">
                    <ArrowDownRight size={18} />
                    Explore my desktop to know more about me
                </div>

            </div>
        </section>
    );
};

export default Welcome;
