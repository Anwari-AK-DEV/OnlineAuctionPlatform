import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiRequest, saveSession } from './api';
import './App.css';

function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState('collector');
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ loading: false, error: '' });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus({ loading: true, error: '' });
    try {
      const result = await apiRequest('/auth/register', { method: 'POST', body: JSON.stringify({ firstName: form.get('firstName'), lastName: form.get('lastName'), email: form.get('email'), password: form.get('password'), role }) });
      saveSession(result);
      navigate('/auctions');
    } catch (error) {
      setStatus({ loading: false, error: error.message });
    }
  }

  return <main className="auth-page account-page"><div className="auth-layout"><section className="auth-intro"><span className="eyebrow">Join the collection</span><h1>Make room for something remarkable.</h1><p>Create a BidHub account to follow auctions, save the things you love, and make your first bid with confidence.</p><div className="account-perks"><div><strong>01</strong><span>Save your favourite lots</span></div><div><strong>02</strong><span>Bid with real-time updates</span></div><div><strong>03</strong><span>Sell to curious collectors</span></div></div></section><section className="auth-panel account-panel"><div className="auth-panel-header"><span className="auth-kicker">Create your account</span><h2>Start your story.</h2><p>Already a member? <Link to="/login">Sign in</Link></p></div><form className="auth-form account-form" onSubmit={handleSubmit}><div className="name-fields"><label htmlFor="first-name">First name<input id="first-name" name="firstName" type="text" placeholder="Jane" required /></label><label htmlFor="last-name">Last name<input id="last-name" name="lastName" type="text" placeholder="Doe" required /></label></div><label htmlFor="register-email">Email address<input id="register-email" name="email" type="email" placeholder="you@example.com" required /></label><label htmlFor="register-password">Create password<div className="password-field"><input id="register-password" name="password" type={showPassword ? 'text' : 'password'} placeholder="At least 6 characters" minLength="6" required /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? 'Hide' : 'Show'}</button></div></label><fieldset className="account-intent"><legend>I am here to</legend><label className={role === 'collector' ? 'intent-option selected' : 'intent-option'}><input type="radio" name="role" value="collector" checked={role === 'collector'} onChange={() => setRole('collector')} />Collect and bid</label><label className={role === 'seller' ? 'intent-option selected' : 'intent-option'}><input type="radio" name="role" value="seller" checked={role === 'seller'} onChange={() => setRole('seller')} />Sell an item</label></fieldset><label className="terms-option"><input type="checkbox" required />I agree to the BidHub terms and privacy policy.</label>{status.error && <p className="form-error" role="alert">{status.error}</p>}<button type="submit" className="btn-black auth-submit" disabled={status.loading}>{status.loading ? 'Creating account...' : 'Create account'} <span aria-hidden="true">↗</span></button></form></section></div></main>;
}

export default Register;