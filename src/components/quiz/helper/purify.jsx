import unidecode from "unidecode";

const purify = text => {
  const unascii = unidecode(text);
  return unascii
    .replaceAll(' ', '')
    .toLowerCase()
    .replace(/__.*/gi, '')
    .replace(/[^0-9a-z]/gi, '')
    .replace('school', '')
    .replace('saint', 'st');
};


export const purifyUnder = text => {
  const unascii = unidecode(text);
  return unascii.replace(/__.*/gi, '');
}

export default purify;