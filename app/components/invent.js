import { prisma } from "../config/db";

export default async function handler(req,res){
  switch(req.method){
    case "GET":
      return await getinventario(req,res)
    case "POST":
      return await addinv(req,res);
  }
}
const getinventario = async(req,res) =>{

  try{
    const result = await prisma.inventario.findMany();
    return res.status(200).json(result); 
  }catch(error){
    return res.status(500).json(error);
  }
}
const addinv = async(req,res) =>{
  try{

    const {tipo_inventario, nombre_inventario} = req.body;

    const data = {
      tipo_inventario: 0,
      nombre_inventario: "Inventario_3",
    }
    const result = await prisma.inventario.create({
      data:data
    })
    return res.status(200).json(result);
  }catch(error){
    return res.status(500).json(error);
  }
}
