import { Container } from "@/components/Container/Container";
import MainTitle from "@/components/MainTitle/MainTitle";
import PermissionProvider from "@/components/PermissionProvider/PermissionProvider";
import ViewGrafic from "@/UIComponents/dashboard/Grafic/ViewGrafic";

export default async function Dashboard() {
  return (
    <PermissionProvider router="/dashboard">
      <Container>
        <MainTitle title="Dashboard" />
        <ViewGrafic />
      </Container>
    </PermissionProvider>
  );
}
