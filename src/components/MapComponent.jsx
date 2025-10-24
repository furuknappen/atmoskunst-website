// import '../styles/home.css'

const MapComponent = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136.9416544235251!2d10.394711774237802!3d63.43251050376485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466d319b6e43ff27%3A0x1ffe4980327dc2b6!2sThomas%20Angells%20Gate!5e1!3m2!1sen!2sno!4v1761305436837!5m2!1sen!2sno"
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