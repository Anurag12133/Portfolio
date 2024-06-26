import { Skill } from "@/type";

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getSkills`);
  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
