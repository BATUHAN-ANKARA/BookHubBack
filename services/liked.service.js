const Liked = require("../models/liked.model");
const likedDal = require("../dal/index");
const userDal = require("../dal/user.dal");

exports.likeBook = async (req) => {
  try {
    let { bookName, bookId, ownerId, ownerFullName } = req.body;
    const findedUser = await userDal.findById(user)
    const findedLike = await likedDal.liked.findOne({ bookId: bookId });
    if (findedLike === null) {
      const liked = new Liked({
        bookName,
        bookId,
        ownerId,
        ownerFullName
      });
      const json = await likedDal.liked.create(liked);
      findedUser.likedBooks.push(json._id);
      await userDal.create(findedUser);
      return json;
    } else {
      throw new Error('Bu id var zaten');
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getLikedById = async (id) => {
  try {
    const json = await userDal.findOnePopulate(
      { _id: id },
      {
        path: "likedBooks",
        select: "bookName bookId ownerId ownerFullName _id"
      }
    );
    return json.likedBooks;
  } catch (error) {
    throw new Error(error);
  }
};
