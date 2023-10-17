import { useRouter } from "next/router";
import Link from "next/link";


//STYLES
import styles from '../styles/Navigation.module.css'
import '../styles/Navigation.css'


function NavLink({ href, children }) {
  const router = useRouter();
  console.log(router)

  // Überprüfe, ob der aktuelle Pfad mit dem href übereinstimmt
  const isActive = router.pathname === href;

  // Weise eine andere Klasse basierend auf isActive zu
  const className = isActive ? "active" : "inactive";

  console.log(className)

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default NavLink;
