export default function convertDate(dateString: string): string {
  const hora = dateString.split('T');
  return hora[0] + ' ' + hora[1];
}
