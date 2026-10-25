export const SITE = {
  /** Update to your public LinkedIn profile URL */
  linkedIn: "https://www.linkedin.com/in/golakoti-devendra-b5a145213/",
  githubProfile: "https://github.com/devendra98-tech",
  githubApiUser: "devendra98-tech",
  resumePath: "/my-portfolio/resume.pdf",
  /** Public Web3Forms access key. Set REACT_APP_WEB3FORMS_ACCESS_KEY before build/deploy. */
  web3formsAccessKey: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY ?? "",
} as const;

export const SECTION_IDS = {
  home: "home",
  about: "about",
  services: "services",
  testimonials: "testimonials",
  skills: "skills",
  blog: "blog",
  repos: "repos",
  contact: "contact",
  appearance: "appearance",
} as const;
