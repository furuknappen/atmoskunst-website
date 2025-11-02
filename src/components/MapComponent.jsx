import '../styles/home.css'

const MapComponent = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500.550059023458!2d10.393268590482394!3d63.43231873431339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d319b6ef1b1fd%3A0x72caf4761f025ce!2sThomas%20Angells%20gate%2027%2C%207011%20Trondheim!5e0!3m2!1sno!2sno!4v1761825441096!5m2!1sno!2sno"
        width="100%"
        height="70%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Store Location"
      ></iframe>
      </div>
  );
};

export default MapComponent;

