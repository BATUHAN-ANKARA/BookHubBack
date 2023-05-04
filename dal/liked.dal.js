const Liked = require("../models/liked.model");

const LikedDataAccess = {
  async create(likedPostModel) {
    return await likedPostModel.save();
  },
  async listAll() {
    return await Liked.find().select("title text postDate");
  },
  async findOnePopulate(where, populate) {
    return await Liked.findOne(where).populate(populate);
  },
  async findById(id) {
    return await Liked.findById({ _id: id });
  },
  async findOne(where) {
    return await Liked.findOne(where);
  }
};

module.exports = LikedDataAccess;
