import styles from "@/styles/actionItems.module.css";

const ActionItems = ({ categories, active, changeCategory }) => {
  return (
    <ul className="flex flex-row justify-between px-6 md:px-0 md:flex-col md:justify-evenly md:w-full">
      {categories.map((o) => (
        <li
          className={`pb-4 border-b-4 md:border-0 ${
            o.slug === active ? `border-purple-800` : `border-transparent`
          }`}
          key={o.id}
        >
          <button
            className={`${styles.btn} ${
              o.slug === active ? styles.active : ``
            }`}
            onClick={() => changeCategory(o.slug)}
          >
            <span className={`hidden text-gray-400`}>{o.id}</span>
            {o.secondaryName && (
              <span
                className={`hidden md:inline pr-2 ${
                  o.slug === active ? styles.activeText : `text-gray-400`
                }`}
              >
                {o.secondaryName}
              </span>
            )}
            <span
              className={`${
                o.slug === active ? styles.activeText : `text-gray-400`
              }`}
            >
              {o.primaryName}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ActionItems;
