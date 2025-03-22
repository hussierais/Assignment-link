import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Validation schema using Zod
const schema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [imageSrc, setImageSrc] = useState(null);

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Signup successful!');
  };

  const handleCapture = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageSrc(imageURL);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'purple',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
      }}
    >
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} style={{ textAlign: 'left' }}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input type="text" {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input type="email" {...register('email')} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label>
          <input type="password" {...register('password')} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h3>Take a Picture</h3>
        <input
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleCapture}
        />
        {imageSrc && (
          <div>
            <h4>Preview:</h4>
            <img src={imageSrc} alt="Captured" style={{ width: '200px', marginTop: '10px' }} />
          </div>
        )}
      </div>
    </div>
  );
}