export default function Introduction() {
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
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center -z-10">
      <div className="p-5">
        <h2 className="text-center font-serif text-2xl">Joe Owen</h2>
        <div className="max-w-prose p-5">
          <pre className="pb-5 font-sans whitespace-normal">{introTextSummary}</pre>
          <pre className="font-sans whitespace-normal">{introTextCollaborate}</pre>
        </div>
      </div>
      <pre className="fixed bottom-5 font-sans">{"Scroll to view more"}</pre>
    </div>
  )
}