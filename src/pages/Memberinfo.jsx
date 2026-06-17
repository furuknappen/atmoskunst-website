
import '../styles/memberInfo.css'
import ArrowRight from "../assets/arrow-right.svg?react"

function memberInfo() {
  return (<>
    <main className='main-memberInfo'>

      <h1>Bli en del av Atmos Kunst</h1>
      <p className='memberIntroText'>Nysgjerrig på å bli en del av Atmos kunst? Vi ser etter nye medlemmer som kan bidra med å skape en kunstbutikk med mange forskjellige uttrykk og stiler. Ta en titt på de forskjellige vairantene av medlemskap vi tilbyr, og ikke vær redd for å ta kontakt med oss på <a className='link-in-text' href="mailto:post@atmoskunst.no" target="_blank" rel="noopener noreferrer">post@atmoskunst.no</a> hvis du lurer på noe!
      </p>
      <div className='membersInfoContainer'>
        <section className='memberInfoDiv' id="member-container-1">
          <h2>Fast medlemskap</h2>
          <p>Du skaper egne produkter innen kunst, design, håndverk, klær, illustrasjon, såper, tekstiler eller lignende.

            Du ønsker å bidra til kollektivets drift og felles aktiviteter, og har mulighet til å ta butikkvakter i våre åpningstider (mandag-lørdag kl. 10-18).

            Vi anslår at du vil jobbe omtrent fire timer i uken i butikken.</p>

          <h3>Som medlem får du:</h3>
          <ul>
            <li>Fast salgsplass i kollektivets butikk i Thomas Angells gate.</li>
            <li>Felles markedsføring gjennom sosiale medier og kampanjer.</li>
            <li>Et kreativt og støttende fellesskap med dyktige kolleger.</li>
            <li>Mulighet til å påvirke kollektivets utvikling og uttrykk som en del av butikkens kjerneteam.</li>

          </ul>
          <h3>For å dekke fellesutgifter, drift og markedsføring betaler du:</h3>
          <ul>
            <li>Oppstartsavgift: 1 000 kr</li>
            <li>Månedsavgift: 800 kr</li>
            <li>Provisjon: 20 % av ditt salg</li>
          </ul>

          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfuXab0ZMcHo3IXOrpjf34r8B_SHSPWmk1WbLXSDJ4jvMQ_6w/viewform" target="_blank" rel="noopener noreferrer">Link til søknadsskjema
            <ArrowRight aria-hidden="true" />
            <span className="sr-only">(åpnes i ny fane)</span>
          </a>
        </section>

        <section className='memberInfoDiv' id="member-container-2">
          <h2>Fast gjesteutstiller (uten vakter)</h2>
          <p>Du skaper egne produkter innen kunst, design, håndverk, klær, illustrasjon, såper, tekstiler eller lignende.

            Dette alternativet passer for deg som ønsker å være en del av Atmos Kunst, men som ikke har anledning til å bidra med butikkvakter på samme måte som våre faste medlemmer.</p>

          <h3>Som fast gjesteutstiller får du:</h3>
          <ul>
            <li>Fast plass til å selge produktene dine i butikken.</li>
            <li>Mulighet til å delta i felles markedsføring og arrangementer.</li>
            <li>Synlighet i et etablert kreativt miljø.</li>
            <li>Nettverk med andre skapere i Trondheim.</li>

          </ul>
          <h3>For å dekke fellesutgifter, drift og markedsføring betaler du:</h3>
          <ul>
            <li>Månedsavgift: 1 500 kr</li>
            <li>Provisjon: 35 % av ditt salg</li>
          </ul>

          <p>Hvis det er interessant for deg, tilbyr vi også lanseringsfest og tilpasset markedsføring for 500 kr den første måneden (totalt 2 000 kr første måned).</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfuXab0ZMcHo3IXOrpjf34r8B_SHSPWmk1WbLXSDJ4jvMQ_6w/viewform" target="_blank" rel="noopener noreferrer">Link til søknadsskjema
            <ArrowRight aria-hidden="true" />
            <span className="sr-only">(åpnes i ny fane)</span>
          </a>
        </section>


        <section className='memberInfoDiv' id="member-container-3">
          <h2>Gjesteutstiller  i en måned</h2>
          <p>Det er også mulig å være gjesteutstiller i én måned for å teste både oss og produktene dine.
            Du skaper egne produkter innen kunst, design, håndverk, klær, illustrasjon, såper, tekstiler eller lignende.
          </p>

          <h3>Som gjesteutstiller får du:</h3>
          <ul>
            <li>Fast plass til å selge produktene dine i butikken.</li>
            <li>Vi inkluderer deg i vår felles markedsføring i perioden.</li>
            <li>Synlighet i et etablert kreativt miljø.</li>
            <li>Nettverk med andre skapere i Trondheim.</li>

          </ul>
          <h3>For å dekke fellesutgifter, drift og markedsføring betaler du:</h3>
          <ul>
            <li>Månedsavgift: 1 500 kr</li>
            <li>Provisjon: 35 % av ditt salg</li>
          </ul>

          {/* <p>Hvis det er interessant for deg, tilbyr vi også lanseringsfest og tilpasset markedsføring for 500 kr den første måneden (totalt 2 000 kr første måned).</p> */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSfuXab0ZMcHo3IXOrpjf34r8B_SHSPWmk1WbLXSDJ4jvMQ_6w/viewform" target="_blank" rel="noopener noreferrer">Link til søknadsskjema
            <ArrowRight aria-hidden="true" />
            <span className="sr-only">(åpnes i ny fane)</span>
          </a>
        </section>

      </div>




    </main>





  </>)





}

export default memberInfo