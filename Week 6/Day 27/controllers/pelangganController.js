const { barang, pelanggan, pemasok, transaksi } = require("../models");
const { ObjectId } = require("mongodb");
const crypto = require("crypto");
const path = require("path");

class PelangganController {
  async getAll(req, res) {
    try {
      let data = await pelanggan.find();
      if (data.length === 0) {
        return res.status(404).json({
          message: "Pelanggan not found!",
        });
      }

      return res.status(200).json({
        message: "Success.",
        data: data,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal server error.",
        error: error,
      });
    }
  }

  async getOne(req, res) {
    try {
      // Find one data
      let data = await pelanggan.findOne({
        _id: new ObjectId(req.params.id),
      });

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If failed
      console.log(e);
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Create data
  async create(req, res) {
    try {
      // If image was uploaded
      if (req.files) {
        const file = req.files.image;
        // Make sure image is photo
        console.log(file);
        if (!file.mimetype.startsWith("image")) {
          return res.status(400).json({ message: "File must be an image" });
        }

        // Check file size max 1MB
        if (file.size > 1000000) {
          return res
            .status(400)
            .json({ message: "Image must be less than 1MB" });
        }

        // Create custom filename
        let fileName = crypto.randomBytes(16).toString("hex");

        file.name = `${fileName}${path.parse(file.name).ext}`;

        req.body.photo = file.name;

        file.mv(`./public/images/${file.name}`, async (err) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              message: "Interval server error",
              error: err,
            });
          }
        });
      }

      // Create pelanggan data
      let createData = await pelanggan.create(req.body);

      //find created data
      let data = await pelanggan.findOne({ _id: createData._id });

      // If success
      return res.status(200).json({
        message: "Success",
        data: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Interval server error",
        error: error,
      });
    }
  }

  // Update data
  async update(req, res) {
    try {
      if (req.files) {
        const file = req.files.photo;

        // Make sure image is photo
        if (!file.mimetype.startsWith("image")) {
          return res.status(400).json({ message: "File must be an image" });
        }

        // Check file size (max 1MB)
        if (file.size > 1000000) {
          return res
            .status(400)
            .json({ message: "Image must be less than 1MB" });
        }

        // Create custom filename
        let fileName = crypto.randomBytes(16).toString("hex");

        // Rename the file
        file.name = `${fileName}${path.parse(file.name).ext}`;

        // assign req.body.image with file.name
        req.body.photo = file.name;

        // Upload image to /public/images
        file.mv(`./public/images/${file.name}`, async (err) => {
          if (err) {
            console.error(err);

            return res.status(500).json({
              message: "Internal Server Error",
              error: err,
            });
          }
        });
      }
      let data = await pelanggan.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        req.body,
        {
          new: true,
        }
      );

      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }

  // Delete Data
  async delete(req, res) {
    try {
      // delete data depends on req.params.id
      let data = await pelanggan.deleteOne({
        _id: new ObjectId(req.params.id),
      });

      // If success
      return res.status(200).json({
        message: "Success to delete transaksi",
      });
    } catch (e) {
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e,
      });
    }
  }
}

module.exports = new PelangganController();
