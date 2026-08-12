import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE, BASE_PATH } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: new URL(BASE_PATH, context.site),
		items: posts.map((post) => ({
			...post.data,
			link: `${BASE_PATH}blog/${post.id}/`,
		})),
	});
}
