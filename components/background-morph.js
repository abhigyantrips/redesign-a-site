'use client';

export default function BackgroundMorph() {
  return (
    <div className="absolute top-0 h-[800px] w-full overflow-hidden">
      <div className="absolute -right-24 -top-[100px] h-[640px] w-[640px] rounded-[50%] bg-[#f46f6f] blur-[100px]"></div>
      <div className="absolute -top-[200px] right-[400px] h-[640px] w-[640px] rounded-[50%] bg-[#7387e0] blur-[100px]"></div>
      {/* 011f79 dark blue */}
    </div>
  );
}
