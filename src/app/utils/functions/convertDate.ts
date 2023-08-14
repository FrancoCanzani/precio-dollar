export default function convertDate(dateString: string): string {
  const dateParts = dateString.split('T');
  const date = new Date(dateParts[0]);
  const time = dateParts[1].substring(0, 8);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year} a las ${time}`;
}
