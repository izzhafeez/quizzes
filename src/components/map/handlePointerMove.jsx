const handlePointerMove = ({ mapElement, mapRef, overlayRef, selected }) => (event) => {
  if (!mapElement.current) {
    return;
  }

  if (event.dragging) {
    return;
  }

  const pixel = mapRef.current.getEventPixel(event.originalEvent);
  const hit = mapRef.current.hasFeatureAtPixel(pixel);

  mapElement.current.style.cursor = hit ? 'pointer' : '';

  if (hit) {
    const features = mapRef.current.getFeaturesAtPixel(pixel);
    if (features.length > 0) {
      selected.current = features[0];
      if (!selected.current.get('isAnswered')) {
        return;
      }

      const text = selected.current.get('text');
      if (!!text) {
        overlayRef.current.element.innerHTML = text;
        overlayRef.current.setPosition(event.coordinate);
      }
    }
  } else {
    selected.current = null;
    overlayRef.current.setPosition(undefined);
  }
};

export default handlePointerMove;