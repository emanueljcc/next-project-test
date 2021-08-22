import PropTypes from "prop-types";
import Link from "next/link";
import clsx from "clsx";

export default function Form({ data, onChange, onSubmit, disabled, loading }) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        className="w-full md:w-6/12 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            onChange={onChange}
            value={data.name}
            disabled={disabled}
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            onChange={onChange}
            value={data.username}
            disabled={disabled}
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={onChange}
            value={data.email}
            disabled={disabled}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <Link href="/users/list">
            <button
              className="bg-gray-500 hover:bg-black text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Back
            </button>
          </Link>

          <button
            className={clsx(
              "bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
              disabled ? "hidden" : ""
            )}
            type="submit"
          >
            {loading ? (
              <div className=" flex justify-center items-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mx-2"></div>
              </div>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

Form.propTypes = {
  data: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  disabled: false,
  loading: false,
};
