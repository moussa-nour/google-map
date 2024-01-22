import React from "react";
import GoogleMapReact from 'google-map-react';
import { Card } from 'antd';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 37.2720905,
      lng: 9.8708565
    },
    zoom: 11
  };

  return (
    <Card className="stylish-box" style={{ width: '45%', marginTop:'200px', borderRadius: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="container">
        <div className="box" />
        {/* Adjust the styling for the map container div */}
        <div style={{ height: '350px', borderRadius: '15px', overflow: 'hidden' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            {/* Add your custom markers or components here */}
          </GoogleMapReact>
        </div>
      </div>
    </Card>
  );
}
