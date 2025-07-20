"use client";

import { useCallback, useEffect, useState } from 'react';
import { DeviceDataResponse } from '../../actions/device/getUserDeviceDataAct';

interface UseUserDeviceDataResult {
  data: DeviceDataResponse[];
  loading: boolean;
  error: string | null;
  totalDevices: number;
  refetch: () => void;
}

export const useUserDeviceData = (limit: number = 20): UseUserDeviceDataResult => {
  const [data, setData] = useState<DeviceDataResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalDevices, setTotalDevices] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/api/device/user-data?limit=${limit}`);
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao buscar dados dos dispositivos');
      }

      setData(result.data || []);
      setTotalDevices(result.totalDevices || 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      setData([]);
      setTotalDevices(0);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // fetchData é memoizado com useCallback

  return {
    data,
    loading,
    error,
    totalDevices,
    refetch: fetchData
  };
}; 