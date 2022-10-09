import { PageInfo } from "../typings";

export const fetchPageInfo = async (host:string) => {
  const res = await fetch(
    `${host}/api/getPageInfo`
  );

  const data = await res.json();

  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};
