// ============================================================
// Site Configuration — Single Source of Truth
// ============================================================
// Edit this file to update all personal information on the homepage.
// No component code changes are needed.
// ============================================================

export interface SiteConfig {
  profile: {
    name: string;
    title: string;
    /** Keyed by language prefix: "en-US", "en", "ja", etc. "en" is the fallback. */
    description: Record<string, string>;
    avatar: string;
    avatarFallback?: string;
    avatarAlt?: string;
    aliases?: string[];  // Typewriter cycling names
    location?: string;
  };
  interests: string[];
  hardware: {
    category: string;
    icon: string;   // Lucide icon name: "Apple", "Monitor", etc.
    items: string[];
  }[];
  software: {
    name: string;
    icon: string;   // filename = /icons/software/{name}.svg | URL = CDN | "" = letter fallback
  }[];
  socialLinks: {
    platform: "github" | "telegram" | "discord" | "email" | "twitter" | "linkedin" | "youtube" | "bilibili" | "vrchat" | "steam" | "blog" | "vrcx-cloud" | "website";
    url: string;
    enabled: boolean;
  }[];
  friends: {
    name: string;
    avatar: string;
    url: string;
    description?: string;
  }[];
  projects: {
    name: string;
    description: string;
    url: string;
    tags?: string[];
  }[];
  spotify?: {
    enabled: boolean;
    user: string;
    playlistUrl: string;
  };

  github?: {
    /** GitHub username for contribution heatmap */
    username: string;
  };
  blog?: {
    enabled: boolean;
    posts?: { title: string; description: string; url: string; date?: string }[];
  };
  vrchat?: {
    /** VRCX-Cloud API base URL */
    apiBase: string;
    /** VRChat User ID */
    userId: string;
    /** Number of bio lines to display, default 3 */
    bioLines?: number;
  };
  map?: {
    /** Mapbox public access token (pk.xxx) */
    accessToken: string;
    /** Map center: [lng, lat] */
    center: [number, number];
    /** Initial zoom level (1-18) */
    zoom: number;
    /** City markers */
    markers: {
      name: string;
      coordinates: [number, number]; // [lng, lat]
      emoji?: string;
    }[];
  };
  weather?: {
    city: string;
    lat: number;
    lon: number;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
    siteUrl: string;
  };
  theme: {
    tintColor: string;
    tintColorRGB: string;
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
  };
}

