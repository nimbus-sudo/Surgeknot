export async function cpuTierCheck() {
  if ('cpuPerformance' in navigator) {
    const cpuTier = await navigator.cpuPerformance;
    return cpuTier;
  } else {
    return null;
  };
};
