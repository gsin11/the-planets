const ActionItems = () => {
  return (
    <ul className="flex flex-row justify-between px-6 md:px-0 md:flex-col md:justify-evenly md:w-full">
      <li className="pb-4 border-b-4 border-purple-800 md:border-0">
        <button className="uppercase md:p-4 md:border md:border-transparent md:w-full md:flex md:bg-purple-800">
          <span className="hidden md:inline pr-4 text-center text-gray-500">
            01
          </span>
          <span>overview</span>
        </button>
      </li>
      <li className="pb-4 border-b-4 border-transparent">
        <button className="uppercase md:p-4 md:border md:w-full md:flex">
          <span className="hidden md:inline pr-4 text-center text-gray-500">
            02
          </span>
          <span className="text-gray-400">
            <span className="hidden md:inline">internal </span>structure
          </span>
        </button>
      </li>
      <li className="pb-4 border-b-4 border-transparent">
        <button className="uppercase md:p-4 md:border md:w-full md:flex">
          <span className="hidden md:inline pr-4 text-center text-gray-500">
            03
          </span>
          <span className="text-gray-400">
            surface<span className="hidden md:inline"> geology</span>
          </span>
        </button>
      </li>
    </ul>
  );
};

export default ActionItems;
