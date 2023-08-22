export default function Home() {
  const introTextSummary = `
    Welcome!
    This website is a place for me to share all of my creative work.
    I'm a photographer, video creator, musician, and software developer.
    Feel free to take a look around and I hope you'll like what you see.
  `;

  const introTextCollaborate = `
    Always happy to work with people.
    If you're interested in partering or have any questions,
    you can find my email at the bottom of this page.
  `;

  return (
    <main className=" flex justify-center p-5 pt-20">
      <div className="p-5">
        <pre className="pb-5 font-sans">{introTextSummary}</pre>
        <pre className="pb-5 font-sans">{introTextCollaborate}</pre>
      </div>
    </main>
  )
}
