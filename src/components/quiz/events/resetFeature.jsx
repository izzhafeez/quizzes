import { mutedPointStyle } from "components/map/styles";

const resetFeature = feature => {
  feature.set('isAnswered', false);
  feature.setStyle(mutedPointStyle);
  return feature;
};

export default resetFeature;