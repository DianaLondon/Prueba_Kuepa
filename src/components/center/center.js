import React from 'react'
import './styles/styles.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default class Calls extends React.Component{
    constructor (props){
      super(props)
      this.state = {
        datos:[],
        isFetch:true,
      }
    }
    componentDidMount(){
      fetch('https://api.opendota.com/api/heroes')
      .then(response =>response.json())
      .then(datosJson => this.setState({datos: datosJson, isFetch:false}))
    }
  render() {
    if(this.state.isFetch){
      return 'Loading...'
    }
    const name = this.state.datos[5].localized_name
    const name1 = this.state.datos[7].localized_name
    const name2 = this.state.datos[9].localized_name
    const name3 = this.state.datos[11].localized_name
    const name4 = this.state.datos[13].localized_name
    return  (
        <div className="center">
            <div className="top">
            <div className="search">
                <p> <FontAwesomeIcon icon={faSearch} /> Search...</p>
            </div>
            <div className="title"><p>Hola, jorge</p></div>
                <div className="posterior">
                <div className="información">
                <div class="porcentaje">
        <div class="container">
            <div class="card">
                <div class="box">
                    <div class="porcent">
                        <svg className="circle_svg">
                            <circle cx="50" cy="50" r="50"/>
                            <circle cx="50" cy="50" r="50"/>
                        </svg>
                        <div class="number">
                            <h2>75<span>%</span></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
           <div className="letras">
                    <p>Leads</p>
                       <p>obtenidos</p>

                           <p>Matriculas</p>
                              <p>Finalizadas</p>
            </div>
                    <div className="numeros">
                              <p>50/100</p>
                                 <p>10/20</p>
                         </div>
                            <div className="letras">
                                 <p>Cola de</p>
                                    <p>Llamadas</p>
                            </div>
                              <div className="numeros">
                                    <p>50/100</p>
                               </div>
                </div>
                <div className="Metas">
                    <p>Meta grupal</p>
                        <div className="leads">
                        <div className="primero">
                            <h4>
                                Leads obtenidos
                            </h4>
                                <h4>
                                    200/400
                                </h4>
                        </div>
                    <div className="progress_var"></div>
                    <div className="primero">
                        <h4>
                            Leads obtenidos
                        </h4>
                        <h4>
                            200/400
                        </h4>
                    </div>
                    <div className="progress_var"></div>
               </div>
        </div>
            </div>
            </div>
            <div className="bottom">
                <div className="conexiones">
                    <p>Conexiones de agenda para hoy</p>
                <div className="box_one">
                  <div className="name">
                    {name1}
                  </div>
                  <div className="llamada">
                      <p>Llamar</p>
                      <p>Descuento temporada</p>
                  </div>
                  <div className="bolita"></div>
                  <div className="icons">
                        <div className="telefono">
                            <FontAwesomeIcon icon={faPhoneAlt} /></div>
                        <div className="mensaje">
                            <FontAwesomeIcon icon={faCommentDots} /></div>
                  </div>
                </div>
                <div className="box_two">
                <div className="name">
                {name2}
                  </div>
                  <div className="llamada">
                      <p>Llamar</p>
                      <p>Descuento temporada</p>
                  </div>
                  <div className="bolita"></div>
                  <div className="icons">
                        <div className="telefono">
                            <FontAwesomeIcon icon={faPhoneAlt} /></div>
                        <div className="mensaje">
                            <FontAwesomeIcon icon={faCommentDots} /></div>
                  </div>
                </div>
                <div className="box_one">
                  <div className="name">
                        {name3}
                  </div>
                  <div className="llamada">
                      <p>Llamar</p>
                      <p>Descuento temporada</p>
                  </div>
                  <div className="bolita"></div>
                  <div className="icons">
                        <div className="telefono">
                           <FontAwesomeIcon icon={faPhoneAlt} /></div>
                        <div className="mensaje">
                           <FontAwesomeIcon icon={faCommentDots} /></div>
                  </div>
                </div>
                <div className="box_two">
                <div className="name">
                {name4}
                  </div>
                  <div className="llamada">
                      <p>Llamar</p>
                      <p>Descuento temporada</p>
                  </div>
                  <div className="bolita"></div>
                  <div className="icons">
                        <div className="telefono">
                            <FontAwesomeIcon icon={faPhoneAlt} /></div>
                        <div className="mensaje">
                            <FontAwesomeIcon icon={faCommentDots} /></div>
                  </div>
                </div>
        <div className="box_one">
                <div className="name">
                    {name}
                </div>
                    <div className="llamada">
                        <p>Llamar</p>
                        <p>Descuento temporada</p>
                    </div>
            <div className="bolita"></div>
                <div className="icons">
                    <div className="telefono">
                        <FontAwesomeIcon icon={faPhoneAlt} /></div>
                    <div className="mensaje">
                        <FontAwesomeIcon icon={faCommentDots} /></div>
                </div>
        </div>
        </div>
            <div className="planes">
                <div className="title">
                        <div className="plan">
                            <p>Tu plan de hoy</p>
                        </div>
                               <div className="llamados">
                                 <p>Ir a la gestión de llamados ></p>
                              </div>
                </div>
            </div>
        </div>
    </div>
    )
    
  }}
  

