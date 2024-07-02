import TemperaturaServices from "../services/temperaturaServices.js";

class TemperaturaController{

  temperaturaServices = new TemperaturaServices();

getAllTemperaturas = async(req, res) =>{
  try {
    const data = await this.temperaturaServices.getAllTemperaturasService();
    res.status(200).send({ Msg: data })
  } catch (error) {
    res.status(400).send({ errorMsg: error });
  }
}

getTemperaturasBySondaId = async(req, res) =>{
  try {
    const {id} = req.params
    const data = await this.temperaturaServices.getTemperaturaBySondaIdService(id);
    res.status(200).send({ Msg: data })
  } catch (error) {
    res.status(400).send({ errorMsg: error });
  }
}

createTemperatura = async(req, res) =>{
  try {
    const {id, temperatura} = req.body;
    const data = await this.temperaturaServices.createTemperaturaService(id, temperatura);
    res.status(200).send({ Msg: data })
  } catch (error) {
    res.status(400).send({ errorMsg: error });
  }
}


}

export default TemperaturaController;