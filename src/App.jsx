import { useState } from 'react';
import FormularioZodiaco from './components/FormularioZodiaco';
import ResultadoZodiaco from './components/ResultadoZodiaco';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [datosUsuario, setDatosUsuario] = useState(null);
  const [informacionZodiaco, setInformacionZodiaco] = useState(null);

  const manejarEnvioFormulario = (nombre, fechaNacimiento) => {
    const [año, mes, dia] = fechaNacimiento.split('-').map(Number);
    const signoZodiacal = calcularSignoZodiacal(dia, mes);
    const horoscopo = obtenerHoroscopoDiario(signoZodiacal);

    setDatosUsuario({ nombre, fechaNacimiento: `${dia}/${mes}/${año}` });
    setInformacionZodiaco({
      signo: signoZodiacal,
      horoscopo: horoscopo,
      imagen: `/images/${signoZodiacal.toLowerCase()}.png`
    });
  };

  const calcularSignoZodiacal = (dia, mes) => {
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) return "Aries";
    if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) return "Tauro";
    if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) return "Géminis";
    if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) return "Cáncer";
    if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) return "Leo";
    if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) return "Virgo";
    if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) return "Libra";
    if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) return "Escorpio";
    if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) return "Sagitario";
    if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) return "Capricornio";
    if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) return "Acuario";
    if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) return "Piscis";
    return "Capricornio";
  };

  const obtenerHoroscopoDiario = (signo) => {
    const horoscopos = {
      "Aries": "Los astros potencian hoy tu poder de seducción, Aries. Si eres un corazón libre, sentirás que atraes muchas miradas. Sólo tendrás que elegir, pero has de hacerlo sin prejuicios. A diario evita los impulsos y no te quedes en lo superficial, procura conocer mejor a tus pretendientes.",
      "Tauro": "La paciencia será tu mejor aliada hoy en tu trabajo tienes muchos problemas esta paciencia sera fundamental esta semana",
      "Géminis": "Día ideal para la comunicación en la familia sientate a comer y platicales sobre como te fue como les va a ellos.",
      "Cáncer": "Las emociones estarán a flor de piel con tu persona de interes ten en cuenta todas las posibilidades y platicalo con el.",
      "Leo": "Tu carisma natural brillará hoy las personas te veran mucho y simpatizaran contigo seras la manzana prohibida aprobechalo",
      "Virgo": "Día perfecto para realizar tus actividades cotidianas mantente en alto simepre fuerte .",
      "Libra": "El equilibrio será clave hoy se te vienen muchas cosas fuertes procura siempre estar altiva y con buena actitud ante las cosas ",
      "Escorpio": "El amor surgirá hoy en algún lugar insospechado, Piscis. Quizá no sea una pasión arrolladora, pero puedes vivir una bonita historia y compartir momentos de gran felicidad",
      "Sagitario": "El amor surgirá hoy en algún lugar insospechado, Piscis. Quizá no sea una pasión arrolladora, pero puedes vivir una bonita historia y compartir momentos de gran felicidad",
      "Capricornio": "El amor surgirá hoy en algún lugar insospechado, Piscis. Quizá no sea una pasión arrolladora, pero puedes vivir una bonita historia y compartir momentos de gran felicidad",
      "Acuario": "Valorarás hoy positivamente tu situación de libertad amorosa, Acuario, sin ataduras ni responsabilidades sentimentales. No te gusta tener que rendir cuentas a diario a quien sea",
      "Piscis": "El amor surgirá hoy en algún lugar insospechado, Piscis. Quizá no sea una pasión arrolladora, pero puedes vivir una bonita historia y compartir momentos de gran felicidad"
    };
    return horoscopos[signo] || "Hoy es un día especial para ti. Confía en el universo.";
  };

    return (
      <div className="app-fondo d-flex justify-content-center align-items-center vh-100">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-12 mb-4">
              <h1 className="text-light"> Zodiaco App</h1>
            </div>
            <div className="col-md-5 mb-3">
              <FormularioZodiaco alEnviar={manejarEnvioFormulario} />
            </div>
            <div className="col-md-5 mb-3">
              <ResultadoZodiaco 
                datosUsuario={datosUsuario} 
                informacionZodiaco={informacionZodiaco} 
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
