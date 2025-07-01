import { Container } from "@/components/Container/Container";
import PermissionProvider from "@/components/PermissionProvider/PermissionProvider";
import SideBar from "@/UIComponents/SideBar/SideBar";

export default async function Rastreability() {
  return (
    <PermissionProvider router="/rastreability">
      <Container>
        <p>rastrabilidade</p>
      </Container>
    </PermissionProvider>
  );
}
