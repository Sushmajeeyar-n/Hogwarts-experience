export default function Fog() {
  return (
    <>
      <div
        className="absolute bottom-0 left-[-15%] h-[260px] w-[150%]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,.14), transparent 70%)',
          filter: 'blur(90px)',
          animation: 'floatFog 18s ease-in-out infinite alternate',
        }}
      />

      <div
        className="absolute bottom-[-30px] left-[-8%] h-[180px] w-[140%]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,.08), transparent 70%)',
          filter: 'blur(70px)',
          animation: 'floatFog 14s ease-in-out infinite alternate-reverse',
        }}
      />

      <div
        className="absolute bottom-[-50px] left-[-20%] h-[340px] w-[160%]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,.05), transparent 75%)',
          filter: 'blur(120px)',
          animation: 'floatFog 24s ease-in-out infinite alternate',
        }}
      />
    </>
  );
}
