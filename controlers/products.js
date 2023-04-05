const ProductModel = require("../models/products");
const _ = require("lodash");
const Joi = require('joi')

const createproduct = function (req, res, next) {
  const schema = Joi.object().keys({
    title:Joi.string().max(150).required(),
    price:Joi.number().required(),
    description:Joi.string().required(),
    image: Joi.string().required()
  });
  const {error} = schema.validate(req.body);
  const errorDetails = _.get(error, "details" , []);

  if(!_.isEmpty(errorDetails)){
    return res.send(errorDetails)
  }

  const product = new ProductModel(req.body);
  // product.title =req.body.title;
  // product.image = req.body.image;+
  product.save(function (err, data) {
    if (err) {
      return res.status(422).send(err);
    }
    return res.send(data);
  });
  // return res.send({sucess:true, body:req.body,product:product})
};
// import{get} from "lodash"

const getproducts = function (req, res, next) {
  ProductModel.find({}, function (err, data) {
    // return res.send("iam from product---abavac")
    return res.send(data);
  });
};

const updateproduct = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  const body = _.get(req, "body", {});
  ProductModel.findByIdAndUpdate(id, body, function (err, data) {
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(data);
  });
};
const deleteproduct = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  ProductModel.findByIdAndDelete(id, function (err, data) {
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(data);
  });
};

const getproduct = function (req, res, next) {
  // const id = req?.abcd?.id

  // const id = _.get(req,"abc.id",123)
  const id = _.get(req, "params.id", null);
  ProductModel.findById(id, function (err, data) {
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(data);
  });
};

module.exports = {
  getproducts,
  getproduct,
  createproduct,
  updateproduct,
  deleteproduct,
};
