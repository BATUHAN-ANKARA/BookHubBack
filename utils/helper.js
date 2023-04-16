const jwt = require("jsonwebtoken");
const logger = require("./logger");
const fs = require("fs");
const dns = require("dns");
const os = require("os");
const { validationResult } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const createToken = (userId, name) => {
  const token = jwt.sign(
    {
      userId,
      name
    },
    process.env.SECRET_KEY,
    {
      issuer: "localhost",
      expiresIn: process.env.EXPIRESIN
    }
  );
  return token;
};

const verifyToken = (token) => {
  const isVerify = { decodedToken: null };
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    isVerify.decodedToken = decodedToken;
  } catch (error) {
    isVerify.decodedToken = null;
    console.log("error", error);
  }
  return isVerify;
};

const hashToPassword = (password) => {
  const md5 = require("md5");
  return md5(password);
};

const createUploadDir = (str) => {
  if (!fs.existsSync(str)) {
    fs.mkdirSync(str, { recursive: true });
  }
};

const getHost = () => {
  return new Promise((resolve) => {
    dns.lookup(os.hostname(), (err, ip) => {
      resolve(`http://${ip}:${process.env.PORT}`);
    });
  });
};

const logToError = (error, req, message) => {
  logger.error(
    `IP Adresi: ${req.ip} - PATH: ${req.path} - BODY: ${JSON.stringify(
      req.body
    )} - PARAMS: ${JSON.stringify(req.params)} - QUERY: ${JSON.stringify(
      req.query
    )} - ERROR TIME: ${Date.now()} - URL: ${req.url} - ERROR MESSAGE: ${
      error.message
    } - ERROR CALLSTACK: ${JSON.stringify(error)} - CUSTOM-INFO: ${message}`
  );
};

const handleValidation = (req) => {
  const validationErrors = validationResult(req);
  if (validationErrors.isEmpty() === false) {
    return {
      message: "Geçersiz Veri",
      success: false,
      validationErrors: validationErrors.array(),
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.BAD_REQUEST
    };
  }
  return null;
};

const deleteFromDisk = (fileName) => {
  if (fileName && fs.existsSync(`uploads/${fileName}`)) {
    fs.unlink(`uploads/${fileName}`, (err) => {
      if (err) {
        return false;
      }
      return true;
    });
  }
  return true;
};

module.exports = {
  createToken,
  verifyToken,
  hashToPassword,
  logToError,
  createUploadDir,
  getHost,
  handleValidation,
  deleteFromDisk,
};
