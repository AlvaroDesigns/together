import { REGEX } from '@/constants';
import { LITERALS } from '@/literals/common';
import { VARIANT_TYPE_PROFILE, VARIANT_TYPE_SECTION } from '@/types';
import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, LITERALS.NUMBER_VALUE.replace('[number]', '3'))
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.ALPHABETIC, LITERALS.ERROR_LABEL),

  email: yup
    .string()
    .min(6, LITERALS.NUMBER_VALUE.replace('[number]', '6'))
    .email(LITERALS.ERROR_LABEL)
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.EMAIL, LITERALS.ERROR_LABEL),
  phone: yup
    .string()
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.PHONE, LITERALS.ERROR_LABEL),
  password: yup
    .string()
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.PASSWORD, LITERALS.ERROR_LABEL),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .min(6, LITERALS.NUMBER_VALUE.replace('[number]', '6'))
    .email(LITERALS.ERROR_LABEL)
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.EMAIL, LITERALS.ERROR_LABEL),
  password: yup
    .string()
    .required(LITERALS.REQUEST_LABEL)
    .matches(REGEX.PASSWORD, LITERALS.ERROR_LABEL),
  remember: yup.boolean().optional().default(false),
});

export const createItinerary = yup.object().shape({
  name: yup.string().required(LITERALS.REQUEST_LABEL),
  dates: yup
    .object({
      from: yup.date().required('Debe seleccionar una fecha de inicio'),
      to: yup
        .date()
        .required('Debe seleccionar una fecha de fin')
        .test(
          'is-after-start',
          'La fecha de fin debe ser posterior o igual a la fecha de inicio',
          function (end) {
            const { start } = this.parent; // Accede al valor de `start` dentro del mismo objeto
            return !start || !end || new Date(end) >= new Date(start);
          },
        ),
    })
    .required('Debe seleccionar un rango de fechas'),
});

export const profileSchema = (ty: string) =>
  yup.object().shape({
    name:
      ty === VARIANT_TYPE_PROFILE.ACCOUNT
        ? yup
            .string()
            .min(5, LITERALS.NUMBER_VALUE.replace('[number]', '5'))
            .required(LITERALS.REQUEST_LABEL)
        : yup.string().optional().default(undefined),
    email:
      ty === VARIANT_TYPE_PROFILE.ACCOUNT
        ? yup
            .string()
            .min(5, LITERALS.NUMBER_VALUE.replace('[number]', '5'))
            .required(LITERALS.REQUEST_LABEL)
        : yup.string().optional().default(undefined),
    phone:
      ty === VARIANT_TYPE_PROFILE.ACCOUNT
        ? yup
            .string()
            .min(5, LITERALS.NUMBER_VALUE.replace('[number]', '5'))
            .required(LITERALS.REQUEST_LABEL)
        : yup.string().optional().default(undefined),
    password:
      ty === VARIANT_TYPE_PROFILE.SECURE
        ? yup
            .string()
            .min(5, LITERALS.NUMBER_VALUE.replace('[number]', '5'))
            .required(LITERALS.REQUEST_LABEL)
        : yup.string().optional().default(undefined),
    newPassword:
      ty === VARIANT_TYPE_PROFILE.SECURE
        ? yup
            .string()
            .min(5, LITERALS.NUMBER_VALUE.replace('[number]', '5'))
            .oneOf([yup.ref('password'), undefined], LITERALS.PASSWORDS_MUST_MATCH)
            .required(LITERALS.REQUEST_LABEL)
        : yup.string().optional().default(undefined),
  });

export const sectionSchema = yup.object().shape({
  type: yup.string(),
  startDate: yup.date().when('type', (type, schema) => {
    return type[0] === VARIANT_TYPE_SECTION.OTHER
      ? schema.optional()
      : schema
          .typeError('La fecha de inicio no es válida')
          .required('Debe seleccionar una fecha de inicio');
  }),
  endDate: yup
    .date()
    .required('Debe seleccionar una fecha de inicio')
    .when('type', (type, schema) => {
      return type[0] === VARIANT_TYPE_SECTION.HOTEL
        ? schema.typeError('La fecha de inicio no es válida')
        : schema.optional();
    }),
  numberFlight: yup.string().when('type', (type, schema) => {
    return type[0] === VARIANT_TYPE_SECTION.FLIGHT
      ? schema
          .min(5, LITERALS.NUMBER_VALUE.replace('[number]', '5'))
          .max(8, LITERALS.NUMBER_VALUE.replace('[number]', '8'))
          .required(LITERALS.REQUEST_LABEL)
      : schema.nullable().optional();
  }),
  name: yup.string().when('type', (type, schema) => {
    return type[0] !== VARIANT_TYPE_SECTION.FLIGHT
      ? schema
          .min(3, LITERALS.NUMBER_VALUE.replace('[number]', '3'))
          .required(LITERALS.REQUEST_LABEL)
      : schema.nullable().optional();
  }),
  cityName: yup.string().when('type', (type, schema) => {
    return type[0] === VARIANT_TYPE_SECTION.HOTEL
      ? schema
          .min(3, LITERALS.NUMBER_VALUE.replace('[number]', '3'))
          .required(LITERALS.REQUEST_LABEL)
      : schema.nullable().optional();
  }),
  country: yup.string().when('type', (type, schema) => {
    return type[0] === VARIANT_TYPE_SECTION.HOTEL
      ? schema
          .min(5, LITERALS.NUMBER_VALUE.replace('[number]', '3'))
          .required(LITERALS.REQUEST_LABEL)
      : schema.nullable().optional();
  }),
  description: yup
    .string()
    .transform((value) => (Array.isArray(value) ? value.join(' ') : value))
    .when('type', (type, schema) => {
      return type[0] === VARIANT_TYPE_SECTION.TRIP ||
        type[0] === VARIANT_TYPE_SECTION.OTHER
        ? schema
            .min(3, LITERALS.NUMBER_VALUE.replace('[number]', '3'))
            .max(500, LITERALS.NUMBER_VALUE.replace('[number]', '500'))
            .required(LITERALS.REQUEST_LABEL)
        : schema.nullable().optional();
    }),
  transferName: yup.string().optional(),
  imageUrl: yup.string().when('type', (type, schema) => {
    return type[0] === VARIANT_TYPE_SECTION.TRIP
      ? schema
          .min(3, LITERALS.NUMBER_VALUE.replace('[number]', '3'))
          .required(LITERALS.REQUEST_LABEL)
      : schema.nullable().optional();
  }),
  stars: yup.string().when('type', (type, schema) => {
    return type[0] === VARIANT_TYPE_SECTION.HOTEL
      ? schema
          .oneOf(['1', '2', '3', '4', '5', 'none'], 'Invalid gender selected')
          .required(LITERALS.REQUEST_LABEL)
      : schema.nullable().optional();
  }),
});

export const budgetSchema = yup.object().shape({
  expensive: yup.string().required(LITERALS.REQUEST_LABEL),
  types: yup
    .string()
    .min(3, LITERALS.NUMBER_VALUE.replace('[number]', '3'))
    .required(LITERALS.REQUEST_LABEL),
});
