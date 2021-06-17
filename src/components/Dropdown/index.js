import Link from "next/link";

const Dropdown = ({ data, isOpen }) => {
  return (
    isOpen && (
      <div className="grid grid-rows-4 text-center items-center bg-yellow-500 py-2 gap-2">
        {data.map((o) => (
          <Link href={o.link}>
            <a className="ml-4">{o.label}</a>
          </Link>
        ))}
      </div>
    )
  );
};

export default Dropdown;
