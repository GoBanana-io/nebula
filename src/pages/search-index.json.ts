import { getCollection } from 'astro:content';

// Build-time search index for the global ⌘K palette (fetched lazily on
// first open, so it never touches initial page weight). Newest first so an
// empty query can offer "Fresh sparks".
export async function GET() {
  const ideas = (await getCollection('ideas')).sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );
  const items = ideas.map((idea) => ({
    slug: idea.id.replace(/\.md$/, ''),
    title: idea.data.title,
    summary: idea.data.summary,
    summaryAr: idea.data.summaryAr || '',
    tags: idea.data.tags || [],
    country: idea.data.country || '',
    sector: idea.data.sector || '',
    stage: idea.data.stage || '',
    status: idea.data.status || 'operating',
  }));
  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json' },
  });
}
