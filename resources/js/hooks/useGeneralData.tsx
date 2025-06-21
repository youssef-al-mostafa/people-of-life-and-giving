import { useState, useEffect } from 'react';

interface GeneralData {
  [key: string]: string;
}

interface UseGeneralDataReturn {
  generalData: GeneralData;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useGeneralData(): UseGeneralDataReturn {
  const [generalData, setGeneralData] = useState<GeneralData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGeneralData = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/general', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setGeneralData(result.data);
      } else {
        throw new Error(result.message || 'Failed to fetch general data');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Error fetching general data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGeneralData();
  }, []);

  return {
    generalData,
    loading,
    error,
    refetch: fetchGeneralData
  };
}
