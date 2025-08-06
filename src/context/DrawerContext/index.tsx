'use client'
import { createContext, ReactNode, useContext, useState } from "react";
import { drawerMapped } from "../../components/drawers";
import { set } from "mongoose";

type DispatchDrawer =
  | "inital-production"
  | "edit-production"
  | "details-production";

type DrawerState = {
  id: DispatchDrawer | null;
  props?: Record<string, string>;
};
type DrawerType = {
  openDrawer: (id: DispatchDrawer, props?: Record<string, any>) => void;
  closerDrawer: () => void;
  drawer: DrawerState;
};

export const DrawerContext = createContext({} as DrawerType);

export const DrawerProvider = ({ children }: { children: ReactNode }) => {
  const [drawer, setDrawer] = useState<DrawerState>({ id: null });
  function closerDrawer() {
    setDrawer({ id: null });
  }
  function openDrawer(id: DispatchDrawer, props?: Record<string, any>) {
    setDrawer({ id, props });
  }
  const Component = drawer.id ? drawerMapped[drawer.id] : null;
  return (
    <DrawerContext.Provider value={{ closerDrawer, openDrawer, drawer }}>
      {children}
      {Component && (
        <div className="w-full bg-amber-50 h-full">
          <Component {...drawer.props} />
        </div>
      )}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext);
