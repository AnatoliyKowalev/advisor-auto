import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Мінімальна довжина 3 символи")
    .max(100, "Максимальна довжина 100 символів")
    .required("Ім'я - обов'язкове поле!"),
  phone: Yup.string()
    .matches(/^\+?\d{10,15}$/, "Не правильний формат телефону!")
    .required("Телефон - обов'язкове поле!"),
});

export default validationSchema;
