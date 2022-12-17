import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome precisa de pelo menos 3 caracteres")
    .max(200, "O nome tem um limite de 200 caracteres"),
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("O e-mail digitado é inválido.")
    .max(200, "O nome tem um limite de 200 caracteres"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .matches(/(?=.*[A-Z])/, "É necessario uma letra maiúscula")
    .matches(/(?=.*[!#@$%&])/, "É necessário pelo menos um caractere especial")
    .matches(/(?=.*[0-9])/, "É necessário pelo menos um número")
    .matches(/(?=.*[a-z])/, "É necessário uma letra minúscula")
    .min(8, "Min 6 caracteres")
    .max(15, "Max 15 caracteres"),

  confirmPassword: yup
    .string()
    .required("Confirmar a senha é obrigatório")
    .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais"),
});
