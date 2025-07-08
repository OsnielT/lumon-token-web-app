"use client";

export default function SpinningCoin() {
  return (
    <div className='w-auto h-auto flex justify-center items-center'>
      <video
        src='/SpinningCoin.webm'
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-full'
        style={{ backgroundColor: "transparent" }}
      />
    </div>
  );
}
