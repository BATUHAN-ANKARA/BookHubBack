const ordersService = require("../services/index");
const baseResponse = require("../dto/baseresponse.dto");
const { StatusCodes } = require("http-status-codes");
const utils = require("../utils/index");

exports.createOrder = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await ordersService.orders.createOrder(req);
    res.status(StatusCodes.OK).json(json);
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

exports.updateOrderStatusSuccess = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await ordersService.orders.updateOrderStatusSuccess(req);
    res.status(StatusCodes.OK).json(json);
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

exports.updateOrderStatusFail = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await ordersService.orders.updateOrderStatusFail(req);
    res.status(StatusCodes.OK).json(json);
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

exports.getOrderByUserSuccess = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await ordersService.orders.getOrderByUserSuccess(req);
    res.status(StatusCodes.OK).json(json);
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

exports.getOrderByUserFail = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await ordersService.orders.getOrderByUserFail(req);
    res.status(StatusCodes.OK).json(json);
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

exports.getOrderByUserWaiting = async (req, res) => {
  try {
    const isInvalid = utils.helpers.handleValidation(req);
    if (isInvalid) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ ...baseResponse, ...isInvalid });
      return;
    }
    const json = await ordersService.orders.getOrderByUserWaiting(req);
    res.status(StatusCodes.OK).json(json);
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