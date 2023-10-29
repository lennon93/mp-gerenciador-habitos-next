import Image from 'next/image'
export default function DayState({day}: {day: boolean | undefined}) {
  let state = "/images/white-mark.svg";
  return (
    <div>
      <Image 
      src={state}
      width={12}
      height={12}
      alt='white-mark'
      />
    </div>
  )
}
