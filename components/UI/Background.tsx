export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-sky-600/10 blur-[120px]" />
      <div className="absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-700/10 blur-[100px]" />
    </div>
  );
}
