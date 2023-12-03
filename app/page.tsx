import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex gap-5 p-10'>
      <section className='flex-[4] px-5 py-10 rounded bg-gray-900'>
        <form action="" className="flex flex-col gap-5">
          <label className='text-lg font-semibold'>Image Upload</label>
          <input
            type="file"
            className="file-input file-input-bordered file-input-accent w-full max-w-xs"
          />
          <button className="btn btn-active btn-accent w-fit">Upload</button>
        </form>
      </section>
      <section className='flex-[8]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor reiciendis expedita illum, vero beatae unde. Reiciendis voluptates ipsam labore, voluptatum accusamus obcaecati facilis deleniti nihil, minus velit rerum ab.
      </section>
    </main>
  );
}
