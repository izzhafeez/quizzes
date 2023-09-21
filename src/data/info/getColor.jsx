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
};

export const getMRTColor = mrt => {
  const line = mrt.label.substring(0, 2);
  switch (line) {
    case 'EW':
      case 'CG':
        return 'GREEN';
      case 'NS':
        return 'RED';
      case 'NE':
        return 'PURPLE';
      case 'CC':
      case 'CE':
        return 'YELLOW';
      case 'DT':
        return 'BLUE';
      case 'TE':
        return 'BROWN';
      case 'JE':
      case 'JS':
      case 'JW':
        return 'CYAN';
      case 'CP':
      case 'CR':
        return 'BRIGHT_GREEN';
      case 'BP':
      case 'SW':
      case 'SE':
      case 'PW':
      case 'PE':
      case 'ST':
      case 'PT':
        return 'GREY';
      default:
        return 'WHITE';
  }
};