import {ISotfaware,IRequirement} from "./Iprueba"
const Softaware:ISotfaware[] = [
    {
        id: 1,
        name: "Ejemplo1",
        price: 120,
        detail: "detalles ejemplo1",
        requerements: [{
            id:1,
            description:"ejemplo descripcion1",
            cost:20,
            effort:2,
            softwareId:1
        }]
    },{
        id: 2,
        name: "Ejemplo2",
        price: 300,
        detail: "detalles ejemplo2",
        requerements: [{
            id:2,
            description:"ejemplo descripcion2",
            cost:30,
            effort:3,
            softwareId:2
        }]
    },{
        id: 3,
        name: "Ejemplo3",
        price: 400,
        detail: "detalles ejemplo3",
        requerements: [{
            id:3,
            description:"ejemplo descripcion3",
            cost:40,
            effort:4,
            softwareId:3
        }]
    },
];

const SoftawareById = (price: number): ISotfaware[] => {
    const softwaresFiltrados = Softaware.filter((software: ISotfaware) => software.price > price);
  
    softwaresFiltrados.forEach((software: ISotfaware) => {
      console.log(software);
    });
  
    return softwaresFiltrados;
  };
  
  const softwaresFiltrados = SoftawareById(1);  
  console.log('Softwares Filtrados:', softwaresFiltrados);
  