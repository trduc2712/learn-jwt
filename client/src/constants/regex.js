export const NAME_REGEX = /^[a-zA-ZÀ-ỹ\s]+$/;
export const PHONE_REGEX = /^0[3-9][0-9]{8}\b$/;
export const PASSWORD_REGEX = {
  minLength: 8,
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /\d/,
  specialChar: /[!@#$%^&*(),.?":{}|<>]/,
};
