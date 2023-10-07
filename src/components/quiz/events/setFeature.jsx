const setFeature = feature => {
  feature.set('isAnswered', true);
  feature.setStyle(feature.get('style'));
  return feature;
};

export default setFeature;