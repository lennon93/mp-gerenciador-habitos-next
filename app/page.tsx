import DayState from '@/components/DayState';
import Image from 'next/image'

export default function Home() {
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const habits = {
    'Estudar programação': {
      '2023-10-27': true,
      '2023-10-26': true,
      '2023-10-25': true,
    },
    'Estudar Inglês': {
      '2023-10-27': false,
      '2023-10-26': true,
      '2023-10-25': true,
    }
  };



  return (
    <main className='container relative flex flex-col gap-8 px-4 pt-16'>
      {habits === null || Object.keys(habits).length === 0 && (
        <h1 className='mt-20 text-4xl font-light text-white font-display text-center'>
          Você não tem hábitos Cadastrados!
        </h1>
      )}
      {habits !== null && Object.entries(habits).map(([habit, habitStreak]) => (
        <div key={habit}>
          <div className="flex justify-between items-center">
            <span className="text-xl font-light text-white font-sans">{habit}</span>
            <button> 
              <Image
                src={'/images/trash.svg'}
                width={20}
                height={20}
                alt='icone da lixeira'
              />
            </button>
          </div>
          <section className='grid grid-cols-7 bg-neutral-800 rounded'>
              {weekDays.map((day) => (
                <div key={day} className='flex flex-col'>
                  <span className='font-sans text-xs text-white'>
                    {day}
                  </span>
                  <DayState day={true}/>
                </div>
              ))}
          </section>
        </div>
      ))}
    </main>
  )
}
