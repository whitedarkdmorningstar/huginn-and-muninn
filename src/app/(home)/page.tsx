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
          <Card
            title={"Surgery"}
            href={"/docs/v1/surgery/general/blood-transfusion"}
          />
          <Card
            title={"Paediatrics"}
            href={"/docs/v1/paediatrics/cvs/heart-failure"}
          />
          <Card
            title={"Obstetrics & Gynaecology"}
            href={"/docs/v1/ob-gyn/obstetrics/medical-disorders/anaemia"}
          />
        </Cards>
      </div>
      <div>
        <h2 className={"text-lg font-bold mb-3"}>Version 2</h2>
        <Cards>
          <Card
            title={"Medicine"}
            href={"/docs/v2/medicine/rheumatology-and-bone-disease/gout"}
          />
        </Cards>
      </div>
    </div>
  );
}
