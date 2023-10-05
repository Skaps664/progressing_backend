import user from "../model/user.js";

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await user.find();
  } catch {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({
      message: "No Users found",
    });
  }
  return res.status(200).json({ users });
};

export { getAllUser };
