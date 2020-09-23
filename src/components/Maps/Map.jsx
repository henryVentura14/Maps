import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Tooltip from './Tooltip'
import ReactDOM from 'react-dom'

const styles = {
  width: "70vh",
  height: "50vh",
  position: "fixed",
  right: "0"
};

const Map = ({ places }) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }))
  useEffect(() => {
    mapboxgl.accessToken = "pk.eyJ1IjoiaGVucnl2ZW4xNCIsImEiOiJja2ZmNmgzaTEwYnFoMnNwanlocHNkYTBpIn0.de77U42hGsCy5M-csFwWWw";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [
          -72.0918116,
          -15.6093241
        ],
        zoom: 10
      });
      map.addControl(new mapboxgl.NavigationControl());

      // add tooltip when users mouse move over a point
      map.on('mousemove', e => {
        const features = map.queryRenderedFeatures(e.point)
        if (features.length) {
          const feature = features[0]

          // Create tooltip node
          const tooltipNode = document.createElement('div')
          ReactDOM.render(<Tooltip feature={feature} />, tooltipNode)

          // Set tooltip on map
          tooltipRef.current
            .setLngLat(e.lngLat)
            .setDOMContent(tooltipNode)
            .addTo(map)
        }
      })
      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} className="maps" />;
};

export default Map;