export const siteConfig: SiteConfig = {
  profile: {
    name: "DHANALAKSHMI K",
    title: "Computer Science & Cybersecurity",
    description: {
      en: "B.E. Student at Sri Sai Ram Institute of Technology focused on secure systems, OSINT, and AI-driven solutions.",
    },
    avatar: "https://github.com/Dhana-27.png",
    avatarFallback: "DL",
    avatarAlt: "Dhana Lakshmi Profile",
    location: "Chennai, India",
  },

  interests: [
    "Cybersecurity",
    "Quantum Systems",
    "Machine Learning",
    "Pentesting",
    "OSINT",
    "Cloud Computing",
    "Competitive Programming"
  ],

  hardware: [
    { category: "Systems", icon: "Monitor", items: ["Linux", "Docker", "Cisco Packet Tracer"] },
    { category: "Development", icon: "Terminal", items: ["Python", "Java", "C/C++", "SQL"] },
    { category: "Security Tools", icon: "Shield", items: ["Metasploit", "Hydra", "Shodan", "TryHackMe"] }
  ],

  software: [
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "Vertex AI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "FlutterFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" }
  ],
  socialLinks: [
    { platform: "github", url: "https://github.com/Dhana-27", enabled: true },
    { platform: "linkedin", url: "https://linkedin.com/in/dhanalakshmi-k-tech", enabled: true },
    { platform: "email", url: "mailto:dhanalakshmi.k.tech@gmail.com", enabled: true },
    { platform: "website", url: "https://sairamit.edu.in/", enabled: true }
  ],

  friends: [
    {
      name: "Google AI Essentials",
      avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
      url: "https://linkedin.com/in/dhanalakshmi-k-tech",
      description: "Google"
    },
    {
      name: "Cybersecurity Threat Landscape",
      avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
      url: "https://linkedin.com/in/dhanalakshmi-k-tech",
      description: "LinkedIn"
    },
    {
      name: "Foundations of Cybersecurity",
      avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
      url: "https://linkedin.com/in/dhanalakshmi-k-tech",
      description: "Coursera"
    },
    {
      name: "UiPath Agentic Automation",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/2/25/UiPath_Logo.svg",
      url: "https://linkedin.com/in/dhanalakshmi-k-tech",
      description: "UiPath"
    },
    {
      name: "IEEE Membership",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg",
      url: "https://linkedin.com/in/dhanalakshmi-k-tech",
      description: "IEEE"
    },
    {
      name: "Google Solution Challenge",
      avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
      url: "https://linkedin.com/in/dhanalakshmi-k-tech",
      description: "GDSC"
    },
    {
      name: "Database Management System",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      url: "https://linkedin.com/in/dhanalakshmi-k-tech",
      description: "Infosys"
    },
    {
      name: "Connect and Protect: Networks",
      avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
      url: "https://linkedin.com/in/dhanalakshmi-k-tech",
      description: "Google"
    },
    {
      name: "Manage Security Risks",
      avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
      url: "https://linkedin.com/in/dhanalakshmi-k-tech",
      description: "Google"
    },
    {
      name: "Tools of the Trade: Linux & SQL",
      avatar: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
      url: "https://linkedin.com/in/dhanalakshmi-k-tech",
      description: "Google"
    }
  ],
  projects: [
    {
      name: "NightHawk",
      description: "A dark web monitoring and threat intelligence platform utilizing OSINT to aggregate data points across TOR and I2P.",
      url: "https://github.com/Dhana-27/NightHawk",
    },
    {
      name: "MicroZard",
      description: "AI-based weed detection system for farmers using Machine Learning",
      url: "https://github.com/Dhana-27/MicroZard-A-lizard-inspired-Robot-for-Hydroagroclearing",
    },
    {
      name: "RBAC",
      description: "A full-stack web application demonstrating Authentication and Role-Based Access Control (RBAC) for cybersecurity.",
      url: "https://github.com/Dhana-27/RBAC-APPLICATION",
    },
    {
      name: "MIRI",
      description: "A specialized project focusing on Machine Intelligence and Robotics.",
      url: "https://github.com/Dhana-27/MIRI-Micro-Intersection-Risk-Intelligence-website-project",
    },
    {
      name: "Scheme Connect",
      description: "An interactive platform for connecting and visualizing various computational schemes.",
      url: "https://github.com/Dhana-27/SCHEME_CONNECT-WEBSITE",
    }
  ],
  spotify: {
    enabled: true,
    user: "Dhanalakshmi K",
    playlistUrl: "https://open.spotify.com/playlist/37i9dQZEVXcXHWVVT0lfDq",
  },

  github: {
    username: "Dhana-27",
  },
  blog: {
    enabled: true,
    posts: [
      {
        title: "My AI Project Journey",
        description: "Sharing insights on building ML systems",
        url: "https://www.linkedin.com/in/dhanalakshmi-k-tech/recent-activity/all/",
        date: "Just now"
      }
    ]
  },



  map: {
    accessToken: "YOUR_KEY_HERE",
    center: [80.2707, 13.0827],
    zoom: 10,
    markers: [
      { name: "Chennai", coordinates: [80.2707, 13.0827], emoji: "📍" },
    ],
  },

  weather: {
    city: "Chennai",
    lat: 13.0827,
    lon: 80.2707,
  },

  seo: {
    title: "DHANALAKSHMI K | Portfolio",
    description: "Cybersecurity and Computer Science student at Sri Sai Ram Institute of Technology.",
    keywords: [
      "Cybersecurity",
      "Quantum Systems",
      "Machine Learning",
      "Pentesting",
      "OSINT",
      "Dhanalakshmi K",
      "Sairam Institutions"
    ],
    ogImage: "/avatar.jpg",
    siteUrl: "https://portfolio-2al.pages.dev",
  },

  theme: {
    tintColor: "#ff375f",
    tintColorRGB: "255, 55, 95",
    gradientFrom: "#000000",
    gradientVia: "#090909",
    gradientTo: "#111116",
  },
};