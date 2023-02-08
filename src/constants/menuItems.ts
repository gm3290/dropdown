import { Menu } from "../types/menu";

export const NAV_LIST: Array<Menu> = [
  {
    label: "About",
    items: [
      { label: "About", path: "/about" },
      { label: "Documentation", path: "/docs" },
      {
        label: "Code",
        path: "https://github.com/Deeplink-Network",
        external: true,
      },
      { label: "Career", path: "/career" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    label: "Technology",
    items: [
      { label: "Eta X", path: "/etax" },
      { label: "Cnidaria", path: "/cnidaria" },
      { label: "DeepBrew", path: "/brew" },
      { label: "Clusters", path: "/cluster" },
    ],
  },
  {
    label: "Research",
    path: "/research",
  },
  {
    label: "Open R&D DAO",
    items: [
      {
        label: "Progress",
        path: "/progress",
      },
      {
        label: "Accomplishment Report",
        path: "/report",
      },
    ],
  },
  {
    label: "Airdrop & Staking",
    path: "https://dg.deeplink.network/",
    external: true,
  },
];
