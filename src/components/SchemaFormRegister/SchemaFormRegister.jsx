import * as yup from "yup";

export const schemaRegister = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),

    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Deve informar o email no formato correto"),

    password: yup
      .string()
      .required("Senha é obrigatório")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracter"),

    confirmarSenha: yup
      .string()
      .required("Confirmação de senha Obrigatória")
      .oneOf(
        [yup.ref("password")],
        "Confirmação de senha deve ser igual a senha"
      ),

    bio: yup
    .string()
    .required("Bio é obrigatório"),

    contact: yup
    .string()
    .required("Contato obrigatório"),

    course_module: yup
    .string()
    .required("Módulo é obrigatório"),
  })
  .required();
