import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
export async function excerptHtml(body: string): Promise<string> {
	const firstBlock = body.trim().split(/\n\s*\n/)[0];
	const file = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype)
		.use(rehypeStringify)
		.process(firstBlock);
	return String(file);
}