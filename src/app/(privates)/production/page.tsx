import { Container } from "@/components/Container/Container";
import PermissionProvider from "@/components/PermissionProvider/PermissionProvider";
import SideBar from "@/UIComponents/SideBar/SideBar";

export default async function Production() {
  return (
    <PermissionProvider router="/production">
      <Container>
        <p>production</p>
      </Container>
    </PermissionProvider>
  );
}
