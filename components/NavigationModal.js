import React from "react";
import NavLink from "./NavLink";
import '../styles/Modal.css'
//FONT AWESOME
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

function Modal (props){


    const mobileNavigationHandler = () => {
      props.setShowNavigationModal(false);
    };

    const Background = () => {
        return <div className="background"></div>;
    };

    const NavigationModal = props =>{
        return (
          <div className="navigationModal">
            <ul>
              <li>
                <NavLink href="/ueber-mich"> ÜBER MICH </NavLink>
              </li>
              <li>
                <NavLink href="/meine-dienstleistungen">
                  MEINE DIENSTLEISTUNGEN
                </NavLink>
              </li>
              <li>
                <NavLink href="/kontakt">KONTAKT</NavLink>
              </li>
              <li>
                <NavLink href="/">STARTSEITE</NavLink>
              </li>
            </ul>

            <button
              id="closeNavigationBtn"
              onClick={mobileNavigationHandler}
              className="closeModalBtnWrapper"
            >
              <FontAwesomeIcon icon={faX} className="closeModalBtn" />
            </button>
          </div>
        );

    }

    return (
      <div className="primaryContainer">
        <Background></Background>
        <NavigationModal></NavigationModal>
      </div>
    );
}

export default Modal;