import { StatusCodes } from 'http-status-codes';
import { userService } from '@/services/index.js';

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();

    return res.status(StatusCodes.OK).json({
      message: 'Users fetched successfully',
      users,
    });
  } catch (err) {
    next(err);
  }
};

export const userController = { getAllUsers };
