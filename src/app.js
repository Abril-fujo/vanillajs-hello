import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector(".generarExcusa").innerHTML = generarExcusa();
};

let generarExcusa = function() {
  let pronombre = ["A", "The"];
  let sujeto = ["dog", "merchant", "comedian", "jogger", "pinecone"];
  let accion = ["eated my", "burned my", "kicked my", "threw my", "yelled at"];
  let posesion = ["homework", "computer", "car", "sandwich"];
  let lugar = [
    "in front of the office",
    "in my house",
    "on the street",
    "near the toilet"
  ];

  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let posesionIndex = Math.floor(Math.random() * posesion.length);
  let lugarIndex = Math.floor(Math.random() * lugar.length);

  return (
    pronombre[pronombreIndex] +
    "" +
    sujeto[sujetoIndex] +
    "" +
    accion[accionIndex] +
    "" +
    posesion[posesionIndex] +
    "" +
    lugar[lugarIndex]
  );
};
