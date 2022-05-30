const req = require("express/lib/request");
const res = require("express/lib/response");
const Coche = require("../models/coches.model")

const getAllCoches = async (req,res,next) => {

 try {
     const allCoches = await Coche.find();

     console.log(allCoches);
     return res.status(200).json(allCoches)
 } catch (error) {
     return res.status(500).json(error)
 }

};


const getCocheById = async (req,res) => {
    const {id} = req.params.id;
    try {
        const cocheById = await Coche.findById(id);
        return res.status(200).json(cocheById)
    } catch (error) {
        return res.status(500).json(error)
    }
   
};

const getCocheByPlazas = async (req,res) => {
 const plazas = req.params.plazas;

 try {
     const cocheByPlazas = await Coche.find({plazas: plazas});
     return res.status(200).json(cocheByPlazas)
 } catch (error) {
     return res.status(500).json(error)
 }

};

const patchCoche = async (req, res, next) => {

    try {

        const { id } = req.params;

        const patchCoche= new Coche(req.body);

        patchCoche._id = id;

        const CocheDB = await Coche.findByIdAndUpdate(id, patchCoche);

        return res.status(200).json({ nuevo: patchCoche, vieja: CocheDB})
        
    } catch (error) {
        return next(error)
    }

}


module.exports = {getAllCoches,getCocheByPlazas,getCocheById,patchCoche};