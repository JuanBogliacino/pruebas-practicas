import React, { useState } from 'react';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [messageSend, setMessageSend] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    } else if (name.length < 3) {
        newErrors.name = 'the name must have at least 3 characters';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 5) {
        newErrors.password = 'the password must have at least 5 characters'
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Si hay errores, no enviar el formulario
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMessageSend('')
    } else {
      // Enviar el formulario
      setMessageSend('Message sent!')

      setErrors({});
      setName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
    }
  };

  return (
    <>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <section>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          {errors.name && <p className="error">{errors.name}</p>}
        </section>

        <section>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="error">{errors.email}</p>}
        </section>
        
        <section>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.password && <p className="error">{errors.password}</p>}
        </section>

        <section>
          <label>Confirm Password</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </section>

        <button type="submit">Send</button>

        {messageSend && <p className='message'>{messageSend}</p>}
      </form>
    </>
  );
};

export default RegisterForm;