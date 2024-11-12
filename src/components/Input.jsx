import PropTypes, { any } from "prop-types";

export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  props: PropTypes.arrayOf(any),
};
