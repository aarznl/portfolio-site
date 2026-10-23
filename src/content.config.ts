import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each Markdown file in src/content/projects/ becomes a project page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      // Optional end month for projects that ran over a period of time.
      end: z.coerce.date().optional(),
      // Course or organization the project was built for.
      context: z.string().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      // Hardware/software used, shown as a spec list on the project page.
      stack: z.array(z.string()).default([]),
      role: z.string().optional(),
      // Position on the home page (1 = first). Leave out to keep it off the home page.
      featured: z.number().int().positive().optional(),
      links: z
        .object({
          code: z.string().url().optional(),
          video: z.string().url().optional(),
          cad: z.string().url().optional(),
          // Full write-up hosted elsewhere (course team site, Devpost, live demo).
          site: z.string().url().optional(),
          // PDF report; a path under public/, e.g. /files/my-project/report.pdf
          report: z.string().optional(),
        })
        .default({}),
    }),
});

export const collections = { projects };
