import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { LoginPage } from './LoginPage';
import { SignupPage } from './SignupPage';

export const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') || 'login';

  return mode === 'signup' ? <SignupPage /> : <LoginPage />;
};
