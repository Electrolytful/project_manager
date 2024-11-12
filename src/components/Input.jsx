import PropTypes, { any } from "prop-types";

export default function Input({ label, textarea, ...props }) {
  const inputStyles =
    "w-full p-1 border-b-2 rounded-sm focus:outline-none text-slate-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-slate-300">
        {label}
      </label>
      {textarea ? (
        <textarea
          className={inputStyles}
          autoComplete="on"
          rows={5}
          spellCheck
          {...props}
        />
      ) : (
        <input className={inputStyles} {...props} />
      )}
    </p>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  props: PropTypes.arrayOf(any),
};
