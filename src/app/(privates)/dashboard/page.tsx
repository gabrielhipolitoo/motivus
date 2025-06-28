import { Container } from "@/components/Container/Container";
import PermissionProvider from "@/components/PermissionProvider/PermissionProvider";
import SideBar from "@/UIComponents/SideBar/SideBar";

export default async function Dashboard() {
  return (
    <PermissionProvider router="/dashboard">
      <Container>
        <SideBar />
      </Container>
    </PermissionProvider>
  );
}
