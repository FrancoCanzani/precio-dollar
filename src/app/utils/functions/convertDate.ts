export default function convertDate(dateString: string): string {
  const parts = dateString.split('T');
  const datePart = parts[0];
  const timePart = parts[1].slice(0, 8);
  return `${datePart} ${timePart}`;
}
