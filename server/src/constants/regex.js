const REGEX = {
  NAME: /^[a-zA-ZÀ-ỹ\s]+$/,
  PHONE: /^(?:\+84|0)(3[2-9]|5[2689]|7[0-9]|8[1-9]|9[0-9])\d{7}$/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
};

export default REGEX;
