import { Container } from "@/components/Container/Container";
import PermissionProvider from "@/components/PermissionProvider/PermissionProvider";

export default async function Machines() {
  return (
    <PermissionProvider router="/machines">
      <Container>
        <p>Maquinas</p>
      </Container>
    </PermissionProvider>
  );
}
