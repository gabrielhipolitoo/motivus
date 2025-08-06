import Modal from "../Modal";

export const drawerMapped = {
  "inital-production": Modal,
  "edit-production": null,
  "details-production": null,
} satisfies Record<string, React.ComponentType<any> | null>;
