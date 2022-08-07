import { SectionO1 } from "./section-01";
import { SectionO2 } from "./section-02";
import { SectionO3 } from "./section-03";
import { SectionO4 } from "./section-04";
import { SectionO5 } from "./section-05";
import { SectionO6 } from "./section-06";
import { Section07 } from "./section-07";
import { Section09 } from "./section-09";
import { Section10 } from "./section-10";
import { Section11 } from "./section-11";

export function AwaySurgery(props) {
  return (
    <>
      <SectionO1 />
      <SectionO2 />
      <SectionO4 />
      <SectionO5 />
      <SectionO6 />
      <Section07 />
      {/* <Section08 /> */}
      <Section09 />
      <Section10 />
      <Section11 />
      <SectionO3 />
    </>
  );
}