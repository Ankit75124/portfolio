import { Project } from "../typings";

export const fetchProjects = async (host: string) => {
  const res = await fetch(
    `${host}/api/getProjects`
  );

  const data = await res.json();

  const projects: Project[] = data.projects;

  return projects;
};
