import PropTypes from "prop-types";

export default function Button({ children, type = "default", ...props }) {
  // style for all types of Button
  let buttonStyle = "px-4 py-2 text-xs md:text-base rounded-md";

  // different styles depending on the type passed in
  if (type === "default") {
    buttonStyle +=
      " bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-slate-100";
  } else if (type === "save") {
    buttonStyle +=
      " bg-green-500 text-slate-50 hover:bg-green-700 hover:text-slate-400";
  }

  return (
    <button className={buttonStyle} {...props}>
      {children}
    </button>
  );
}

// defining prop types for the Button component
Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};
