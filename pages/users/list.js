import { useEffect, useCallback } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaTrash, FaEye, FaChevronLeft, FaPlus } from "react-icons/fa";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

import { getUsers, removeUser } from "../../store/actions/userAction";

const MySwal = withReactContent(Swal);

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const executeInitUsers = useCallback(() => {
    dispatch(getUsers());
  }, []);

  useEffect(() => {
    if (!users.data.length) {
      executeInitUsers();
    }
  }, []);

  const handleRemove = (user) => {
    MySwal.fire({
      title: `Are you sure you want to delete ${user.name}?`,
      text: "This action is permanent!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) dispatch(removeUser(user));
    });
  };

  return (
    <div className="flex flex-col">
      <h1 className="py-6 xs:text-white md:text-black text-xl leading-9 font-bold tracking-tight text-gray-800 sm:text-xl sm:leading-10">
        User List
      </h1>

      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Username
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Show/Edit/Remove</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.data &&
                  users.data.map((user, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {user.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {user.username}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center">
                        <Link href={`/users/${user.id}?show=1`}>
                          <a className="text-indigo-600 hover:text-indigo-900 mr-4">
                            <FaEye color="gray" />
                          </a>
                        </Link>

                        <Link href={`/users/${user.id}`}>
                          <a className="text-indigo-600 hover:text-indigo-900">
                            <FaEdit color="gray" />
                          </a>
                        </Link>

                        <a
                          onClick={() => handleRemove(user)}
                          className="text-indigo-600 hover:text-indigo-900 ml-4 cursor-pointer"
                        >
                          <FaTrash color="gray" />
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10">
        <Link href="/">
          <a>
            <FaChevronLeft className="cursor-pointer" color="gray" size={40} />
          </a>
        </Link>
      </div>

      <div className="absolute bottom-10 right-10">
        <Link href="/users/create">
          <button className="p-0 w-16 h-16 bg-pink-500 rounded-full hover:bg-purple-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none flex justify-center items-center">
            <FaPlus color="white" />
          </button>
        </Link>
      </div>
    </div>
  );
}
