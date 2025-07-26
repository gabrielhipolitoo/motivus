import { Container } from "@/components/Container/Container";
import PermissionProvider from "@/components/PermissionProvider/PermissionProvider";
import SideBar from "@/components/UIComponents/SideBar/SideBar";

export default async function Stock() {
  return (
    <PermissionProvider router="/stock">
      <Container>
        <p>Estoque</p>
      </Container>
    </PermissionProvider>
  );
}
