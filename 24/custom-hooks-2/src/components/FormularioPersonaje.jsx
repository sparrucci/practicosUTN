import { useEffect, useState } from "react";

const FORM_VACIO = {
  name: "",
  species: "",
  status: "modo Spider",
  image: "",
};

//es tipo ENUM
const ESTADOS = ["modo Aracnido", "modo Humano", "unknown"];

// Este componente tiene la responsabillidad de reunir la información para crear el registro
// No es responsable del envío de los datos
function FormularioPersonaje({
  personajeEnEdicion,
  onCrear,
  // onCancelar
}) {
  //formulario controlado: es un formulario linkeado con el estado. Es un objeto
  const [form, setForm] = useState(FORM_VACIO);
  const [enviando, setEnviando] = useState(false);

  // va a manejar los cambios en el personajeEnEdicion
  //los cambios que el tenga
  useEffect(() => {
    if (personajeEnEdicion) {
      setForm({
        name: personajeEnEdicion.name,
        species: personajeEnEdicion.species,
        status: personajeEnEdicion.status,
        image: personajeEnEdicion.image || "",
      });
    } else {
      setForm(FORM_VACIO);
    }
  }, [personajeEnEdicion]);

  //Usa los atributos name y value para saber que parte del objeto form actualizar
  //sin importar cuantos cambios tenga el formulario
  //ni tampoco el tipo de input que fue utilizado
  const manejarCambios = (evento) => {
    const { name, value } = evento.target;
    setForm((actual) => ({ ...actual, [name]: value }));
  };

  const handleSubmit = async (evento) => {
    //despues lo completamos
    evento.preventDefault()
    if(form.name.trim() === "" || form.species.trim() === "")
    return;

    setEnviando(true)
    // el await genera una pausa, manda la info y espera rpta
    await onCrear(form)
    //hasta que no responsa la API no setea el formulario
    setForm(FORM_VACIO)
    setEnviando(false)

  };

  return (
    <form onSubmit={handleSubmit}
    className="formulario-personaje">
      <h3> Creando personaje</h3>
      <div className="campo">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          // El input modifica al estado a traves de eventos
          onChange={manejarCambios}
          placeholder="Ej: Spider-Man"
        />
      </div>
      <div className="campo">
        <label htmlFor="species">Especie</label>
        <input
          type="text"
          id="species"
          name="species"
          value={form.species}
          // El input modifica al estado a traves de eventos
          onChange={manejarCambios}
          placeholder="Ej: Humano-Aracnido"
        />
      </div>
      <div className="campo">
        <label htmlFor="status">Estado</label>
        <select name="status" id="status">
          {ESTADOS.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </select>
      </div>
      <div className="campo campo-ancho">
        <label htmlFor="image">URL de la foto</label>
        <input
          type="url"
          id="image"
          name="image"
          placeholder="https://..."
          value={form.image}
          // El input modifica al estado a traves de eventos
          onChange={manejarCambios}
        />
      </div>
      {/*//preview de imagenes //copio el código del profe
          Tarjeta que se escribe sola: React redibuja esto en cada tecla
          porque "form" cambia con cada onChange — la prueba visual de
          que el input está controlado. */}
      <div className="tarjeta-preview">
        {form.image ? (
          <img src={form.image} alt="" className="tarjeta-preview-imagen" />
        ) : (
          <div className="tarjeta-preview-avatar">{form.name || "?"}</div>
        )}
        <span className={`estado estado-${form.status.toLowerCase()}`}>
          {form.name || "Nombre..."} · {form.species || "Especie..."}
        </span>
      </div>

      
      <div className="formulario-botones">
        {/* disable permite que si un boton esta en true no pueda ser usado */}
        <button type="submit" disabled={enviando}>
          {enviando
            ? "Guardando..."
            : personajeEnEdicion
              ? "Guardar cambios"
              : "Crear personaje"}
        </button>
        {personajeEnEdicion && (
          <button
            className="botón-secundario"
            onClick={onCancelar}
            type="button"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default FormularioPersonaje;
