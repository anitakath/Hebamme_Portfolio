import { useForm, ValidationError } from "@formspree/react";

import Layout from "@/components/Layout";


export const getServerSideProps = async () =>{
  
  try{
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();

    return{
      props:{
        people: data.results
      }
    }

  } catch (error){
    console.log(error)

    return{
      props:{
        people: []
      }
    }
  }
}

const Contact = ({people}) => {
  const submitFormHandler = () => {};

  const [state, handleSubmit] = useForm("....")

  if(state.succeeded){
    return <p> thanks for your deubmission!</p>
  }

  return (
    <div>
      <Layout>
        <h1>Contact</h1>
        {people.map((person) =>(
          <div key={person.name}>
            <p> {person.name}</p>
            <p> {person.height}</p>

          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <label htmlFor="fName"> Vorname* </label>
          <input
            type="text"
            name="fName"
            id="fName"
            placeholder="vorname"
          ></input>

          <label htmlFor="lName"> Nachname* </label>
          <input
            type="text"
            name="lName"
            id="lName"
            placeholder="nachname"
          ></input>

          <label htmlFor="user"> Adresse & Hausnummer* </label>
          <input
            type="text"
            id="user"
            name="adress"
            placeholder="adresse und hausnummer"
            required
          ></input>

          <label htmlFor="user"> Postleitzahl* </label>
          <input
            type="number"
            id="user"
            name="postal"
            placeholder="postleitzahl"
            required
          ></input>

          <label htmlFor="user"> Telefon* </label>
          <input
            type="tel"
            id="user"
            name="tel"
            placeholder="telefon"
            required
          ></input>

          <label htmlFor="user"> Email* </label>
          <input
            type="email"
            id="user"
            name="email"
            placeholder="email"
            required
          ></input>

          <label htmlFor="user"> errechneter Entbindungstermin* </label>
          <input
            type="date"
            id="datepicker"
            name="birth"
            placeholder="errechneter Entbindungstermin"
            required
          />

          <label htmlFor="user"> Krankenkasse* </label>
          <input
            type="text"
            id="user"
            name="insurance"
            required
            placeholder="krankenkasse"
          ></input>

          <label htmlFor="user">
            {" "}
            schreibe mir gern weitere Anliegen / Fragen{" "}
          </label>
          <textarea
            id="user"
            name="message"
            placeholder="schreibe mir gern weitere anliegen / fragen"
          ></textarea>

          <label htmlFor="user"> </label>

          <div>
            <input type="checkbox"></input> ja, ich habe den Datenschutzhinweis
            gelesen und akzeptiere die dortigen Bedingungen.
          </div>

          <button type="submit">sende deine Anfrage</button>

          <p>
            bitte fülle alle Felder mit den Sternchen unbedingt aus und
            akzeptiere die Datenschutzhinweise, ehe du die Kontaktanfrage
            abschickst
          </p>
        </form>
      </Layout>
    </div>
  );
};

export default Contact;
