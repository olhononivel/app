import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Device {
  id: string;
  code: string;
  name: string;
  active: boolean;
  capacityTank: number;
  loraAddress: string;
  loraSerial: string;
  city: string;
  street: string;
  district: string;
  zipCode: string;
  number: string | null;
  complement: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}

interface DeviceStore {
  selectedDevice: Device | null;
  setSelectedDevice: (device: Device | null) => void;
  clearSelectedDevice: () => void;
}

export const useDeviceStore = create<DeviceStore>()(
  persist(
    (set) => ({
      selectedDevice: null,
      setSelectedDevice: (device) => set({ selectedDevice: device }),
      clearSelectedDevice: () => set({ selectedDevice: null }),
    }),
    {
      name: 'device-store',
    },
  )
)