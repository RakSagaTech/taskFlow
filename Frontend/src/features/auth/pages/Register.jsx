import AuthForm from "../components/AuthForm";
import { registerForm } from "../constants/authFields";

const Register = () => {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <AuthForm {...registerForm} />
    </main>
  );
};

export default Register;