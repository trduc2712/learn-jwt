import { StatusCodes } from 'http-status-codes';
import ms from 'ms';
import { env } from '@/config/index.js';
import { userService } from '@/services/index.js';
import { ApiError, passwordUtil, tokenUtil } from '@/utils/index.js';

const signup = async (req, res, next) => {
  try {
    const userData = req.body;
    await userService.createUser(userData);

    return res.status(StatusCodes.CREATED).json({
      message: 'User registered successfully',
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userService.getUserByEmail(email);
    const isPasswordMatch = await passwordUtil.comparePassword(
      password,
      user.password
    );

    if (!isPasswordMatch) {
      throw new ApiError(
        StatusCodes.UNAUTHORIZED,
        'Incorrect email or password'
      );
    }

    const accessToken = tokenUtil.generateToken(user.id, 'access');
    const refreshToken = tokenUtil.generateToken(user.id, 'refresh');

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
      maxAge: ms(env.REFRESH_TOKEN_EXPIRES_IN),
    });

    return res.status(StatusCodes.OK).json({
      message: 'User authenticated successfully',
      accessToken,
      name: user.name,
    });
  } catch (err) {
    next(err);
  }
};

export const authController = { signup, login };
