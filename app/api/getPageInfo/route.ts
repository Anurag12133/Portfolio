import type { NextApiRequest, NextApiResponse } from "next";
import { SanityClient, groq } from "next-sanity";
import { sanityClient } from "../../../sanity";
import { pageInfo } from "../../../type";
const query = groq`
*[_type == "pageInfo"][0]
`;

type Data = {
  pageInfo: pageInfo;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: pageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
}
