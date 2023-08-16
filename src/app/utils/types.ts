type DollarData = {
  compra: string | null;
  venta: number;
  casa: string;
  nombre: string;
  fechaActualizacion: string;
};

type Source = {
  id: string | null;
  name: string;
};

type Article = {
  source: Source;
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

type NewsResponse = {
  status: 'ok' | 'error';
  totalResults: number;
  articles: Article[];
};

export type { DollarData, Source, Article, NewsResponse };
