import { Link } from "react-router-dom";

const TableRow = ({ blog }) => {
  const { title, _id, image, category } = blog;
  return (
    <tr>
      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src={image}
              alt=""
            />
            <div>
              <h2 className="font-medium text-gray-800 dark:text-white ">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 text-sm">
        <div className="flex items-center">
          <p className="px-3 py-1 text-xs text-pink-500 min-w-24 text-center rounded-full dark:bg-gray-800 bg-pink-100/60">
            {category}
          </p>
        </div>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <button className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 pl-2 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </td>
      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <Link to={`/updateBlog/${_id}`}>
          <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 pl-2 hover:text-yellow-500 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
