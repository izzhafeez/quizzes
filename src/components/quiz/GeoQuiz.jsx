import MapContainer from "components/map/MapContainer";
import React, { useEffect, useState } from "react";
import GuessInput from "./inputs/GuessInput";
import GiveUpButton from "./inputs/GiveUpButton";
import handleReset from "./events/handleReset";
import getFeature from "./helper/getFeature";

const GeoQuiz = ({ data, getText, getStyle, getColor, purifyGuess }) => {
  const [features, setFeatures] = useState([]);
  const [itemPositions, setItemPositions] = useState({});
  const [completed, setCompleted] = useState({});
  const [correct, setCorrect] = useState(0);
  const [grade, setGrade] = useState('');
  const [willRecenter, setRecenter] = useState(false);
  
  useEffect(() => {
    handleReset({ setCorrect, setCompleted, setGrade, setRecenter });
    const dataList = Object.entries(data).map(([k, v]) => v)
    const allItems = dataList.map((d, index) => {
      const text = purifyGuess(getText(d));
      if (!!itemPositions[text] && !itemPositions[text].includes(index)) {
        itemPositions[text].push(index);
      } else {
        itemPositions[text] = [index];
      }
      return d;
    });
    setItemPositions(itemPositions);

    const allFeatures = allItems.map(item => {
      return getFeature({ item, getText, getStyle, getColor });
    })
    setFeatures(allFeatures);
  }, [itemPositions, data, getText, getStyle, getColor, purifyGuess]);

  return <div>
    {GuessInput({ setRecenter, setCompleted, setCorrect, setFeatures, completed, itemPositions, features, correct, purifyGuess })}
    {GiveUpButton({ correct, features, setCompleted, setGrade, setFeatures, itemPositions })}
    {!!grade && <p><b>Grade:</b><br/>{grade}</p>}
    <MapContainer features={features} willRecenter={willRecenter}/>
  </div>
};

export default GeoQuiz;