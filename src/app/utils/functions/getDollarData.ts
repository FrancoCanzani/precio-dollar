export default async function getDollarData() {
  const res = await fetch('https://dolar-api-argentina.vercel.app/v1/dolares', {
    next: { revalidate: 1800 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
