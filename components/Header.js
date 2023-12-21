export default function Header({title, children}) {
  return (
    <div className='mx-auto flex max-w-[890px] flex-col gap-6 text-center'>
      <h2 className='text-3xl font-bold uppercase text-blue'>
        { title ?? 'Header title' }
      </h2>
      <p>
        { children ?? 'Header Content' }
      </p>
    </div>  
  )
}