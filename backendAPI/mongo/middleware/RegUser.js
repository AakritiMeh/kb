import { User } from "../db";

function userMiddleware(req, res, next) {
  const uname = req.headers.walletId;
  User.findOne({
    username: uname,
  }).then(function (value) {
    if (value) {
      next();
    } else {
      res.status(403).json({ msg: "usr not found" });
    }
  });
}

export default userMiddleware;
