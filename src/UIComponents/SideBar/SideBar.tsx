import Button from "@/components/Button/Button";
import { SideNav } from "@/components/SideNav";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

import { FaFontAwesome } from "react-icons/fa";

export default function SideBar() {
  return (
    <SideNav.wrapper>
      <SideNav.profiler />
      <SideNav.links>
        <Button icon={faAdjust} value={"teste"} />
      </SideNav.links>
    </SideNav.wrapper>
  );
}
