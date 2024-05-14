const Card = require('../models/card')

exports.getCards = async(req,res)=>{
  try{

  }catch(error){
    res.status(500).json({message: error.message})
  }
}

exports.createCard = async (req,res)=>{
  try{

  }catch(error){
    req.status(500).json({message: error.message})
  }
}

exports.deleteCard = async (req, res)=>{
try{

}catch(error){
  req.status(500).json({message: error.message})
}

}