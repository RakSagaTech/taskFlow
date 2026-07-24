export const registerForm = {
  title: "Create Account",
  description: "Create your account to organize tasks and stay productive.",
  buttonText: "Register",

  footer: {
    question: "Already have an account?",
    actionText: "Login",
    actionLink: "/login",
  },

  fields: [
    {
      id: "username",
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      autoComplete: "username",
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      autoComplete: "email",
    },
    {
      id: "password",
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      autoComplete: "new-password",
    },
  ],
};

export const loginForm = {
  title: "Welcome Back",
  description: "Sign in to continue managing your tasks.",
  buttonText: "Login",

  footer: {
    question: "Don't have an account?",
    actionText: "Register",
    actionLink: "/",
  },

  fields: [
    {
      id: "username",
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      autoComplete: "username",
    },
    {
      id: "password",
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      autoComplete: "current-password",
    },
  ],
};