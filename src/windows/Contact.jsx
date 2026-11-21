
import { useState } from "react";
import { Copy, Check, Mail, Github, Linkedin, Code2, Trophy, ExternalLink } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import WindowControls from "#components/WindowControls";

const EMAIL = "sonamnarula2108@gmail.com";

const socials = [
    {
        name: "GitHub",
        detail: "Explore my repositories",
        href: "https://github.com/SonamNarula",
        icon: Github,
        color: "#24292f",
    },
    {
        name: "LinkedIn",
        detail: "Let's connect professionally",
        href: "https://www.linkedin.com/in/sonamnarula",
        icon: Linkedin,
        color: "#0A66C2",
    },
    {
        name: "LeetCode",
        detail: "My problem-solving profile",
        href: "https://leetcode.com/sonamnarula2005",
        icon: Code2,
        color: "#B87524",
    },
    {
        name: "Codolio",
        detail: "My coding portfolio",
        href: "https://codolio.com/profile/0PG2lf5S",
        icon: Trophy,
        color: "#6554C0",
    },
];

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white">
            <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
                <WindowControls target="contact" />
                <h2 className="text-sm font-semibold text-gray-700">
                    Contact Me
                </h2>
                <div className="w-10" />
            </div>

            <div className="space-y-5 overflow-y-auto p-6">
                <div>
                    <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                        <Mail size={30} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-800">
                        Let's Connect
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                        Have an opportunity, an interesting idea, or just want to talk
                        tech? I'd love to hear from you.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={handleCopy}
                    className="flex w-full items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 p-4 text-left transition hover:bg-gray-100"
                >
          <span className="flex min-w-0 items-center gap-3">
            <Mail size={20} className="shrink-0 text-gray-500" />
            <span className="truncate text-sm font-medium text-gray-700">
              {EMAIL}
            </span>
          </span>

                    {copied ? (
                        <Check size={19} className="shrink-0 text-green-600" />
                    ) : (
                        <Copy size={19} className="shrink-0 text-gray-400" />
                    )}
                </button>

                {copied && (
                    <p className="text-xs text-green-600">
                        Email address copied!
                    </p>
                )}

                <div>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Find me online
                    </h4>

                    <div className="grid grid-cols-2 gap-3">
                        {socials.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex min-h-28 flex-col justify-between rounded-xl p-4 text-white transition hover:-translate-y-1 hover:shadow-lg"
                                    style={{ backgroundColor: social.color }}
                                >
                                    <div className="flex items-center justify-between">
                                        <Icon size={23} />
                                        <ExternalLink
                                            size={14}
                                            className="opacity-60 transition group-hover:opacity-100"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-sm font-bold">{social.name}</p>
                                        <p className="mt-1 text-xs text-white/75">
                                            {social.detail}
                                        </p>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>

                <a
                    href={`mailto:${EMAIL}`}
                    className="block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                    Send me an email
                </a>
            </div>
        </div>
    );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
