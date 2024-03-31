// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NotionAPI } from "notion-client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const pageId = req.query.pageId;
  if (!pageId || typeof pageId !== "string") return res.status(404).send("Not Found!");

  const notion = new NotionAPI();
  const map = await notion.getPage(pageId);

  res.status(200).json(map);
}
