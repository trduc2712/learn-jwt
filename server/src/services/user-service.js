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

const getUserByEmail = async email => {
  const foundUser = await User.findOne({
    where: { email },
  });

  if (!foundUser) {
    throw new ApiError(StatusCodes.NOT_FOUND, 'User not found');
  }

  return foundUser;
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();

    if (!users.length) {
      throw new ApiError(StatusCodes.NOT_FOUND, 'No users found');
    }

    return users;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      error.message || 'An error occurred while fetching users'
    );
  }
};

export const userService = { createUser, getUserByEmail, getAllUsers };
