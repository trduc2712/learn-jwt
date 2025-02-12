import * as yup from 'yup';
import { NAME_REGEX, PHONE_REGEX, PASSWORD_REGEX } from '@/constants';

const { minLength, uppercase, lowercase, number, specialChar } = PASSWORD_REGEX;

const schema = yup.object({
  firstName: yup
    .string()
    .trim()
    .required('Tên không được để trống')
    .matches(NAME_REGEX, 'Tên không được chứa ký tự đặc biệt hoặc số'),
  lastName: yup
    .string()
    .trim()
    .required('Họ không được để trống')
    .matches(NAME_REGEX, 'Họ không được chứa ký tự đặc biệt hoặc số'),
  phone: yup
    .string()
    .required('Số điện thoại không được để trống')
    .matches(PHONE_REGEX, 'Số điện thoại không hợp lệ'),
  email: yup
    .string()
    .required('Email không được để trống')
    .email('Email không hợp lệ'),
  password: yup
    .string()
    .required('Mật khẩu không được để trống')
    .min(minLength, `Mật khẩu phải có ít nhất ${minLength} ký tự`)
    .matches(uppercase, 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa')
    .matches(lowercase, 'Mật khẩu phải chứa ít nhất một chữ cái viết thường')
    .matches(number, 'Mật khẩu phải chứa ít nhất một số')
    .matches(specialChar, 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt'),
});

export const validate = (name, value) => {
  try {
    schema.validateSyncAt(name, { [name]: value });
    return '';
  } catch (error) {
    return error.message;
  }
};
