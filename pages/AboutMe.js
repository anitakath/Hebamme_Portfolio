
import Layout from "@/components/Layout"
//import { getServerSideProps } from "next";



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





const AboutMe = ({people}) =>{



    return (
      <Layout>
        <h1>About Me</h1>

        {people.map((person) =>(
          <div key={person.name}>
            <p> Name: {person.name}</p>
            <p> Height: {person.height}</p>
          </div>
        ))}
        
      
      </Layout>
    );
}



export default AboutMe;