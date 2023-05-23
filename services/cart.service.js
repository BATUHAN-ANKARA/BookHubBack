const Cart = require("../models/cart.model");
const cartDal = require("../dal/index");
const utils = require("../utils/index");

exports.addToCart = async (req) => {
  try {
    const { userId, books } = req.body;
    console.log(books);
    const cart = await cartDal.cart.findOne({ userId });
    if (!cart) {
      // Kullanıcının sepeti henüz oluşturulmamışsa, yeni bir sepet oluşturuyoruz
      const newCart = new Cart({ userId, books });
      await newCart.save();
      return newCart;
    } else {
      cart.books.push(...books);
      await cart.save();
      return cart;
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getCart = async (req) => {
  const { userId } = req.query;
  console.log(req.query);
  try {
    const cart = await Cart.findOne({
      userId: userId
    }).populate("books.bookId", "quantity price"); // Ürün bilgilerini getirmek için populate kullanıyoruz

    if (!cart) {
      throw new Error("Sepet bulunamadı");
    }
    return cart;
  } catch (error) {
    throw new Error(error);
  }
};

exports.removeFromCart = async (req) => {
  const { userId, bookId } = req.body;
  try {
    const cart = await cartDal.cart.findOne({ userId });
    if (!cart) {
      throw new Error("Sepet bulunamadı");
    }
    console.log("before=>", cart.books);
    cart.books = cart.books.filter((book) => book.bookId.toString() !== bookId);
    console.log("after=>", cart.books);
    await cart.save();

    return cart;
  } catch (error) {
    console.error("Sepetten çıkarma hatası:", error);
    throw new Error("Sepetten çıkarma hatası:", error);
  }
};

exports.updateCartItemQuantity = async (req) => {
  const { userId, bookId, quantity } = req.body;
  try {
    const cart = await cartDal.cart.findOne({ userId });
    if (!cart) {
      throw new Error("Sepet bulunamadı");
    }
    const bookIndex = cart.books.findIndex(
      (book) => book.bookId.toString() === bookId
    );
    if (bookIndex === -1) {
      throw new Error("Ürün sepetinizde bulunamadı");
    }
    cart.books[bookIndex].quantity = quantity;
    await cart.save();
    return cart;
  } catch (error) {
    console.error("Ürün miktarını güncelleme hatası:", error);
    throw new Error("Ürün miktarını güncelleme hatası:", error);
  }
};

exports.clearCart = async (req) => {
  const { userId } = req.body;
  try {
    const cart = await cartDal.cart.findOne({ userId });
    if (!cart) {
      throw new Error("Sepet bulunamadı");
    }
    cart.books = [];
    await cart.save();
    return cart;
  } catch (error) {
    throw new Error("Sepetten temizleme hatası:", error);
  }
};
