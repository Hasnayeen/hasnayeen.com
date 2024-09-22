import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Hasnayeen",
  DESCRIPTION: "Welcome to hasnayeen.com, my home on the internet.",
  AUTHOR: "Nehal Hasnayeen",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  // { 
  //   TEXT: "Work", 
  //   HREF: "/work", 
  // },
  // { 
  //   TEXT: "Blog", 
  //   HREF: "/blog", 
  // },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "searching.nehal@gmail.com",
    HREF: "mailto:searching.nehal@gmail.com",
  },
  { 
    NAME: "Discord",
    ICON: "discord", 
    TEXT: "Hasnayeen",
    HREF: "https://discord.com/users/297318343642447872",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "hasnayeen",
    HREF: "https://github.com/hasnayeen"
  },
  { 
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "nhasnayeen",
    HREF: "https://x.com/nhasnayeen",
  },
]

