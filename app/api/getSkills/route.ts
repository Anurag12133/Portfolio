import { sanityClient } from "@/sanity";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { Skill, Social } from "@/type";
import { error } from "console";
import { json } from "stream/consumers";
const query = groq`
*[_type == "skill"]
`;

type Data = {
  skills: Skill[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: Skill[] = await sanityClient.fetch(query);
  return {
    json: skills,
  };
}
