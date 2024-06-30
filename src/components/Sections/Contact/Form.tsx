import axios from 'axios';
import React, {useState} from 'react';
import {RiLoader5Fill} from 'react-icons/ri';

import {validate} from '../../../../utils/validate';
import Input from './Input';
import TextArea from './TextArea';

interface IValues {
  name: string;
  email: string;
  message: string;
}
type IErrors = Partial<IValues>;
const ContactForm = React.memo(() => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<IErrors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [messageState, setMessageState] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(values);
    if (errors && Object.keys(errors).length > 0) {
      return setErrors(errors);
    }
    setErrors({});
    setLoading(true);
    axios
      .post('/api/mail', {
        name: values.name,
        email: values.email,
        message: values.message,
      })
      .then(res => {
        if (res.status === 200) {
          setValues({name: '', email: '', message: ''});
          setLoading(false);
          setSuccess(true);
          setMessageState(res.data.message);
        } else {
          setLoading(false);
          setMessageState(res.data.message);
        }
      })
      .catch(err => {
        setLoading(false);
        setMessageState(String(err.message));
      });
    setLoading(false);
  };

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      setValues(prevInput => ({
        ...prevInput,
        [e.target.name]: e.target.value,
      }));
    },
    [],
  );

  return (
    <form onSubmit={handleSubmit}>
      <Input
        error={!!errors.name}
        errorMessage={errors.name ? errors.name : ''}
        id="name"
        label="Your Name"
        name="name"
        onChange={handleChange}
        placeholder="John Doe"
        value={values.name}
      />
      <Input
        error={!!errors.email}
        errorMessage={errors.email ? errors.email : ''}
        id="email"
        label="Your Email"
        name="email"
        onChange={handleChange}
        placeholder="you@example.com"
        value={values.email}
      />
      <TextArea
        error={!!errors.message}
        errorMessage={errors.message ? errors.message : ''}
        id="message"
        label="Your Message"
        name="message"
        onChange={handleChange}
        placeholder="Your message here..."
        value={values.message}
      />
      <button
        className="mt-4 w-full rounded-md bg-orange-500 py-3 px-5 text-lg text-white outline-none hover:bg-orange-700 disabled:cursor-not-allowed disabled:bg-opacity-60"
        disabled={loading}
        type="submit">
        {loading !== true ? (
          'SUBMIT'
        ) : (
          <div className="flex h-full w-full items-center justify-center ">
            <RiLoader5Fill className="h-8 w-8 animate-spin" />
          </div>
        )}
      </button>
      <p className="mt-5 text-green-500 dark:text-green-500">
        {success !== false ? messageState : <span className="text-red-500 dark:text-red-500">{messageState}</span>}
      </p>
    </form>
  );
});
ContactForm.displayName = 'ContactForm';
export default ContactForm;
