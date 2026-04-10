import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginValidationSchema } from '../../libs/validationSchemas';
import { useAuth } from '../../hooks/useAuth';

function LoginForm({ redirectTo = '/' }) {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      setError(null);

      try {
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Simulated success
        console.log('Login successful:', values);
        login({ email: values.email, name: 'User' });
        navigate(redirectTo);
      } catch (err) {
        setError(err.message || 'Login failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      {error && (
        <div
          className="p-4 bg-error/20 border border-error rounded-lg text-error"
          role="alert"
        >
          {error}
        </div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-on-surface mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...formik.getFieldProps('email')}
          className="w-full px-4 py-3 bg-surface-container text-on-surface border border-surface-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="email@test.com"
          aria-invalid={formik.touched.email && Boolean(formik.errors.email)}
          aria-describedby={formik.touched.email && formik.errors.email ? 'email-error' : undefined}
        />
        {formik.touched.email && formik.errors.email && (
          <div
            id="email-error"
            className="mt-2 text-sm text-error"
            role="alert"
          >
            {formik.errors.email}
          </div>
        )}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-on-surface mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...formik.getFieldProps('password')}
          className="w-full px-4 py-3 bg-surface-container text-on-surface border border-surface-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder="••••••••"
          aria-invalid={formik.touched.password && Boolean(formik.errors.password)}
          aria-describedby={formik.touched.password && formik.errors.password ? 'password-error' : undefined}
        />
        {formik.touched.password && formik.errors.password && (
          <div
            id="password-error"
            className="mt-2 text-sm text-error"
            role="alert"
          >
            {formik.errors.password}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-4 py-3  cursor-pointer bg-linear-to-br from-primary to-on-primary-container text-on-primary rounded-lg hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 font-headline font-bold uppercase tracking-wider transition-all active:scale-95 neon-glow"
      >
        {isLoading ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  );
}

export default LoginForm;
