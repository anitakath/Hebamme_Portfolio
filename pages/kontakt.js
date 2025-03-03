import { useForm, ValidationError } from "@formspree/react";
import { useState, useEffect } from "react";
//COMPONENTS
import Layout from "@/components/Layout";
//STYLES
import styles from '../styles/Contact.module.css'
import '../styles/Input.css'
import "styled-jsx/style";
//HOOKS
import useInput from "@/hooks/use-input";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

  useEffect(() => {
    AOS.init({
        duration: 1000, // Dauer der Animation
        once: true, // Animation nur einmal ausführen
    });
}, []);


  const [state, handleSubmit] = useForm("myyqgqrr");
  const [checkboxCheck, setCheckboxCheck] = useState(false);
  const [formComplete, setFormComplete] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [successMessage, setSucessMessage] = useState('')

   // ---------------------------- USE INPUT
   const {
     value: enteredFirstName,
     changeValueHandler: firstNameChangeHandler,
     inputBlurHandler: firstNameBlurHandler,
     valueIsValid: firstNameIsValid,
     style: fNameStyle,
     hasError: hasError,
   } = useInput((value) => value.trim() !== "" && value.length >= 2);

  
   
   const {
     value: enteredLastName,
     changeValueHandler: lastNameChangeHandler,
     inputBlurHandler: lastNameBlurHandler,
     valueIsValid: lastNameIsValid,
     style: lNameStyle,
   } = useInput((value) => value.trim() !== "" && value.length >= 2);

   const {
     value: enteredAdress,
     changeValueHandler: adressChangeHandler,
     inputBlurHandler: adressBlurHandler,
     valueIsValid: adressIsValid,
     style: adressStyle,
   } = useInput((value) => value.trim() !== "" && value.length >= 4);

   const {
     value: enteredPostal,
     changeValueHandler: postalChangeHandler,
     inputBlurHandler: postalBlurHandler,
     style: postalStyle,
   } = useInput((value) => value !== NaN && value.length === 5);

   const {
     value: enteredTel,
     changeValueHandler: telChangeHandler,
     inputBlurHandler: telBlurHandler,
     valueIsValid: telIsValid,
     style: telStyle,
     hasError: hasErrorTel,
   } = useInput((value) => value.length >= 6 && value.length <= 15);

   const {
    value: enteredEmail,
    changeValueHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    valueIsValid: emailIsValid,
    style: emailStyle,
    } = useInput((value) => {
      return String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    });

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let nextYear = date.getFullYear() + 1;

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  const currentDate = `${year}-${month}-${day}`;

  const maxDate = `${nextYear}-${month}-${day}`;

  const {
    value: enteredBirth,
    changeValueHandler: birthChangeHandler,
    inputBlurHandler: birthBlurHandler,
    style: birthStyle,
  } = useInput((value) => value >= currentDate && value <= maxDate);

  /* value === $( "#datepicker" ).datepicker( "option", "dateFormat",'yy-mm-dd') */

  const {
    value: enteredInsurance,
    changeValueHandler: insuranceChangeHandler,
    inputBlurHandler: insuranceBlurHandler,
    valueIsValid: insuranceIsValid,
    style: insuranceStyle,
  } = useInput((value) => value.trim() !== "" && value.length >= 2);

  const {
    value: enteredMessage,
    changeValueHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
  } = useInput((value) => value.trim() !== "");




  const checkboxHandler = () => {
    setCheckboxCheck((x) => !x);
  };






  useEffect(() => {
    if (
      checkboxCheck === true &&
      firstNameIsValid &&
      lastNameIsValid &&
      adressIsValid &&
      enteredPostal &&
      telIsValid &&
      emailIsValid &&
      insuranceIsValid
    ) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [
    checkboxCheck,
    firstNameIsValid,
    lastNameIsValid,
    adressIsValid,
    enteredPostal,
    emailIsValid,
    telIsValid,
    insuranceIsValid,
  ]);



   


   const resetSubmittedForm = () =>{
     setTimeout(() => {
       localStorage.setItem("formSubmitted", false);
     }, 10000); // 10 Sekunden in Millisekunden
   }

  
    

  const submitHandler = async () => {

    const formData={
      vorname: enteredFirstName,
      nachname: enteredLastName,
      adresse: enteredAdress,
      postleitzahl: enteredPostal,
      telefonnummer: enteredTel,
      email: enteredEmail,
      geburtstermin: enteredBirth,
      versicherung: enteredInsurance,
      nachricht: enteredMessage,
      datenschutz: checkboxCheck
    }
    try {
      // Senden des Vornamens an die Backend-API
      const response = await fetch("/api/validate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data); // Erfolgsnachricht von der API
      handleSubmit();

      // Speichern des Formularstatus im LocalStorage
      localStorage.setItem("formSubmitted", true);
      // aber nur für 10 Sekunden!
      resetSubmittedForm()
      
    } catch (error) {
      console.error(error); // Fehlermeldung bei einem Fehler in der API
      localStorage.setItem("formSubmitted", false);
    }
  }
  



  useEffect(() => {
    if (typeof window !== "undefined") {
      const formSubmitted = localStorage.getItem("formSubmitted");

      console.log(formSubmitted);

      if (formSubmitted === "true") {
        console.log("Das Formular wurde erfolgreich abgeschickt.");
        setSucessMessage("Das Formular wurde erfolgreich abgeschickt.");

        setFormSubmitted(true);
      } else if (formSubmitted === "false") {
        console.log("Beim Absenden des Formulars ist ein Fehler aufgetreten.");

        setSucessMessage(
          "Beim Absenden des Formulars ist ein Fehler aufgetreten."
        );

        setFormSubmitted(false);
      } else {
        console.log("Das Formular wurde noch nicht abgeschickt.");

        setSucessMessage("Das Formular wurde noch nicht abgeschickt.");

        setFormSubmitted(false);
      }
    }
  }, [formComplete]);


   useEffect(() => {
     const resetSubmittedForm = () => {
       setTimeout(() => {
         localStorage.setItem("formSubmitted", false);
       }, 10000); // 10 Sekunden in Millisekunden
     };

     resetSubmittedForm();
   }, [formSubmitted]);

 
  


  return (

      <Layout>
        <div className={styles.sectionContainer}  
              data-aos="fade-up"
              data-aos-duration="2000">
          <div className={styles.contactContainer}>
            <h1>Kontaktiere mich</h1>

            <p>
              Deine Daten werde ich nur für die von dir gewünschten Wünsche
              nutzen und zu keinem Zeitpunkt an Dritte übermitteln. <br />
              Erfahre mehr unter
            </p>

            <form
              onSubmit={submitHandler}
              className={styles.formContainer}
              action="https://formspree.io/f/myyqgqrr"
              method="POST"
            >
              <label htmlFor="firstName"> Vorname* </label>
              <input
                type="text"
                name="vorname"
                id="firstName"
                placeholder="vorname"
                className={fNameStyle}
                value={enteredFirstName}
                onBlur={firstNameBlurHandler}
                onChange={firstNameChangeHandler}
                required
              ></input>
              <ValidationError
                prefix="firstName"
                field="firstName"
                errors={state.errors}
              />

              <label htmlFor="lastName"> Nachname* </label>
              <input
                type="text"
                name="nachname"
                id="lName"
                placeholder="nachname"
                className={lNameStyle}
                value={enteredLastName}
                onBlur={lastNameBlurHandler}
                onChange={lastNameChangeHandler}
                required
              ></input>
              <ValidationError
                prefix="lastName"
                field="lastName"
                errors={state.errors}
              />

              <label htmlFor="user"> Adresse & Hausnummer* </label>
              <input
                type="text"
                id="user"
                name="adresse"
                placeholder="adresse und hausnummer"
                className={adressStyle}
                value={enteredAdress}
                onBlur={adressBlurHandler}
                onChange={adressChangeHandler}
                required
              ></input>
              <ValidationError
                prefix="adress"
                field="adress"
                errors={state.errors}
              />

              <label htmlFor="user"> Postleitzahl* </label>
              <input
                type="number"
                id="user"
                name="postleitzahl"
                placeholder="postleitzahl"
                className={postalStyle}
                value={enteredPostal}
                onChange={postalChangeHandler}
                onBlur={postalBlurHandler}
                required
              ></input>
              <ValidationError
                prefix="postal"
                field="postal"
                errors={state.errors}
              />

              <label htmlFor="user"> Telefon* </label>
              <input
                type="tel"
                id="user"
                name="telefon"
                placeholder="telefon"
                className={telStyle}
                value={enteredTel}
                onChange={telChangeHandler}
                onBlur={telBlurHandler}
                required
              ></input>
              <ValidationError prefix="tel" field="tel" errors={state.errors} />

              <label htmlFor="user"> Email* </label>
              <input
                type="email"
                id="user"
                name="email"
                placeholder="email"
                className={emailStyle}
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                required
              ></input>
              <ValidationError
                prefix="email"
                field="email"
                errors={state.errors}
              />

              <label htmlFor="user"> errechneter Entbindungstermin* </label>
              <input
                type="date"
                id="datepicker"
                name="entbindungstermin"
                placeholder="errechneter Entbindungstermin"
                className={birthStyle}
                value={enteredBirth}
                onChange={birthChangeHandler}
                onBlur={birthBlurHandler}
                required
              />
              <ValidationError
                prefix="birth"
                field="birth"
                errors={state.errors}
              />

              <label htmlFor="user"> Krankenkasse* </label>
              <input
                type="text"
                id="user"
                name="krankenkasse"
                required
                value={enteredInsurance}
                onChange={insuranceChangeHandler}
                onBlur={insuranceBlurHandler}
                placeholder="krankenkasse"
                className={insuranceStyle}
              ></input>
              <ValidationError
                prefix="insurance"
                field="insurance"
                errors={state.errors}
              />

              <label htmlFor="user">
                schreibe mir gern weitere Anliegen / Fragen
              </label>
              <textarea
                id="user"
                name="nachricht"
                className="input"
              ></textarea>
              <p className={styles.InfoParagraph}>* bitte nutze maximal 140 Zeichen </p>

              {formSubmitted && <p className={styles.successMessage}> {successMessage} </p>}
              <ValidationError
                prefix="message"
                field="message"
                errors={state.errors}
              />

              <label htmlFor="user"> </label>

              <div>
                <input
                  type="checkbox"
                  name="datenschutz"
                  onClick={checkboxHandler}
                ></input>{" "}
                ja, ich habe den Datenschutzhinweis gelesen und akzeptiere die
                dortigen Bedingungen.
              </div>
              <ValidationError
                prefix="datenschutz"
                field="datenschutz"
                errors={state.errors}
              />

              <button type="submit">sende deine Anfrage</button>

              {!formComplete && (
                <p className={styles.formInfos}>
                  bitte fülle alle Felder mit den Sternchen unbedingt aus und
                  akzeptiere die Datenschutzhinweise, ehe du die Kontaktanfrage
                  abschickst
                </p>
              )}
            </form>
          </div>
        </div>
      </Layout>

  );
};

export default Contact;
