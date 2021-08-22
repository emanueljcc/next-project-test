import PropTypes from "prop-types";
import clsx from "clsx";

export default function Button({ name, classes }) {
  return (
    <button
      className={clsx(
        "text-sm bg-transparent py-2 px-4 hover:text-white text-white hover:border-transparent hover:bg-black rounded-full",
        classes
      )}
      onClick={() => console.log("click")}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

Button.defaultProps = {
  name: "Button",
};
