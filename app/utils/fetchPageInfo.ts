import { pageInfo } from "@/type";

export const fetchPageInfo = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getSkills`);
  const data = await res.json();
  const pageInfo: pageInfo = data.pageInfo;

  return pageInfo;
};
