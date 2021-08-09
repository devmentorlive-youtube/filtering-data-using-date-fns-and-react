import { useRouter } from "next/router";

export default function Filters({}) {
  const filters = [
    "All",
    "Today",
    "This week",
    "This month",
    "This year",
    "Last month",
    "Last year",
  ];
  const router = useRouter();
  function parameterize(txt) {
    return txt
      .toLowerCase()
      .replace(/[^0-9a-z- ]/g, "")
      .split(" ")
      .join("-");
  }
  return (
    <div>
      <ul className="flex space-x-4">
        {filters.map((filter) => {
          const param = parameterize(filter);
          const query = router.query.when;
          return (
            <li
              onClick={() => router.push(`?when=${param}`)}
              className={`${param === query ? "text-red-400" : ""}`}>
              {filter}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
