import { Container } from "@/components/Container/Container";
import PermissionProvider from "@/components/PermissionProvider/PermissionProvider";
import SideBar from "@/UIComponents/SideBar/SideBar";

export default async function Users() {
  return (
    <PermissionProvider router="/users">
      <Container>
        <p>users</p>
      </Container>
    </PermissionProvider>
  );
}
