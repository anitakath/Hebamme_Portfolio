
import Layout from "../components/Layout";
//import { getServerSideProps } from "next";

//STYLES
import styles from '../styles/aboutme.module.css'

//IMAGES
import Image from "next/image";
import aboutMeImg from '../components/Images/aboutMeImg.jpg'
/*
export const getServerSideProps = async () =>{
  try {
    const response = await fetch("https://swapi.dev/api/people/");
    const data = await response.json();

    console.log(response)
    console.log(data)
    console.log(data.results)

    return {
      props: {
        people: data.results
      },
    };
  } catch (error) {
    console.error(error);
       
    return {
      props: {
        people: [],
      },
    };
  }
}


*/


const AboutMe = () =>{




    return (
      <Layout>
        <div className={styles.sectionContainer}>
          <div className={styles.aboutMeContainer}>
            <div className={styles.aboutMeTextWrapper}>
              <div className={styles.aboutMeTextContainer}>
                <h1> Meine Hebammenarbeit </h1>
                <p className={styles.paragraph}>
                  Mein Fokus als Hebamme liegt auf der Betreuung während der
                  Schwangerschaft sowie in der Zeit nach der Geburt. Um eine
                  ganzheitliche und moderne Betreuung zu ermöglichen, verbinde
                  ich traditionelles Hebammenwissen mit den neuesten
                  Erkenntnissen der Geburtshilfe. <br />
                  <br />
                  Ich bin fest davon überzeugt, dass eine ganzheitliche
                  Betreuung, die auf dem Verständnis der physiologischen
                  Prozesse und den Bedürfnissen der Frauen basiert, eine
                  positive Auswirkung auf das Geburtserlebnis und die postnatale
                  Zeit haben kann. Indem wir gemeinsam arbeiten, können wir eine
                  vertrauensvolle Beziehung aufbauen und einen Raum schaffen, in
                  dem Du Dich sicher, unterstützt und respektiert fühlst. <br />
                  <br />
                  Mein Tätigkeitsbereich in Hamburg umfasst vorrangig den Raum
                  Eimsbüttel, Eppendorf, Sternschanze, St. Pauli, Altona-Nord,
                  Altona-Altstadt, Ottensen und Bahrenfeld.  Um eine
                  individuelle und qualitativ hochwertige Betreuung
                  sicherzustellen, nehme ich jeweils nur eine begrenzte Anzahl
                  von Klientinnen gleichzeitig auf. 
                  <br />
                  Gerne spreche ich mir Dir Italienisch oder Spanisch.
                </p>
              </div>
              <div className={styles.aboutMeTextContainer}>
                <h1> Mein Werdegang </h1>
                <p className={styles.paragraph}>
                  2018 habe ich meine einjährige Dia Doula Ausbildung in Graz
                  erfolgreich abgeschlossen. Als Dia Doula habe ich wertvolle
                  Fähigkeiten und Techniken erlernt, um Frauen während der
                  Schwangerschaft, Geburt und Wochenbettzeit auf physischer,
                  emotionaler und mentaler Ebene zu begleiten. <br /> <br />
                  Im Jahr 2021 habe ich mein staatliches Hebammenexamen in
                  Hamburg bestanden. Diese Ausbildung ermöglichte es mir, meine
                  Kenntnisse und Fähigkeiten in der Geburtshilfe zu vertiefen
                  und mich auf die professionelle Betreuung von Müttern und
                  ihren Neugeborenen zu spezialisieren. Während meiner
                  Ausbildung habe ich ein fundiertes Verständnis für die
                  medizinischen Aspekte der Schwangerschaft und Geburt erworben
                  sowie für die Bedeutung einer einfühlsamen und ganzheitlichen
                  Betreuung. <br /> <br />
                  Um meine Expertise weiter auszubauen, habe ich im Jahr 2022
                  den Bachelor of Science in Hebammenwissenschaften in Buxtehude
                  erfolgreich abgeschlossen. Dieses Studium eröffnet mir eine
                  breite Palette an Wissen in den Bereichen Geburtshilfe,
                  pränatale und postnatale Versorgung, Gesundheitsförderung und
                  Forschung. Durch mein Studium konnte ich mich auch intensiv
                  mit aktuellen wissenschaftlichen Erkenntnissen und Best
                  Practices in der Hebammenarbeit auseinandersetzen. <br />
                </p>
              </div>
            </div>

            <div className={styles.aboutMeImgWrapper}>
              <Image
                priority={true}
                src={aboutMeImg}
                className={styles.aboutMeImg}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
}



export default AboutMe;