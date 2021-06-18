import Link from "next/link";

const Dropdown = ({ data, isOpen, onClickHandler }) => {
  return (
    isOpen && (
      <div className="grid grid-rows-4 text-center items-center bg-black py-2 gap-2 relative z-10">
        {data.map((o) => (
          <Link key={o.id} href={`/${o.slug}`}>
            <a className="ml-4 uppercase font-semibold text-lg" onClick={() => onClickHandler()}>{o.name}</a>
          </Link>
        ))}
      </div>
    )
  );
};

export default Dropdown;
