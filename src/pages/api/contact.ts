import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { Client } from '@notionhq/client';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { fields } = await new Promise((resolve, reject) => {
    const form = new formidable();

    form.parse(req, (err, fields) => {
      if (err) reject({ err });
      resolve({ fields });
    });
  });

  const { name, role, email, company } = fields;

  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_CONTACT_DATABASE,
    },
    properties: {
      title: {
        type: 'title',
        title: [{ type: 'text', text: { content: name } }],
      },
      role: {
        type: 'rich_text',
        rich_text: [{ text: { content: role }, type: 'text' }],
      },
      email: {
        type: 'email',
        email,
      },
      company: {
        type: 'rich_text',
        rich_text: [{ text: { content: company }, type: 'text' }],
      },
      status: {
        type: 'select',
        select: {
          name: 'waiting',
        },
      },
    },
  });

  //return the data back or just do whatever you want with it
  res.status(200).json({});
};
