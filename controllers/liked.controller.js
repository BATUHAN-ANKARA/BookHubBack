const utils = require("../utils/index");
const baseResponse = require("../dto/baseresponse.dto");
const { StatusCodes } = require("http-status-codes");
const likedService = require("../services/index");

exports.likeBook = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await likedService.liked.likeBook(req);
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.CREATED
    });
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR
    });
  }
};

exports.getLikedById = async (req, res) => {
  try {
    const json = await likedService.liked.getLikedById(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK
    });
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};

exports.isLiked = async (req, res) => {
  try {
    const json = await likedService.liked.isLiked(req);
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: true,
      timestamp: Date.now(),
      code: StatusCodes.OK
    });
  } catch (error) {
    utils.helpers.logToError(error, req);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      success: false,
      error: true,
      timestamp: Date.now(),
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      message: error.message
    });
  }
};