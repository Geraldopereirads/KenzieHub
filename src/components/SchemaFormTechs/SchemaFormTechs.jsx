import * as yup from "yup";


export const SchemaTechs = yup
.object({
   title: yup.string().required("Deve informar uma tecnologia!"),
   status: yup.string().required("Deve informar o seu nível!")
}).required();