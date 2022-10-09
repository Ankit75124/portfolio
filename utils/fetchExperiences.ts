import { Experience } from "../typings";

export const fetchExperiences = async (host:string) => {
  const res = await fetch(`${host}/api/getExperience`);

  const data = await res.json();

  const experiences: Experience[] = data.experiences;

  return experiences;
};
