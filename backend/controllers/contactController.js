const Contact =
require("../models/Contact");

// SAVE CONTACT MESSAGE

const saveMessage =
async (req, res) => {

  try {

    const message =
      await Contact.create({

        name: req.body.name,

        email: req.body.email,

        message: req.body.message

      });

    res.status(201).json(message);

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// GET ALL CONTACT MESSAGES
const getMessage =
async (req, res) => {

  try {

    const messages =
      await Contact.find();

    res.status(200).json(messages);

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  saveMessage,
  getMessage
};
