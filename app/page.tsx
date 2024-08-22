import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By IVKE ZET
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <p className="pl-20">MICA I MARKO</p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          <h2 className="mb-3 text-2xl font-semibold">
            
              <a href="https://scontent.fbnx2-1.fna.fbcdn.net/v/t31.18172-8/10922342_880258892013848_9108414212615959664_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=53a332&_nc_ohc=B1pBXdWYFZkQ7kNvgGzWr-P&_nc_ht=scontent.fbnx2-1.fna&oh=00_AYCAf2Wu6tFiLaDrwN3e9GD5AJ9bDk5XGEEF7mm6qrxcDA&oe=66EEE082">KLIKNI ME <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
              </span>
              </a>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
          </p>
      </div>
    </main>
  );
}
