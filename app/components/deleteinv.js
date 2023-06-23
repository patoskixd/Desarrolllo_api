import { prisma } from "../config/db";

export default async function handler(req, res){
    switch(req.method){
        case "GET":
            return await getinv(req,res)

        case "PUT":
            return await updateInv(req, res)

        case "DELETE":
            return await deleteinv(req,res)
    }
}

const getinv = async(req, res) =>{

    try{
        const{invId} = req.query;

        const result = await prisma.inventario.findFirst({
            where:{
                id_inventario:{
                    equals : parseInt(invId)
                }
            }
        })

        return res.status(200).json(result);
    }catch(error){
        return res.status(500).json(error.message);
    }
}

const updateInv = async(req,res) =>{
    try{
        const {nombre_inventario} = req.body;
        const {invId} = req.query;

        const result = await prisma.inventario.update({
            where:{
                id_inventario: parseInt(invId)
            },
            data:{
                nombre_inventario:nombre_inventario
            }
        })

    }catch(error){
        return res.status(500).json(error.message)
    }
}

const deleteinv = async(req,res) =>{
    try{
        const{invId} = req.query;

        const result = await prisma.inventario.delete({
            where :{
                id_inventario:parseInt(invId)
            }
        })

        return res.status(200).json(result)
    }catch(error){
        return res.status(500).json(error.message)
    }
}