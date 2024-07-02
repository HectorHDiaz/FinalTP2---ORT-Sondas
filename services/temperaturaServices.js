import Temperatura from "../models/Temperatura.js"
class TemperaturaServices{
  
  temperaturaModel = new Temperatura();

getAllTemperaturasService = async() =>{
  try {
    return this.temperaturaModel.getAllRegistros();
  } catch (error) {
    throw error
  }
}

getTemperaturaBySondaIdService = async(id) =>{
  try {
    if(!id){
      throw "datos no validos"
    }
    if(id<=0 || id>5){
      throw "datos no validos"
    }
    return this.temperaturaModel.getRegistrosBysondaId(id)
  } catch (error) {
    throw error
  }
}

createTemperaturaService = async(id, newTemperatura) =>{
  try {

    if(!id || !newTemperatura){
      throw "datos no validos"
    }
    const IdValidate = /^\d+$/.test(id);
    const temperaturaValidate = /^\d+$/.test(newTemperatura);
    if(!IdValidate|| !temperaturaValidate){
      throw "letras no validas"
    }
    
    if(id<=0 || id>5){
      throw "id no valida"
    }
    if(newTemperatura<-20 || newTemperatura>100){
      throw "temperatura no valida"
    }
    return this.temperaturaModel.create(id, newTemperatura)
  } catch (error) {
    throw error
  }
}

}

export default TemperaturaServices