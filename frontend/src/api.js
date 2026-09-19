const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export async function apiRequest(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.message || 'The request could not be completed.');
  return body;
}

export function saveSession(result) {
  localStorage.setItem('bidhub_token', result.token);
  localStorage.setItem('bidhub_user', JSON.stringify(result.user));
}
