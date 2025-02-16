import { Op } from 'sequelize';
import { StatusCodes } from 'http-status-codes';
import { User } from '@/models/index.js';
import { ApiError, passwordUtil } from '@/utils/index.js';

const createUser = async ({ name, email, phone, password, roleId }) => {
  const encryptedPassword = await passwordUtil.encryptPassword(password);

  const existingUser = await User.findOne({
    where: {
      [Op.or]: [{ email }, { phone }],
    },
  });

  if (existingUser) {
    throw new ApiError(
      StatusCodes.CONFLICT,
      `User already exists with this ${existingUser.email === email ? 'email' : 'phone number'}`
    );
  }

  const newUser = await User.create({
    name,
    email,
    phone,
    password: encryptedPassword,
    roleId,
  });

  return newUser;
};

export const userService = { createUser };
