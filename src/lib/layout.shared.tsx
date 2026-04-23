import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { gitConfig } from "./shared";
import { PepiconsPopInternet, IcBaselineDiscord } from "@/components/icons";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: <img src={"/logo.png"} className="h-8" />,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        icon: <PepiconsPopInternet />,
        text: "Website",
        type: "button",
        url: "https://unityscripts.net",
      },
      {
        icon: <IcBaselineDiscord />,
        text: "Discord",
        type: "button",
        url: "https://discord.gg/unityscripts",
      },
    ],
  };
}
