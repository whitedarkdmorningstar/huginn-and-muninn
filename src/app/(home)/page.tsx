import { Card, Cards } from "fumadocs-ui/components/card";

export default function HomePage() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div>
        <h2 className={"text-lg mb-3 font-bold"}>Version 1</h2>
        <Cards>
          <Card
            title={"Medicine"}
            href={"/docs/v1/medicine/cardiology/heart-failure"}
          />
        </Cards>
      </div>
      <div>
        <h2 className={"text-lg font-bold mb-3"}>Version 2</h2>
        <Cards>
          <Card
            title={"Infectious Disease"}
            href={"/docs/v2/infectious-disease/clinical-examination"}
          />
          <Card
            title={"Acute Medicine"}
            href={"/docs/v2/acute-medicine/clinical-examination"}
          />
        </Cards>
      </div>
    </div>
  );
}
