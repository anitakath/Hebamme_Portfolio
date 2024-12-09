

//COMPONENTS
import Layout from '@/components/Layout';

//STYLES
import styles from '../styles/dataPrivacy.module.css'

const DataPrivacy = () => {

    return (
      <Layout>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutDataprivacyContainer}>
            <h1> DATENSCHUTZ nach DSGVO </h1>

            <div
              className={styles.dataprivacyInfo}
              data-aos="zoom-in"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h3>
                {" "}
                mit der hier aufgeführten Datenschutzerklärung möchte ich dich
                über die Verarbeitung deiner personenbezogenen Daten informieren
                und dir versichern, dass ich mich in meiner Arbeit mit deinen
                Daten zu jeder Zeit an den Inhalten der Datenschutzerklärung
                sowie der gesetzlichen Datenschutzvorschriften halte.
              </h3>

              <h1> Allgemeine Hinweise und Pflichtinformationen</h1>

              <p>
                {" "}
                Durch das Ausfüllen des Kontaktformulars übergibst Du mir deine
                personenbezogenen Daten, mit denen du persönlich identifiziert
                werden kannst.{" "}
              </p>
              <p>
                {" "}
                Deine personenbezogenen Daten (Name, Adresse, Email, usw.,
                behandle ich stets nach den Richtlinien des DSGVO:
              </p>
              <h1> Datensparsamkeit:</h1>
              <p>
                {" "}
                ich arbeite lediglich mit den Daten, die für den tatsächlichen
                Verarbeitungszweck und eine erfolgreiche Vorbereitung auf deine
                Bedürfnisse benötigt werden. Die benötigten Daten sind im
                Kontaktformular mit einem Sternchen (*) gekennzeichnet. Den Rest
                kannst du mir freiwillig mitteilen.{" "}
              </p>
              <h1> Zweckbindung und Dauer der Speicherung: </h1>
              <p>
                {" "}
                Deine personenbezogenen Daten verarbeite ich ausschließlich für
                die erste Kontaktaufnahme und deine Anfragen. Das heißt,
                dass ich deine Daten nach Erlöschung des Zwecks sofort wieder
                löschen werden. Kommt es zu einer Betreuung, dann werde
                ich deine Daten nach Beendigung der Betreuung löschen.
              </p>
              <h1> Transparenz: </h1>
              <p>
                {" "}
                Im Allgemeinen werde ich deine personenbezogenen Daten zu keinem
                Zeitpunkt ohne deine Einwilligung an Dritte übermitteln. Zudem
                hast Du zu jeder Zeit das Recht in deine personenbezogenen Daten
                unentgeltlich einzusehen, ggf. Änderungen oder die Löschung
                einzufordern, sofern ich keine anderen rechtlich zulässigen
                Gründe für die Speicherung deiner personenbzeogenen Daten habe
                (z.B steuer-, oder handelsrechtliche Aufbewahrungsfristen)
              </p>
              <h1> SSL / TLS-Verschlüsselung </h1>

              <p>
                Auf meiner Webseite nutze ich eine SSL-, bzw.
                TSL-Verschlüsselung, die dafür sorgt, dass die Eingaben die Du
                über das Kontaktformular eingibst und an mich sendest, nicht von
                Dritten mitgelesen werden können. 
                Erkennen kannst du die sichere Verbindung einmal an dem Schloss,
                welches Du neben der Browserzeile findest und weiter an den
                Anfang des Links, der wie folgt startet: "https://...". Diese
                Verschlüsselung garantiert, dass deine Daten nicht von Dritten
                abgehört und/oder manipuliert werden können.
              </p>

              <p>
                {" "}
                Ich weise dich darauf hin, dass die Datenübertragung mittels
                E-Mail nicht immer zu 100% vor dem Zugriff Dritter geschützt
                sein kann.
              </p>

              <p> Diese Website kommt ohne Cookies aus</p>
            </div>
          </div>
        </div>
      </Layout>
    );
}

export default DataPrivacy;