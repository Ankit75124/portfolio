import { Skill } from "../typings";

export const fetchSkills = async (host: string) => {
  const res = await fetch(`${host}/api/getSkills`);

  const data = await res.json();

  const skills: Skill[] = data.skill;

  return skills;
};