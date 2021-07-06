import React, { useEffect, useState } from 'react';
import { Product } from '../../interfaces/products';
import './index.css';

interface FormProps {
  title: string;
  edit?: boolean;
  addNewProduct?: (product: Product) => void;
  editProduct?: (product: Product) => void;
  product?: Product;
}

const initDataForm: Product = {
  name: '',
  price: '',
  color: '',
  description: '',
};

const errorsInit = {
  ...initDataForm,
};

const Form = ({
  title,
  edit = false,
  addNewProduct,
  editProduct,
  product,
}: FormProps) => {
  const [dataForm, setDataForm] = useState<Product>(initDataForm);
  const [errors, setErrors] = useState(errorsInit);
  const colors = [
    {
      name: 'color',
      value: 'azul',
      label: 'Azul',
    },
    {
      name: 'color',
      value: 'rojo',
      label: 'Rojo',
    },
    {
      name: 'color',
      value: 'verde',
      label: 'Verde',
    },
    {
      name: 'color',
      value: 'negro',
      label: 'Negro',
    },
  ];

  useEffect(() => {
    if (edit) product && setDataForm({ ...product });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errorsInit });
  };

  const textHandleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errorsInit });
  };

  const isValid = () => {
    const localErros = { ...errorsInit };
    let response = true;

    const keys: string[] = Object.keys(dataForm);

    keys.forEach((key) => {
      if (key !== 'id') {
        if (dataForm[key]! === '' || dataForm[key]!.length === 0) {
          localErros[key] = 'Campo Requerido';
          response = false;
        } else {
          if (key === 'price' && !/^[0-9]+$/.test(dataForm[key]!)) {
            localErros[key] = 'Valor ingresado incorrecto';

            response = false;
          }
        }
      }
    });

    setErrors({ ...localErros });

    return response;
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (isValid()) {
      if (!edit) {
        addNewProduct!(dataForm);
      } else {
        editProduct!(dataForm);
      }

      setDataForm(initDataForm);
    }
  };

  return (
    <div className="container">
      <h1 className="page-title text-3xl">{title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="field-group">
            <label className="label-input text-lg">Nombre</label>
            <input
              type="text"
              className="field-input"
              name="name"
              value={dataForm.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span className="message-invalid">{errors.name}</span>
            )}
          </div>
          <div className="field-group">
            <label className="label-input text-lg">Precio</label>
            <input
              type="text"
              className="field-input"
              name="price"
              value={dataForm.price}
              onChange={handleChange}
            />
            {errors.price && (
              <span className="message-invalid">{errors.price}</span>
            )}
          </div>
        </div>
        <div className="form-row justify-around">
          {colors.map((color, index) => (
            <div className="check-group" key={index}>
              <input
                type="radio"
                name={color.name}
                value={color.value}
                onChange={handleChange}
                checked={dataForm.color === color.value}
              />
              <label className="text-lg">{color.label}</label>
            </div>
          ))}
          {errors.color && (
            <span className="message-invalid">{errors.color}</span>
          )}
        </div>
        <div className="text-group text-lg">
          <label className="label-input">Descripción</label>
          <textarea
            className="text-input"
            name="description"
            rows={5}
            value={dataForm.description}
            onChange={textHandleChange}
          ></textarea>
          {errors.description && (
            <span className="message-invalid">{errors.description}</span>
          )}
        </div>

        <button className="button-secondary text-xl" type="submit">
          Guardar Producto
        </button>
      </form>
    </div>
  );
};

export default Form;
