const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api'

export async function sendContact(form) {
  const res = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.error || 'Erreur serveur')
  }
  return data
}
