const mongoose = require("mongoose");

const Zapatilla = require ("../api/models/zapatillas.model");


const zapatillas = [
    {
      name: "Jordan XV",
      year: 1999,
      img: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0203%2Fr50587_608x342_16%2D9.jpg&w=570&format=jpg",
    },
    {
      name: "Jordan 18",
      year: 2003,
      img:"https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0203%2Fr50580_608x342_16%2D9.jpg&w=570&format=jpg",
    },
    {
      name: "Jordan 26",
      year: 2011,
      img:"https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0203%2Fr50578_608x342_16%2D9.jpg&w=570&format=jpg",
    },
    {
      name:"Jordan XX1 ",
      year: 2006,
      img: "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2016%2F0203%2Fr50574_608x342_16%2D9.jpg&w=570&format=jpg"
    },

  ];

const zapastillasDocuments = zapatillas.map(zapatillas) => new Zapatilla(zapatillas));

mongoose
  .connect("mongodb://localhost:27017/zapatillas", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(async () => {
    
    const allzapatillas = await zapatilla.find();
    if (allzapatillas.length) {
      await Zapatilla.collection.drop();
      console.log("zapatilla DB deleted")
    }
  })

  .catch((error) => console.log("Error deleting zapatillas", error))
  
  .then(async () => {
    await Zapatilla.insertMany(zapatillasDocuments);
    console.log("zapatilla DB created")
  })

  .catch((error) => console.log("Error creating zapatilla", error))

  .finally(() => mongoose.disconnect());