const mongoose = require("mongoose");

const Coche = require ("../api/models/coches.model");


const coches = [

    {
        modelo: "Ford Mustang",
        categoria: "Deportivo",
        plaza:5,
        foto:"https://d500.epimg.net/cincodias/imagenes/2019/11/06/motor/1573028913_081917_1573029020_sumario_normal.jpg"
      },
      {
        modelo: "Range Rover Evoque",
        categoria: "Todoterreno",
        plaza: 5 ,
        foto:"https://images.coches.com/_vn_/landrover/Evoque/4662fe7db3a4376a8f94d134a7c4e216.jpg?p=cc_vn_medium"
      },
     
     
]; 

const cochesDocuments = coches.map((pelicula) => new Coche(pelicula));

mongoose
  .connect("mongodb://localhost:27017/coches", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(async () => {
    

    const allcoches = await Coche.find();
    if (allcoches.length) {
      await Coche.collection.drop();
      console.log("coches DB deleted")
    }
  })

  .catch((error) => console.log("Error deleting coches", error))
  
  .then(async () => {
    await Coche.insertMany(cochesDocuments);
    console.log("coches DB created")
  })

  .catch((error) => console.log("Error creating coches", error))

  .finally(() => mongoose.disconnect());