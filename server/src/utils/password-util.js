import bcrypt from 'bcryptjs';

const encryptPassword = async password => {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt);
};

export const passwordUtil = { encryptPassword };
