import path from "path";
import Market from "../models/MarketModel.js";
import fs from "fs";
import express from "express";

export const getMarkets = async (req, res) => {
  try {
    const response = await Market.findAll();
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMarketById = async (req, res) => {
  try {
    const response = await Market.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const saveMarket = async (req, res) => {
  console.log(req);
  const name = req.body.title;
  const price = req.body.price;
  const rate = req.body.rate;
  const file = req.file;
  const fileSize = file.size;
  const fileName = file.filename;
  const url = `${req.protocol}://${req.get("host")}/image/${fileName}`;
  const allowedType = [".png", ".jpeg", ".jpg"];

  if (fileSize > 5000000) return res.status(422).json({ msg: "image must be less than 5MB" });

  try {
    await Market.create({ name: name, img: url, url: url, price: price, rate: rate });
    res.status(201).json({ msg: "Market created successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateMarket = async (req, res) => {
  const market = await Market.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!market) return res.status(404).json({ msg: "No Data Found" });

  let fileName = "";
  if (!req.files || Object.keys(req.files).length === 0) {
    fileName = market.img;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "Invalid Images" });
    if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less than 5 MB" });

    const filepath = `./public/images/${market.img}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }

  const name = req.body.title;
  const price = req.body.price;
  const rate = req.body.rate;
  const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;

  try {
    await Market.update(
      { name: name, img: fileName, url: url, price: price, rate: rate },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Market Updated Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteMarket = async (req, res) => {
  const market = await Market.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!market) return res.status(404).json({ msg: "No Data Found" });
  try {
    const filepath = `./public/images/${market.img}`;
    fs.unlinkSync(filepath);
    await Market.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Market deleted successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
