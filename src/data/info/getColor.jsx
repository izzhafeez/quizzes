export const getSchoolColor = school => {
  switch (school.level) {
    case 'Primary':
      return 'GREEN_BG';
    case 'Secondary':
      return 'GREEN_LIGHT';
    case 'Tertiary':
      return 'GREEN_DARK';
    default:
      return 'GREEN';
  }
}