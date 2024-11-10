import Image from 'next/image';

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <Image src="/logo.png" alt="Logo" width={80} height={80} className='ml-[-1.25rem]' />
      <span className='font-semibold text-2xl'>CellSpace</span>
    </div>
  );
}
