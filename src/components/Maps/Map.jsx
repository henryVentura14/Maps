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

const Map = ({ lng, lat, setLatLng, latlng }) => {
  //estate
  console.log(lng, lat)
  const [map, setMap] = useState(null);

  //ref
  const mapContainer = useRef(null);
  const tooltipRef = useRef(new mapboxgl.Popup({ offset: 15 }))
  useEffect(() => {
    setLatLng({
      lng,
      lat
    })

  }, [lng, lat]);

  useEffect(() => {

    mapboxgl.accessToken = "pk.eyJ1IjoiaGVucnl2ZW4xNCIsImEiOiJja2ZmNmgzaTEwYnFoMnNwanlocHNkYTBpIn0.de77U42hGsCy5M-csFwWWw";
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [lng, lat],
        zoom: 10
      });
      map.addControl(new mapboxgl.NavigationControl());
      map.on('move', () => {

        setLatLng({
          lng: map.getCenter().lng.toFixed(4),
          lat: map.getCenter().lat.toFixed(4),
        });
      });
      // tooltip when users mouse move over a point
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
      map.on('click', function (e) {
        setLatLng({
          lng, lat
        })
        // The event object (e) contains information like the
        // coordinates of the point on the map that was clicked.
        console.log('A click event has occurred at ' + e.lngLat);
      });
      map.on("load", () => {
        setLatLng({
          lng: map.getCenter().lng.toFixed(4),
          lat: map.getCenter().lat.toFixed(4),
        });
        setLatLng({
          lng, lat
        })
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (
    <div>
      <div className='sidebarStyle'>
        <div>Longitude: {lng} | Latitude: {lat}
        </div>
      </div>
      <div ref={el => (mapContainer.current = el)} style={styles} className="maps" />
    </div>
  );
};

export default Map;
