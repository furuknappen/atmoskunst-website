import '../styles/christmasOpeningHours.css';

 function ChristmasOpeningHours() {
  return (
    <section className="OpeninghoursSection last">
      <h2 className="">Åpningstider i julen</h2>

      <div className="weeksContainer">
        <div>
          <h3 className="">Uke 50</h3>
          <ul className="">
            <li>Mandag-onsdag: 10-18</li>
            <li>Torsdag & fredag: 10-20</li>
            <li>Lørdag: 10-18</li>
            <li>Søndag: 14-18</li>
          </ul>
        </div>

        <div>
          <h3 className="">Uke 51</h3>
          <ul className="">
            <li>Mandag-fredag: 10-20</li>
            <li>Lørdag: 10-18</li>
            <li>Søndag: 14-18</li>
          </ul>
        </div>

        <div>
          <h3 className="">Uke 52</h3>
          <ul className="">
            <li>Mandag: 10-20</li>
            <li>Tirsdag: 10-18</li>
            <li>Julaften: 10-12</li>
            <li>Torsdag & fredag: Stengt</li>
            <li>Lørdag: 10-16</li>
            <li>Søndag: Stengt</li>
          </ul>
        </div>

        <div>
          <h3 className="">Uke 1</h3>
          <ul className="">
            <li>Mandag & tirsdag: 10-16</li>
            <li>Onsdag: 10-15</li>
            <li>Torsdag: Stengt</li>
            <li>Fredag & lørdag: 10-18</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ChristmasOpeningHours