import { Container } from "@/components/Container/Container";
import PermissionProvider from "@/components/PermissionProvider/PermissionProvider";
import SideBar from "@/components/UIComponents/SideBar/SideBar";

export default async function Companies() {
  return (
    <PermissionProvider router="/companies">
      <Container>
        <p>Companhias</p>
      </Container>
    </PermissionProvider>
  );
}
