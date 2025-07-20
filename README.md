🔑 3. Login automático após cadastro
Se um usuário criar uma conta, você pode logá-lo automaticamente via signIn do NextAuth:

ts
Copiar
Editar
import { signIn } from "next-auth/react";

// Após criar a conta:
await signIn("credentials", {
  email: newUser.email,
  password: newUser.password,
  callbackUrl: "/dashboard",
});