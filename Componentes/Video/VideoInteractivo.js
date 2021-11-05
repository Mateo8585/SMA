import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";

class VideoInteractivo extends React.Component {
  constructor(props) {
    super(props);
    this.RefVideo = React.createRef();
    this.RefBotones = React.createRef();
    this.state = {
      videoURL: "https://youtu.be/ylbmqfrc-2A",
      cicloMalas: 0,
      cicloBuenas: 0,
      ValidarTiempo: 15,
      Playing: false
    };
  } //Fin constructor

  //****************************************************/

  //Método para comenzar al tomar el tiempo del video
  EjecutarVideo = () => {
    let T = this;
    T.myInterval = setInterval(() => {
      var Tiempo = T.RefVideo.current.getCurrentTime();
      if (Tiempo >= this.state.ValidarTiempo) {
        this.RefBotones.current.style.visibility = "visible";
      } else if (Tiempo < this.state.ValidarTiempo) {
        this.RefBotones.current.style.visibility = "hidden";
      } //Fin condicón IF
      console.log(Tiempo);
    }, 1000);
  }; //Fin método

  //****************************************************/

  //Métodos para navegar entre los capítulos de la historia

  NavegacionCapitulo1 = () => {
    this.setState({
      videoURL: "https://youtu.be/ylbmqfrc-2A",
      cicloBuenas: 0,
      cicloMalas: 0,
      ValidarTiempo: 15,
      Playing: true
    });
  }; //Fin método

  NavegacionCapitulo2 = () => {
    this.setState({
      videoURL: "https://youtu.be/fi9YKCB_YuY",
      cicloBuenas: 1,
      cicloMalas: 1,
      ValidarTiempo: 6,
      Playing: true
    });
  }; //Fin método

  NavegacionCapitulo3 = () => {
    this.setState({
      videoURL: "https://youtu.be/duiy-CcIIj4",
      cicloBuenas: 2,
      cicloMalas: 2,
      ValidarTiempo: 7,
      Playing: true
    });
  }; //Fin método

  NavegacionCapitulo4 = () => {
    this.setState({
      videoURL: "https://youtu.be/pu_SKt-l7RA",
      cicloBuenas: 3,
      cicloMalas: 3,
      ValidarTiempo: 12,
      Playing: true
    });
  }; //Fin método

  //****************************************************/
  //Método para navegación de opciones

  OpcionesBuenas = () => {
    this.setState({
      cicloBuenas: this.state.cicloBuenas + 1
    });
    this.RefBotones.current.style.visibility = "hidden";

    var VerificacionBuena = this.state.cicloBuenas;

    //Empieza las condiciones
    if (VerificacionBuena === 0) {
      //Bicicleta y capítulo 2
      this.setState({
        videoURL: "https://youtu.be/fi9YKCB_YuY",
        ValidarTiempo: 6,
        cicloMalas: 1,
        Playing: true
      });
    } else if (VerificacionBuena === 1) {
      //Guardar basura y capítulo 3
      this.setState({
        videoURL: "https://youtu.be/duiy-CcIIj4",
        ValidarTiempo: 7,
        cicloMalas: 2,
        Playing: true
      });
    } else if (VerificacionBuena === 2) {
      //Llanta sin agua y capítulo 4
      this.setState({
        videoURL: "https://youtu.be/pu_SKt-l7RA",
        ValidarTiempo: 12,
        cicloMalas: 3,
        Playing: true
      });
    } else if (VerificacionBuena === 3) {
      //Cierra grifo y final
      this.setState({
        videoURL: "https://youtu.be/MUzrT1KonRM",
        ValidarTiempo: 30,
        Playing: true
      });
    }
  }; //Fin método

  OpcionesMalas = () => {
    this.setState({
      cicloMalas: this.state.cicloMalas + 1
    });
    this.RefBotones.current.style.visibility = "hidden";

    var VerificacionMala = this.state.cicloMalas;

    //Empieza las condiciones
    if (VerificacionMala === 0) {
      //Bus: Opción mala
      this.setState({
        videoURL: "https://youtu.be/C0twHkvol4g",
        ValidarTiempo: 7,
        Playing: true
      });
    } else if (VerificacionMala === 1) {
      //Tirar basura suelo: Opción mala
      this.setState({
        videoURL: "https://youtu.be/WUAdOqZotgk",
        ValidarTiempo: 7,
        Playing: true
      });
    } else if (VerificacionMala === 2) {
      //Ignorar llanta: Opción mala
      this.setState({
        videoURL: "https://youtu.be/rPVqAT3azME",
        ValidarTiempo: 10,
        Playing: true
      });
    } else if (VerificacionMala === 3) {
      //Ignorar grifo con agua: Opción mala
      this.setState({
        videoURL: "https://youtu.be/X5yAAQFVu34",
        ValidarTiempo: 12,
        Playing: true
      });
    }
  }; //Fin método

  //****************************************************/

  render() {
    return (
      <div className="o-contenedorVideoInteractivo">
        <div className="o-contenedorMenu">
          <div className="o-contenedorLabel">
            <label for="btn-menu" className="o-label">
              <FontAwesomeIcon icon={faBars} color="black" />
            </label>
          </div>
        </div>
        <div ref={this.RefBotones} className="o-contenedorBotonesInteractivos">
          <button className="o-botonOpciones" onClick={this.OpcionesBuenas}>
            OPCIÓN BUENA
          </button>
          <button className="o-botonOpciones" onClick={this.OpcionesMalas}>
            OPCIÓN MALA
          </button>
        </div>
        <input type="checkbox" id="btn-menu" />
        <div className="o-contenedorMenuDesplegable">
          <div className="o-Menu">
            <nav>
              <h1>SELECCIONAR CAPÍTULO</h1>
              <button type="button" onClick={this.NavegacionCapitulo1}>
                Capítulo 1: Transporte
              </button>
              <button type="button" onClick={this.NavegacionCapitulo2}>
                Capítulo 2: Descanso
              </button>
              <button type="button" onClick={this.NavegacionCapitulo3}>
                Capítulo 3: Comunidad
              </button>
              <button type="button" onClick={this.NavegacionCapitulo4}>
                Capítulo 4: Agua
              </button>
              <h2>COMPARTIR</h2>
              <a
                className="o-LinkCorreo"
                href="mailto:?Subject=Video%20interactivo%20cambio%20climático&body=Comparte el video en el siguiente link: https://qugxk.csb.app/"
              >
                <FontAwesomeIcon icon={faEnvelope} color="black" />
              </a>
            </nav>
          </div>
        </div>
        <ReactPlayer
          url={this.state.videoURL}
          ref={this.RefVideo}
          width="100%"
          height="100%"
          controls
          onPlay={this.EjecutarVideo}
          playing={this.state.Playing}
        />
      </div>
    );
  } //Fin render
} //Fin clase extends

export default VideoInteractivo;
