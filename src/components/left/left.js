import React from 'react'
import './styles/styles.css'
import Logo from '../../images/Kuepa Logo.png'
import Persona from '../../images/persona.jpg'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function left() {
    return (
        <div className="left">
           <img src={Logo}/>
                <div className="iconos">
                    <div className="icon-casa">
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                        <div className ="icon-casa">
                            <FontAwesomeIcon icon={faClipboardList} />
                        </div>
                            <div className="icon-casa">
                                <FontAwesomeIcon icon={faPrint} />
                            </div>
                </div>
                <div className="persona">
                    <img src={Persona}/>
                </div>
        </div>
    )
}

export default left;