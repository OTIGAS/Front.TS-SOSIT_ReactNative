import { useState } from "react";

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Email inválido",
  },
  password: {
    regex: /^.{3,}$/,
    message: "Senha inválida (deve conter no minimo 5 caracteres)",
  },
  cnpj: {
    regex: /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
    message: "CNPJ inválida (deve conter os pontos (.) barra (/) e traço (-)",
  },
  cep: {
    regex: /^\d{5}-?\d{3}$/,
    message: "Cep inválido",
  },
  fone: {
    regex: /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/,
    message: "Telefone inválido",
  },
};

const useForm = (type: string | null) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value: any) {
    if (type === null) return true;
    if (value.length === 0) {
      setError("Cambo acima é obrigatórios.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
  };
};

export default useForm;
