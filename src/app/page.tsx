import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-5 pt-20">
        <div className="text-center p-5">
          <p className="pb-5">
          Welcome! 
          <br /> This website is a place for me to share all of my creative work. 
          <br />I'm a photographer, video creator, musician, and software developer. 
          <br />Feel free to take a look around and I hope you'll like what you see.
          </p>

          <p>
          Always happy to work with people. 
          <br /> If you're interested in partering or have any questions, 
          <br /> you can find my email at the bottom of this page.
          </p>
        </div>
      </main>
    </>
  )
}
