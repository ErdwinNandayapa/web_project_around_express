const Card = require("../models/card");

exports.getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createCard = async (req, res) => {
  try {
    const { name, link } = req.body;
    const owner = req.user._id; // Usar el _id del usuario inyectado por el middleware
    const newCard = new Card({ name, link, owner });
    await newCard.save();
    res.status(200).json(newCard);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndRemove(req.params.cardId);
    if (!card){
      return res.status(400).json({message:"Card not found"})
    }
    res.status(200).json({message: "card deleted"})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
