import { REGEX } from "@/constants";
import { LITERALS } from "@/literals/common";
import * as yup from "yup";

export const register = yup.object().shape({
  name: yup
    .string()
    .min(3, LITERALS.NUMBER_VALUE.replace("[number]", "3"))
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.ALPHABETIC, LITERALS.ERROR_LABEL),
  surname: yup
    .string()
    .min(3, LITERALS.NUMBER_VALUE.replace("[number]", "3"))
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.ALPHABETIC, LITERALS.ERROR_LABEL),
  email: yup
    .string()
    .min(6, LITERALS.NUMBER_VALUE.replace("[number]", "6"))
    .email(LITERALS.ERROR_LABEL)
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.EMAIL, LITERALS.ERROR_LABEL),
  phone: yup
    .string()
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.PHONE, LITERALS.ERROR_LABEL),
  acceptsAccount: yup.bool().oneOf([true], LITERALS.REQUEST_LABEL),
});

export const login = yup.object().shape({
  email: yup
    .string()
    .email(LITERALS.ERROR_LABEL)
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.EMAIL, LITERALS.ERROR_LABEL),
  password: yup
    .string()
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.PASSWORD, LITERALS.ERROR_LABEL),
  remember: yup.boolean().optional(),
});

export const createItinerary = yup.object().shape({
  title: yup
    .string()
    .min(3, LITERALS.NUMBER_VALUE.replace("[number]", "3"))
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.ALPHABETIC, LITERALS.ERROR_LABEL),
  dates: yup
    .object({
      start: yup
        .date()
        .typeError("La fecha de inicio no es válida")
        .required("Debe seleccionar una fecha de inicio"),
      end: yup
        .date()
        .typeError("La fecha de fin no es válida")
        .required("Debe seleccionar una fecha de fin")
        .test(
          "is-after-start",
          "La fecha de fin debe ser posterior o igual a la fecha de inicio",
          function (end) {
            const { start } = this.parent; // Accede al valor de `start` dentro del mismo objeto
            return !start || !end || end >= start;
          }
        ),
    })
    .required("Debe seleccionar un rango de fechas"),
  image: yup
    .string()
    .min(3, LITERALS.NUMBER_VALUE.replace("[number]", "3"))
    .required(LITERALS.REQUEST_LABEL),
});

export const personalSchema = yup.object().shape({
  civil: yup
    .string()
    .test("notZero", LITERALS.REQUEST_LABEL, (value) => value !== "")
    .required(LITERALS.REQUEST_LABEL),
  gender: yup.string().required(LITERALS.REQUEST_LABEL),
  nationality: yup
    .string()
    .test("notZero", LITERALS.REQUEST_LABEL, (value) => value !== "")
    .required(LITERALS.REQUEST_LABEL),
  profession: yup
    .string()
    .test("notZero", LITERALS.REQUEST_LABEL, (value) => value !== "")
    .required(LITERALS.REQUEST_LABEL),
});

export const addressSchema = yup.object().shape({
  streetType: yup.string().required(LITERALS.REQUEST_LABEL),
  streetName: yup
    .string()
    .min(2, LITERALS.NUMBER_VALUE.replace("[number]", "2"))
    .max(40, LITERALS.NUMBER_VALUE.replace("[number]", "40"))
    .matches(REGEX.ALPHABETIC, LITERALS.ERROR_LABEL)
    .required(LITERALS.REQUEST_LABEL),
  streetNumber: yup
    .string()
    .max(4, "El código introducido tiene que ser de máximo de 4 dígitos.")
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.DIRECCTION, LITERALS.ERROR_LABEL),
  streetFloorAndUnit: yup
    .string()
    .max(15, LITERALS.NUMBER_VALUE.replace("[number]", "15")),
  region: yup.string().required(LITERALS.REQUEST_LABEL),
  zipCode: yup
    .string()
    .min(5, "El código introducido tiene que ser de 5 dígitos.")
    .max(5, "El código introducido tiene que ser de 5 dígitos.")
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.POSTCODE, LITERALS.ERROR_LABEL),
  city: yup
    .string()
    .min(2, LITERALS.NUMBER_VALUE.replace("[number]", "2"))
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.ALPHABETIC, LITERALS.ERROR_LABEL),
});
