import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "48 Hours Project" },
    { name: "description", content: "Made by Angela Ung, Neyaa " },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1 className="text-3xl font-bold">
        48 Hours Project: Spirit
      </h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="/manager"
          >
            Manager View
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="/employee"
          >
            Employee View
          </a>
        </li>
      </ul>
    </div>
  );
}
