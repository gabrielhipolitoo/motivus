import { Container } from "@/components/Container/Container";
import PermissionProvider from "@/components/PermissionProvider/PermissionProvider";
import SideBar from "@/components/UIComponents/SideBar/SideBar";

export default async function NonCompliance() {
  return (
    <PermissionProvider router="/non-compliance">
      <Container>
        <p>Não conformidades</p>
      </Container>
    </PermissionProvider>
  );
}
