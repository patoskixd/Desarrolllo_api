import { prisma } from "../config/db";

export default async function handler(req,res){
    switch(req.method){
        
        case "DELETE":
            return await deletemulti(req,res)

        case "DELETE":
            return await deletemultip(req,res)
    }
}

const deletemulti = async(req,res) =>{
    try{

        const {ids} = req.body;

        await prisma.objeto.deleteMany({
            where: {
                id_objeto : {
                    in : ids
                }
            }
        })
    }catch(error){
        return res.status(500).json(error.message)
    }
}

const deletemultip = async(req,res) =>{
    try{

        const {ids} = req.body;

        await prisma.objeto_personalizado.deleteMany({
            where: {
                id_objeto_p : {
                    in : ids
                }
            }
        })
    }catch(error){
        return res.status(500).json(error.message)
    }
}