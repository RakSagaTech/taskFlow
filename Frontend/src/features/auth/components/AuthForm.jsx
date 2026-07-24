import { Link } from "react-router-dom";





const labelClass = `
mb-2
block
text-sm
font-medium
text-slate-300
`;

const inputClass = `
w-full
rounded-xl
border
border-slate-700
bg-slate-800
px-4
py-3
text-slate-100
placeholder:text-slate-500
outline-none
transition-all
duration-200
hover:border-slate-600
focus:border-blue-500
focus:ring-4
focus:ring-blue-500/20
`;

const AuthForm = ({
  title,
  description,
  buttonText,
  fields,
  footer,
}) => {
  const {
    question,
    actionText,
    actionLink,
  } = footer;

  return (
    <section className="bg-slate-900/70 w-full max-w-lg rounded-3xl border border-slate-700/60 shadow-2xl shadow-blue-950/30 p-10 backdrop-blur-xl">
      <header className="mb-10 text-center">
        <Link to="/" className="text-4xl tracking-tight font-bold text-blue-500 transition-colors duration-200 hover:text-blue-400">
          TaskFlow
        </Link>
      </header>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-slate-100">{title}</h1>

        <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
      </div>

      <form className="space-y-6">
        {fields.map((field) => {
          const {
            id,
            name,
            label,
            type,
            placeholder,
            autoComplete,
          } = field;

          return (
            <div key={id}>
              <label htmlFor={id} className={labelClass}>
                {label}
              </label>

              <input
                id={id}
                name={name}
                type={type}
                placeholder={placeholder}
                autoComplete={autoComplete}
                className={inputClass}
              />
            </div>
          );
        })}

        <button type="submit" className="mt-2 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-900/30 active:scale-[0.98]
        focus:outline-none focus:ring-4 focus:ring-blue-500/30">
          {buttonText}
        </button>
      </form>

      <footer className="mt-8 text-center text-sm text-slate-400">
        <span>{question}</span>{" "}

        <Link to={actionLink} className="ml-1 font-medium text-blue-500 transitions-colors hover:text-blue-400        hover:underline">
          {actionText}
        </Link>
      </footer>
    </section>
  );
};

export default AuthForm;