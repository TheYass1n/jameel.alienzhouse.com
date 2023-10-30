import cn from 'clsx'
import Image from 'next/image'

export function Screenshot({ src, alt, full, caption }) {
  return (
    <div
      className={cn(
        '-mb-4 mt-6 flex justify-center overflow-hidden rounded-xl border dark:border-zinc-800',
        full ? 'bg-white bg-zinc-100' : 'bg-zinc-100'
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={full}
        className={cn(
          'w-auto select-none bg-white',
          full ? '' : 'ring-1 ring-gray-200'
        )}
      />
      {/* <span className='text-sm'>{caption}</span> */}
    </div>
  )
}
