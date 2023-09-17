import { mutedPointStyle, pointStyle } from "components/map/styles";
import { Feature } from "ol";
import { Point } from "ol/geom";

const getFeature = ({ item, getText, getColor }) => {
  const feature = new Feature({
    geometry: new Point([item.longitude, item.latitude]),
    text: getText(item),
    style: pointStyle(getColor(item)),
    isAnswered: false
  });
  
  feature.setStyle(mutedPointStyle);
  return feature;
};

export default getFeature