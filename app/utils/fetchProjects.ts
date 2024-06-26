import { Project } from "@/type";

export const fetchProjects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getSkills`);
  const data = await res.json();
  const projects: Project[] = data.projects;

  return projects;
};
