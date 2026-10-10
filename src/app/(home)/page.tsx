import { Card, Cards } from "fumadocs-ui/components/card";

export default function HomePage() {
  return (
    <div className="p-4">
      <Cards>
        <Card title={"Infectious Disease"} href={"/docs/infectious-disease"} />
        <Card title={"Acute Medicine"} href={"/docs/acute-medicine"} />
      </Cards>
    </div>
  );
}
