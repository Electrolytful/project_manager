import PropTypes from "prop-types";

export default function Button({ children, type = "default", ...props }) {
  // style for all types of Button
  let buttonStyle =
    "px-4 py-2 text-xs md:text-base rounded-md bg-slate-700 text-slate-400";

  // different styles depending on the type passed in
  if (type === "default") {
    buttonStyle += " hover:bg-slate-600 hover:text-slate-100";
  } else if (type === "save") {
    buttonStyle += " hover:bg-green-500 hover:text-slate-50";
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
