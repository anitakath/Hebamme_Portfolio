import { useForm, ValidationError } from "@formspree/react";


//COMPONENTS
import Layout from "@/components/Layout";

//STYLES
import styles from '../styles/Contact.module.css'
import '../styles/Input.css'




const Contact = () => {
  const submitFormHandler = () => {};

  const [state, handleSubmit] = useForm("....")

  if(state.succeeded){
    return <p> thanks for your deubmission!</p>
  }

  return (
    <div>
      <Layout>
        <div className={styles.sectionContainer}>
          <div className={styles.contactContainer}>
            <h1>Kontaktiere mich</h1>
            <p>
              Deine Daten werde ich nur für die von dir gewünschten Wünsche
              nutzen und zu keinem Zeitpunkt an Dritte übermitteln. <br />
              Erfahre mehr unter
            </p>

            <form onSubmit={handleSubmit} className={styles.formContainer}>
              <label htmlFor="fName"> Vorname* </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="vorname"
                className="input"
                required
              ></input>

              <label htmlFor="lName"> Nachname* </label>
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder="nachname"
                className="input"
                required
              ></input>

              <label htmlFor="user"> Adresse & Hausnummer* </label>
              <input
                type="text"
                id="user"
                name="adress"
                placeholder="adresse und hausnummer"
                className="input"
                required
              ></input>

              <label htmlFor="user"> Postleitzahl* </label>
              <input
                type="number"
                id="user"
                name="postal"
                placeholder="postleitzahl"
                className="input"
                required
              ></input>

              <label htmlFor="user"> Telefon* </label>
              <input
                type="tel"
                id="user"
                name="tel"
                placeholder="telefon"
                className="input"
                required
              ></input>

              <label htmlFor="user"> Email* </label>
              <input
                type="email"
                id="user"
                name="email"
                placeholder="email"
                className="input"
                required
              ></input>

              <label htmlFor="user"> errechneter Entbindungstermin* </label>
              <input
                type="date"
                id="datepicker"
                name="birth"
                placeholder="errechneter Entbindungstermin"
                className="input"
                required
              />

              <label htmlFor="user"> Krankenkasse* </label>
              <input
                type="text"
                id="user"
                name="insurance"
                required
                placeholder="krankenkasse"
                className="input"
              ></input>

              <label htmlFor="user">
                {" "}
                schreibe mir gern weitere Anliegen / Fragen{" "}
              </label>
              <textarea
                id="user"
                name="message"
                placeholder="schreibe mir gern weitere anliegen / fragen"
                className="input"
              ></textarea>

              <label htmlFor="user"> </label>

              <div>
                <input type="checkbox"></input> jaaa, ich habe den
                Datenschutzhinweis gelesen und akzeptiere die dortigen
                Bedingungen.
              </div>

              <button type="submit">sende deine Anfrage</button>

              <p>
                bitte fülle alle Felder mit den Sternchen unbedingt aus und
                akzeptiere die Datenschutzhinweise, ehe du die Kontaktanfrage
                abschickst
              </p>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Contact;
