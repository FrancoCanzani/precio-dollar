const TOKEN = process.env.BCRA_Token;

export default async function DatoBCRA({ url }: { url: string }) {
  async function getBCRAData(urlToFetch: string) {
    const res = await fetch(url, {
      headers: {
        Authorization: `BEARER ${TOKEN}`,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  }

  const BCRAData = await getBCRAData(url);

  return <h1>{BCRAData[BCRAData.length - 1].v}</h1>;
}
