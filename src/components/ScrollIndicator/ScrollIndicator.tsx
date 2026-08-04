export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 z-30 -translate-x-1/2 animate-bounce">
      <div className="flex flex-col items-center">
        <p className="cinzel mb-2 text-xs tracking-[5px] text-gray-400">
          SCROLL
        </p>

        <div className="h-12 w-6 rounded-full border border-gray-500">
          <div className="mx-auto mt-2 h-2 w-2 rounded-full bg-yellow-300 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
