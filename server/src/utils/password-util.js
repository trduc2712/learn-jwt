import bcrypt from 'bcryptjs';

const encryptPassword = async password => {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt);
};

const comparePassword = async (password, encryptedPassword) => {
  return bcrypt.compare(password, encryptedPassword);
};

export const passwordUtil = { encryptPassword, comparePassword };
