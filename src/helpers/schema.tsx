import { REGEX } from "@/constants";
import { LITERALS } from "@/literals/common";
import { VARIANT_TYPE_SECTION } from "@/types";
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
  email: yup.string().optional(),

  password: yup.string().optional(),

  remember: yup.boolean().optional(),
});

export const createItinerary = yup.object().shape({
  title: yup.string().required(LITERALS.REQUEST_LABEL),
  dates: yup
    .object({
      start: yup.date().required("Debe seleccionar una fecha de inicio"),
      end: yup
        .date()
        .required("Debe seleccionar una fecha de fin")
        .test(
          "is-after-start",
          "La fecha de fin debe ser posterior o igual a la fecha de inicio",
          function (end) {
            const { start } = this.parent; // Accede al valor de `start` dentro del mismo objeto
            return !start || !end || new Date(end) >= new Date(start);
          }
        ),
    })
    .required("Debe seleccionar un rango de fechas"),
  image: yup
    .string()
    .min(3, LITERALS.NUMBER_VALUE.replace("[number]", "3"))
    .required(LITERALS.REQUEST_LABEL),
});

export const sectionSchema = yup.object().shape({
  type: yup.string(),
  startDate: yup
    .date()
    .typeError("La fecha de inicio no es válida")
    .required("Debe seleccionar una fecha de inicio"),
  endDate: yup
    .date()
    .required("Debe seleccionar una fecha de inicio")
    .when("type", (type, schema) => {
      return type[0] === VARIANT_TYPE_SECTION.HOTEL
        ? schema.typeError("La fecha de inicio no es válida")
        : schema.optional();
    }),
  numberFlight: yup.string().when("type", (type, schema) => {
    return type[0] === VARIANT_TYPE_SECTION.FLIGHT
      ? schema
          .min(5, LITERALS.NUMBER_VALUE.replace("[number]", "5"))
          .required(LITERALS.REQUEST_LABEL)
      : schema.optional();
  }),
  name: yup.string().when("type", (type, schema) => {
    return type[0] === VARIANT_TYPE_SECTION.TRIP
      ? schema
          .min(3, LITERALS.NUMBER_VALUE.replace("[number]", "3"))
          .required(LITERALS.REQUEST_LABEL)
      : schema.optional();
  }),
  city: yup.string().when("type", (type, schema) => {
    return type[0] === VARIANT_TYPE_SECTION.HOTEL
      ? schema
          .min(3, LITERALS.NUMBER_VALUE.replace("[number]", "3"))
          .required(LITERALS.REQUEST_LABEL)
      : schema.optional();
  }),
  country: yup.string().when("type", (type, schema) => {
    return type[0] === VARIANT_TYPE_SECTION.HOTEL
      ? schema
          .min(3, LITERALS.NUMBER_VALUE.replace("[number]", "3"))
          .required(LITERALS.REQUEST_LABEL)
      : schema.optional();
  }),
  description: yup
    .string()
    .defined()
    .when("type", (type, schema) => {
      return type[0] === VARIANT_TYPE_SECTION.TRIP
        ? schema
            .min(3, LITERALS.NUMBER_VALUE.replace("[number]", "3"))
            .max(500, LITERALS.NUMBER_VALUE.replace("[number]", "500"))
            .required(LITERALS.REQUEST_LABEL)
        : schema.optional();
    }),
  transferName: yup.string().optional(),
  image_url: yup.string().optional(),
  category: yup.string().when("type", (type, schema) => {
    return type[0] === VARIANT_TYPE_SECTION.HOTEL
      ? schema
          .oneOf(["1", "2", "3", "4", "5", "none"], "Invalid gender selected")
          .required(LITERALS.REQUEST_LABEL)
      : schema.optional();
  }),
});
