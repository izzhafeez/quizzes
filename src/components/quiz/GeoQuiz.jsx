import MapContainer from "components/map/MapContainer";
import React, { useState } from "react";
import GuessInput from "./inputs/GuessInput";
import handleReset from "./events/handleReset";
import getFeature from "./helper/getFeature";
import NumberGuessed from "./stats/NumberGuessed";
import handleGiveUp from "./events/handleGiveUp";
import ActionButton from "./inputs/ActionButton";
import AnswerStats from "./stats/AnswerStats"

const GeoQuiz = React.memo(({ data, getText, getStyle, getColor, purifyGuess }) => {
  const [completed, setCompleted] = useState({});
  const [correct, setCorrect] = useState(0);
  const [grade, setGrade] = useState('');
  // const bestScore = localStorage.getItem('bestScore')?.[''];
  console.log("rendering");
  
  const dataList = Object.entries(data).map(([k, v]) => v);
  const itemPositions = {};
  const allItems = dataList.map((d, index) => {
    const text = purifyGuess(getText(d));
    if (!!itemPositions[text] && !itemPositions[text].includes(index)) {
      itemPositions[text].push(index);
    } else {
      itemPositions[text] = [index];
    }
    return d;
  });

  const allFeatures = allItems.map(item => {
    const feature = getFeature({ item, getText, getStyle, getColor });
    return feature;
  });
  const [features, setFeatures] = useState(allFeatures);

  return <div className="mx-4">
    <div className="my-4">
      <div className="flex flex-row gap-4">
        <div className="grid gap-1 grid-rows-[60%_40%]">
          <NumberGuessed correct={correct}/>
          <ActionButton 
            action={!grade ? handleGiveUp : handleReset}
            text={!grade ? "Give Up?" : "Restart?"}
            color={!grade ? "ns" : "ew"}
            correct={correct}
            allFeatures={allFeatures}
            itemPositions={itemPositions}
            setCorrect={setCorrect}
            setFeatures={setFeatures}
            setCompleted={setCompleted}
            setGrade={setGrade}
          />
          {/* {ActionButton({
            action: ,
            text: ,
            color: ,
            correct, allFeatures, itemPositions, 
            setCorrect, setFeatures, setCompleted, setGrade */}
          {/* })} */}
        </div>
        <div className="grid gap-1">
          {GuessInput({
            setCompleted, setCorrect, setFeatures,
            completed, correct, features, itemPositions, purifyGuess
          })}
        </div>
      </div>
    </div>
    <section className="grid md:grid-cols-[70%_30%]">
      <MapContainer features={features}/>
      {AnswerStats()}
    </section>
  </div>
});

export default GeoQuiz;