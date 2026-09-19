import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiRequest, saveSession } from './api';
import './App.css';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ loading: false, error: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus({ loading: true, error: '' });
    try {
      const result = await apiRequest('/auth/login', { method: 'POST', body: JSON.stringify({ email: form.get('email'), password: form.get('password') }) });
      saveSession(result);
      navigate('/auctions');
    } catch (error) {
      setStatus({ loading: false, error: error.message });
    }
  }

  return <main className="auth-page"><div className="auth-layout"><section className="auth-intro"><span className="eyebrow">Welcome back</span><h1>Good to see you again.</h1><p>Your next great find might already be waiting. Sign in to keep bidding, watch your lots, and follow the story.</p><div className="auth-quote"><span>“</span><p>The thrill is in the looking. The joy is in the finding.</p><small>— BidHub journal</small></div></section><section className="auth-panel"><div className="auth-panel-header"><span className="auth-kicker">Member sign in</span><h2>Enter your details.</h2><p>New to BidHub? <Link to="/register">Create an account</Link></p></div><form className="auth-form" onSubmit={handleSubmit}><label htmlFor="email">Email address<input id="email" name="email" type="email" placeholder="you@example.com" required /></label><label htmlFor="password">Password<div className="password-field"><input id="password" name="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" minLength="6" required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? 'Hide' : 'Show'}</button></div></label><div className="form-options"><label className="remember-option"><input type="checkbox" />Remember me</label><a href="#forgot-password">Forgot password?</a></div>{status.error && <p className="form-error" role="alert">{status.error}</p>}<button type="submit" className="btn-black auth-submit" disabled={status.loading}>{status.loading ? 'Signing in...' : 'Sign in'} <span aria-hidden="true">↗</span></button><div className="auth-divider"><span>or continue with</span></div><button type="button" className="social-button">Continue with Google</button></form></section></div></main>;
}

export default Login;