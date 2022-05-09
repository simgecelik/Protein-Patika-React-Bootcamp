import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  name: yup
    .string()
    .typeError("Lütfen geçerli bir ad giriniz."),
  surname: yup
    .string()
    .typeError("Lütfen geçerli bir soyad giriniz."),
  email: yup
    .string()
    .email("Lütfen geçerli bir eposta adresi giriniz.")
    .required("Eposta alanı zorunludur."),
    username: yup
    .string()
    .typeError("Lütfen geçerli bir kullanıcı adı giriniz.")
    .required("Kullanıcı adı alanı zorunludur."),
  password: yup
    .string()
    .typeError("Her karakteri kullanamazsın. Sadece @/./+/-/_ kullanabilirsin")
    .min(8, "Şifreniz 8 karakterden az olamaz")
    .max(32, "Şifreniz 32 karakterden fazla olamaz")
    .required("Şifre alanı zorunludur."),
    confirmpassword:yup
    .string()
    .oneOf([yup.ref('password'),null],'Şifreler aynı olmalıdır')
    .required("Şifrenizi tekrar girin."),
    check:yup
    .boolean()
    .required('Sözleşme onaylanması zorunludur')
    .oneOf([true],'Devam edebilmek için sözleşmeyi onaylayın')
});
