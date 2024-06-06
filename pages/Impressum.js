import Link from "next/link";

//COMPONENTS
import Layout from "@/components/Layout";

//STYLES
import styles from '../styles/Impressum.module.css'

const Impressum = () =>{

    return (
      <Layout>
        <div className={styles.sectionContainer}>
          <div className={styles.infoWrapper}>
            <h2> Anne-Kathrin Wagner </h2>

              <p>
                kontaktieren Sie mich gern über mein
                <Link href="/kontakt" className={styles.link}>
                  Kontaktformular
                </Link>
                 oder per E-Mail:
                <a
                  href="mailto:wagner.annekathrin@gmx.de"
                  className={styles.email}
                > wagner.annekathrin@gmx.de </a>
              </p>
              <p>
                Ich bin Hebamme in Hamburg und der Behörde für Arbeit,
                Gesundheit, Soziale Familie und Integration zugehörig. Zudem
                bin ich Mitglied beim Deutschen Hebammenverband und
                berücksichtige während meiner Arbeit stets die offiziellen
                <Link
                    href="https://www.g-ba.de/richtlinien/19/"
                    target="_blank"
                    className={styles.link}
                >
                  Mutterschaftsrichtlinien.
                </Link>
              </p>
              <p>
                Folgend meine Umsatzsteueridentifikationsnummer (USt-ID):
                00/000/00000
              </p>
          </div>
        </div>
      </Layout>
    );
}

export default Impressum;