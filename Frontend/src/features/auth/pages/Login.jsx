  import AuthForm from "../components/AuthForm";
  import { loginForm } from "../constants/authFields";

  const Login = () => {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 py-10">
        <AuthForm {...loginForm} />
      </main>
    );
  };

  export default Login;