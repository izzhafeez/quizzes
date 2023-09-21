import unidecode from "unidecode";

export const purifyGuess = text => {
  const unascii = unidecode(text);
  return unascii
    .replaceAll(' ', '')
    .toLowerCase()
    .replace(/__.*/gi, '')
    .replace(/[^0-9a-z]/gi, '');
}

export const purifySchool = text => {
 return purifyGuess(text)
    .replace('school', '')
    .replace('saint', 'st');
};

const purifyBasic = text => {
  const unascii = unidecode(text);
  return unascii.replace(/__.*/gi, '');
}

export default purifyBasic;