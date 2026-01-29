declare module 'vanta/dist/vanta.topology.min' {
  const topology: (options: Record<string, unknown>) => {
    destroy: () => void;
  };
  export default topology;
}
