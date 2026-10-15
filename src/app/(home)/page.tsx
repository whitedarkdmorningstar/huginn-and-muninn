import { Card, Cards } from "fumadocs-ui/components/card";

export default function HomePage() {
  return (
    <div className="p-4">
      <Cards>
        <Card
          title={"Medicine"}
          href={"/docs/v1/medicine/cardiology/acute-coronary-syndrome"}
        />
        <Card
          title={"Acute Medicine"}
          href={"/docs/v2/acute-medicine/clinical-examination"}
        />
      </Cards>
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
  );
}
