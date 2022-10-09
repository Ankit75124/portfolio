import { Social } from "../typings";

export const fetchSocials = async (host: string) => {
  const res = await fetch(`${host}/api/getSocials`);

  const data = await res.json();

  const socials: Social[] = data.socials;

  return socials;
};