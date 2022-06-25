const { Books } = require("../database/models");
const cloudinary = require('../config/cloudinary')

const imageFolder = "images/"
const BookController = {
  async create(req, res) {
    const file = req.files[0];
   const uploadPath = await cloudinary.uplads(file.path, 'livraria')

    const newBook = await Books.create({
      ...req.body,

    image:  uploadPath.imageUrl
    });

    return res.status(201).json(newBook);
  },
};

module.exports = BookController;
