import { Box } from "@/components/Box/Box";
import { Container } from "@/components/Container/Container";
import MainTitle from "@/components/MainTitle/MainTitle";
import PermissionProvider from "@/components/PermissionProvider/PermissionProvider";
import UiCalender from "@/components/UIComponents/dashboard/Calender/Calender";
import ViewGrafic from "@/components/UIComponents/dashboard/Grafic/ViewGrafic";
import Table from "@/components/UIComponents/dashboard/Table/Table";

export default async function Dashboard() {
  return (
    <PermissionProvider router="/dashboard">
      <Container>
        <MainTitle title="Dashboard" />
        <Box>
          <ViewGrafic />
          <UiCalender />
        </Box>
        <Table />
      </Container>
    </PermissionProvider>
  );
}
