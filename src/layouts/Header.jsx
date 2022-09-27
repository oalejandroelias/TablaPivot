import { Link } from "react-router-dom";

const Header = () => {
  const logout = async () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <header className="shadow-sm">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-screen-xl">
        <div className="flex flex-1 w-0 lg:hidden">
          <button
            className="p-2 text-gray-600 bg-gray-100 rounded-full"
            type="button"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="w-20 h-10 bg-gray-200 rounded-lg"></span>

          <form className="hidden mb-0 lg:flex">
            <div className="relative">
              <input
                className="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10"
                placeholder="Search..."
                type="text"
              />

              <button
                className="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg"
                type="submit"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-end flex-1 w-0 lg:hidden">
          <button
            className="p-2 text-gray-500 bg-gray-100 rounded-full"
            type="button"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fillRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <nav className="items-center justify-center hidden text-sm font-medium gap-8 lg:flex lg:flex-1 lg:w-0">
          <Link to="/intervenciones" className="font-bold uppercase">
            Intervenciones
          </Link>
          <Link to="/intervenciones" className="font-bold uppercase">
            Otros
          </Link>
        </nav>

        <div className="items-center hidden gap-4 lg:flex">
          {localStorage.getItem("token") !== null ? (
            <a
              className="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"
              href=""
              onClick={() => logout()}
            >
              Salir
            </a>
          ) : (
            <a
              className="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg"
              href=""
            >
              Entrar
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-gray-100 lg:hidden">
        <nav className="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium">
          <a className="flex-shrink-0 pl-4 text-gray-900" href="">
            About
          </a>
          <a className="flex-shrink-0 pl-4 text-gray-900" href="">
            Blog
          </a>
          <a className="flex-shrink-0 pl-4 text-gray-900" href="">
            Projects
          </a>
          <a className="flex-shrink-0 pl-4 text-gray-900" href="">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
