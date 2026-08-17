export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  status: "active" | "stable" | "development" | "archived";
  technologies: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Home Assistant Dashboard",
    slug: "home-assistant-dashboard",
    category: "Home Automation",
    description:
      "Zentrale Visualisierung und Steuerung für Energie, Klima, Beleuchtung und weitere Smart-Home-Systeme.",
    status: "active",
    technologies: [
      "Home Assistant",
      "MQTT",
      "ESPHome",
    ],
    featured: true,
  },

  {
    title: "ESP32 Desk Controller",
    slug: "esp32-desk-controller",
    category: "ESP32 / IoT",
    description:
      "Touchbasierte Schreibtischsteuerung für Beleuchtung, Relais, Audio und weitere Geräte.",
    status: "development",
    technologies: [
      "ESP32-S3",
      "ESPHome",
      "LVGL",
      "I2C",
    ],
    featured: true,
  },

  {
    title: "QIDI Plus 4",
    slug: "qidi-plus-4",
    category: "3D-Druck",
    description:
      "Optimierung und Erweiterung des 3D-Druckers mit Klipper, Beacon und angepasster Hardware.",
    status: "development",
    technologies: [
      "Klipper",
      "Beacon",
      "OrcaSlicer",
    ],
    featured: true,
  },

  {
    title: "Homelab",
    slug: "homelab",
    category: "Server",
    description:
      "Virtualisierung, Container und Netzwerkdienste als zentrale Plattform für meine Infrastruktur.",
    status: "active",
    technologies: [
      "Proxmox",
      "Docker",
      "Linux",
      "MQTT",
    ],
    featured: true,
  },
];