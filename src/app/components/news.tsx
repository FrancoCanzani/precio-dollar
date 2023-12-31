const KEY = process.env.NEWS_KEY;
import { Source, Article, NewsResponse } from '../utils/types';

async function getNews(): Promise<NewsResponse | null> {
  try {
    const url = `https://newsapi.org/v2/top-headlines?country=ar&apiKey=${KEY}`;
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  }
}

export default async function News() {
  const news = await getNews();

  return (
    <section className='max-w-full'>
      <div className='slider'>
        <div className='slide-track gap-1 py-2'>
          {news?.articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target='blank'
              className='slide text-xs flex capitalize items-center hover:underline px-2'
            >
              <p className='font-semibold'>{article.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
