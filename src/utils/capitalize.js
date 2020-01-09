export default function capitalize(text) {
  if (text) {
    const capitalizeText = text[0].toUpperCase() + text.substring(1);
    return capitalizeText;
  }
  return false;
}
