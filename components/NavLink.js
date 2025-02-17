import { useRouter } from "next/router";
import Link from "next/link";
//STYLES
import '../styles/Navigation.css'


function NavLink({ href, children }) {
  const router = useRouter();
 

  // Überprüfe, ob der aktuelle Pfad mit dem href übereinstimmt
  const isActive = router.pathname === href;

  // Weise eine andere Klasse basierend auf isActive zu
  const className = isActive ? "activeLink" : "inactiveLink";


 

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default NavLink;
