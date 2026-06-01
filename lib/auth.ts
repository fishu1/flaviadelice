// 📁 FIȘIER: lib/auth.ts
import { cookies } from "next/headers";

// Parola de admin - se citeste din variabila de mediu ADMIN_PASSWORD
// Daca nu e setata, foloseste o valoare implicita (SCHIMB-O!)
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "flavia2026";

// Numele cookie-ului de sesiune
const SESSION_COOKIE = "admin_session";

// Valoarea secreta a sesiunii (cand e logat)
const SESSION_VALUE = "ok";

// Verifica daca utilizatorul curent e autentificat
export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value === SESSION_VALUE;
}

// Seteaza cookie-ul de sesiune (dupa login reusit)
export async function setSession() {
  const store = await cookies();
  store.set(SESSION_COOKIE, SESSION_VALUE, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 zile
  });
}

// Sterge sesiunea (logout)
export async function clearSession() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}