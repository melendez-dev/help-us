import GoogleMapReact from "google-map-react";
export default function Map() {
  const defaultProps = {
    center: {
      lat: 11.0403,
      lng: -74.825,
    },
    zoom: 15,
  };
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCJp0UPGel17zCeLS_d10gYKKkDWmU5waI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
