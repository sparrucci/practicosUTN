const nombres = [
  "Lucas", "Ana", "Marta", "Nico", "Sofía", "Mateo", "Valentina", "Alejandro", 
  "Lucía", "Carlos", "María", "Daniel", "Paula", "David", "Elena", "Javier", 
  "Carmen", "Diego", "Laura", "Pablo", "Sara", "Manuel", "Isabel", "Álvaro", 
  "Beatriz", "Adrián", "Clara", "Mario", "Julia", "Sergio", "Alba", "Jorge", 
  "Raquel", "Marcos", "Irene", "Iván", "Natalia", "Rubén", "Andrea", "Héctor", 
  "Claudia", "Alberto", "Marina", "Víctor", "Silvia", "Alfonso", "Rosa", "Raúl", 
  "Teresa", "Enrique", "Lorena", "Fernando", "Miriam", "Gonzalo", "Patricia", 
  "Roberto", "Alicia", "Francisco", "Cristina", "Guillermo", "Nerea", "Eduardo", 
  "Mónica", "Ramón", "Beatriz", "Samuel", "Rocío", "Ignacio", "Ainhoa", "Felipe", 
  "Noelia", "Arturo", "Eva", "Oscar", "Yolanda", "Vicente", "Sonia", "Emilio", 
  "Nuria", "César", "Esther", "Aitor", "Victoria", "Borja", "Inés", "Hugo", 
  "Lidia", "Gael", "Blanca", "Gorka", "Candela", "Eneko", "Olatz", "Unai", 
  "Jimena", "Iker", "Leyre", "Asier", "Maite", "Jon"
];


function ListaNombres() {
  return (
    <section className='tarjeta'>
        <h2>Nombres</h2>
        <ul className='lista-nombres'>
          {nombres.map((nombre, index) => (
            <li key={index}> {nombre} </li>
          ))}  
        </ul>
    </section>
  )
}

export default ListaNombres