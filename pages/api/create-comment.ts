import { Client } from "@notionhq/client";
import { NextApiRequest, NextApiResponse } from "next";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const content = req.body.content;
  const page_id = req.body.pageId;

  const response = await notion.comments.create({
    parent: {
      page_id,
    },
    rich_text: [
      {
        text: {
          content,
        },
      },
    ],
  });

  return response;
}
