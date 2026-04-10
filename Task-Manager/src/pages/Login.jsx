import { HugeiconsIcon } from '@hugeicons/react';
import { UserFullViewIcon } from '@hugeicons/core-free-icons';
import LoginForm from '../components/auth/LoginForm';

function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-12">
          <div className="h-14 w-14 rounded-2xl bg-linear-to-br from-primary to-on-primary-container flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
            <HugeiconsIcon icon={UserFullViewIcon} className="w-8 h-8 text-on-primary" />
          </div>
          <h1 className="text-3xl font-headline font-bold text-neon-gradient mb-2">
            Task Manager
          </h1>
          <p className="text-sm text-on-surface-variant">
            Sign in to your account
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-card p-8 rounded-2xl border border-white/10 mb-6">
          <LoginForm redirectTo="/" />
        </div>

        {/* Signup Link */}
        <div className="text-center">
          <p className="text-sm text-on-surface-variant">
            Don't have an account?{' '}
            <a href="/signup" className="font-headline font-bold text-primary hover:text-primary-fixed transition-colors">
              Create one
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
