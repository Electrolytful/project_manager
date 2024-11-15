import { forwardRef } from "react";
import PropTypes, { any } from "prop-types";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  // input variable to give same style to multiple tags
  const inputStyles =
    "w-full p-1 border-b-2 rounded-sm focus:outline-none text-slate-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-slate-300">
        {label}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className={inputStyles}
          autoComplete="on"
          rows={5}
          spellCheck
          {...props}
        />
      ) : (
        <input ref={ref} className={inputStyles} {...props} />
      )}
    </p>
  );
});

// defining prop types for the Input component
Input.propTypes = {
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  props: PropTypes.arrayOf(any),
};

export default Input;
