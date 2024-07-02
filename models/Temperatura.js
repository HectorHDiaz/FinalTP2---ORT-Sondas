class Temperatura{

  sondas = [
    {
      id:1,
      registrosTemperaturas:[]
    },
    {
      id:2,
      registrosTemperaturas:[]
    },
    {
      id:3,
      registrosTemperaturas:[]
    },
    {
      id:4,
      registrosTemperaturas:[]
    },
    {
      id:5,
      registrosTemperaturas:[]
    },
  ]


getAllRegistros = async () =>{
  const alltemperaturas = []
  this.sondas.forEach(element => {

    alltemperaturas.push(element.registrosTemperaturas);

  });

return alltemperaturas
}
getRegistrosBysondaId = async (id) =>{
  return this.sondas.find(sonda=>sonda.id == id).registrosTemperaturas;
}



create = async (id, newTemperatura) =>{
  return  this.sondas.find(sonda=>sonda.id == id).registrosTemperaturas.push({
    Temperatura: newTemperatura+"°", 
    date: new Date(8.64e15).toString()
  })
   
}

}
export default Temperatura