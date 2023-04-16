const Store = require("../models/store.model");

const StoreDataAccess = {
  async create(storeModel) {
    return await storeModel.save();
  },
  async updateById(id, body) {
    return await Store.findByIdAndUpdate({ _id: id }, body);
  },
  async findOne(where) {
    return await Store.findOne(where);
  },
  async findById(id) {
    return await Store.findById({ _id: id });
  },
  async findOnePopulate(where, populate) {
    return await Store.findOne(where).populate(populate);
  }
};

module.exports = StoreDataAccess;
