import convertColor from "assets/colors/convertColor";
import Icon from "ol/style/Icon"
import Style from "ol/style/Style"

export const pointStyle = color => {
  return [
    new Style({
      image: new Icon({
        src: `/img/map/location-fill.svg`,
        displacement: [0, 10],
        height: 20,
        color: convertColor(color)
      }),
      zIndex: 2
    }),
    new Style({
      image: new Icon({
        src: `/img/map/location-border.svg`,
        displacement: [0, 10],
        height: 20,
        color: convertColor('BLACK')
      }),
      zIndex: 3
    }),
  ]
};

export const mutedPointStyle = () => {
  return [
    new Style({
      image: new Icon({
        src: `/img/map/location-fill.svg`,
        displacement: [0, 5],
        height: 10,
        color: [100,100,100]
      }),
      zIndex: 2
    }),
    new Style({
      image: new Icon({
        src: `/img/map/location-border.svg`,
        displacement: [0, 5],
        height: 10,
        color: [0,0,0]
      }),
      zIndex: 3
    }),
  ]
}