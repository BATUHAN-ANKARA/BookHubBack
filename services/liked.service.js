const Liked = require("../models/liked.model");
const likedDal = require("../dal/index");
const userDal = require("../dal/user.dal");

exports.likeBook = async (req) => {
  try {
    let { bookId, user } = req.body;
    foundBook = await likedDal.books.findById(bookId);
    const findedUser = await userDal.findById(user)
    // const findedLike = await likedDal.liked.findOne({ bookId: bookId });
    const liked = new Liked({
      bookName: foundBook.name,
      bookId: bookId,
      price: foundBook.price
    });
    const json = await likedDal.liked.create(liked);
    findedUser.likedBooks.push(json._id);
    await userDal.create(findedUser);
    return json;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getLikedById = async (req) => {
  try {
    let id = req.params.id
    console.log(id);
    const json = await userDal.findOnePopulate(
      { _id: id },
      {
        path: "likedBooks",
        select: "bookName bookId ownerId ownerFullName _id price"
      }
    );
    return json.likedBooks;
  } catch (error) {
    throw new Error(error);
  }
};
