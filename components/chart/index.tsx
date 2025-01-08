// components/EChartsComponent.tsx
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

// Tipe props untuk komponen agar bisa menerima konfigurasi ECharts sebagai `options`
interface EChartsComponentProps {
  options: echarts.EChartsCoreOption;
}

const EChartsComponent: React.FC<EChartsComponentProps> = ({ options }) => {
  const chartRef = useRef<HTMLDivElement>(null); // referensi untuk div chart

  useEffect(() => {
    let chartInstance: echarts.ECharts | undefined;

    if (chartRef.current) {
      // Inisialisasi ECharts dengan referensi div
      chartInstance = echarts.init(chartRef.current);
      // Set konfigurasi chart
      chartInstance.setOption(options);
    }

    // Bersihkan chart saat komponen dihapus
    return () => {
      chartInstance?.dispose();
    };
  }, [options]); // jalankan kembali jika options berubah

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default EChartsComponent;
