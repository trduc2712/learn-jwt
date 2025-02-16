import { StatusCodes } from 'http-status-codes';
import { userService } from '@/services/index.js';
import { tokenUtil } from '@/utils/index.js';

const signup = async (req, res, next) => {
  try {
    const newUser = await userService.createUser(req.body);

    const accessToken = tokenUtil.generateToken(newUser.id, 'access');
    const refreshToken = tokenUtil.generateToken(newUser.id, 'refresh');

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(StatusCodes.CREATED).json({
      message: 'User registered successfully',
      accessToken,
    });
  } catch (err) {
    next(err);
  }
};

export const authController = { signup };
