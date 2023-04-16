const User = require("../models/user.model");
const userDal = require("../dal/index");
const utils = require("../utils/index");

exports.createUser = async (req) => {
  try {
    let { birthDate, fullName, userName, email, password } = req.body;
    const _password = utils.helpers.hashToPassword(password);
    birthDate = new Date(birthDate);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    const existingUser = await userDal.user.findOne({ email });
    if (existingUser && existingUser.email === email) {
      return "mail_hata";
    }
    const user = new User({
      birthDate,
      fullName,
      userName,
      age,
      email,
      password: _password
    });
    const json = await userDal.user.create(user);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.signIn = async (req) => {
  try {
    const { email, password } = req.body;

    const _password = utils.helpers.hashToPassword(password);
    const json = await userDal.user.findOne({ email, password: _password });
    if (json) {
      return {
        id: json._id,
        email: json.email
      };
    } else {
      throw new Error("şifre veya mail adresi hatalı");
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getUser = async (req) => {
  try {
    const { id } = req.params;
    const json = await userDal.user.findById(id);
    console.log(json);
    if (json) {
      return json;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

exports.updateAvatar = async (req, res) => {
  try {
    const { id } = req.query;
    const str = await fileService.uploadImage(req, res);
    const json = await userDal.user.updateById(id, { avatar: str });
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.createPassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password } = req.body;
    const _password = utils.helpers.hashToPassword(password);
    const json = await userDal.user.updateById(id, { password: _password });
    if (json) {
      const token = utils.helpers.createToken(json._id, json.name);
      return {
        id: json._id,
        token,
        _password
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};
