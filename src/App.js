import VideoInteractivo from "../Componentes/Video/VideoInteractivo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <VideoInteractivo />
      <div className="o-contenedorInstrucciones">
        <div className="o-ImagenRotacion">
          <img
            className="o-imgR"
            src="https://uploads.codesandbox.io/uploads/user/c4e213d5-fcdf-410b-8365-0e16f5ae6199/dHva-Rotate.png"
          ></img>
        </div>
        <div className="o-TextoRotacion">
          <h2>Por favor! Rota tu dispositivo horizontalmente</h2>
        </div>
      </div>
    </div>
  );
}
