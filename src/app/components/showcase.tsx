import React, { FC } from 'react';

export default function Showcase() {
  return (
    <div className="p-5 mt-[100vh] bg-black">
      <h1 className="p-3 text-center font-serif text-2xl">{"Photography"}</h1>
      <ShowcaseItem title="Sports">
        This will become a description for sports photography
      </ShowcaseItem>
      <ShowcaseItem title="Automotive">
        This will become a description for automotive photography
      </ShowcaseItem>
      <ShowcaseItem title="Landscapes">
        This will become a description for landscape photography
      </ShowcaseItem>

      <h1 className="p-3 text-center font-serif text-2xl">{"Videos"}</h1>
      <ShowcaseItem title="Mountain biking">
        This will become a description for mountain bike videos
      </ShowcaseItem>
      <ShowcaseItem title="Automotive">
        This will become a description for automotive videos
      </ShowcaseItem>
      <ShowcaseItem title="Skiing">
        This will become a description for skiing videos
      </ShowcaseItem>
    </div>
  )
}

interface ShowcaseItemProps {
  title: string;
  children: string;
}

function ShowcaseItem({ title, children }: ShowcaseItemProps) {
  return (
    <section className="pb-3">
      <h2 className="font-serif text-xl">{title}</h2>
      <pre className="font-sans">{children}</pre>
    </section>
  )
}