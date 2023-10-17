import { type Component, createSignal, Show } from "solid-js";

const Section = ((p) => (
  <section class={`flex flex-col gap-1 ${p.class ?? ""}`}>
    <header>{p.title}</header>
    <p class="border-2 border-black p-1 print_border-2 print_border-black min-h-[36px]">
      {p.content}
    </p>
  </section>
)) satisfies Component<{ title: string; content: string; class?: string }>;

const Document: Component<{ fields: string[] }> = (p) => (
  <article class="flex flex-col gap-3 items-stretch">
    <Section title="Student Name" content={p.fields[0]} />
    <Section title="Class" content={p.fields[1]} />
    <Section title="Teacher" content="Yoon" />
    <div class="grid grid-cols-3">
      <Section title="Period" content={p.fields[3]} class="h-full" />
      <Section
        title="Anticipated Date of Assessment"
        content={p.fields[2]}
        class="col-span-2 h-full"
      />
    </div>
    <Section
      title="Assessment/Assignment Name and Format"
      content={p.fields[4]}
    />
    <Section
      title="Special instructions (e.g. small group, audio, timing, etc.)"
      content={p.fields[6]}
    />
    <section class="flex flex-col gap-2 mt-4">
      <p>For TLC Staff:</p>
      <p>Time started ______________ Time finished ______________</p>
    </section>
  </article>
);

export default () => {
  const [one, set_one] = createSignal("");
  const [two, set_two] = createSignal("");
  return (
    <main class="px-4 py-8 flex flex-col gap-8">
      <section class="flex flex-col gap-2 print_hidden">
        <label class="flex items-center gap-2">
          <span class="w-12">Row 1</span>
          <input
            value={one()}
            oninput={({ target }) => set_one(target.value)}
            class="border border-black py-1 px-1.5 flex-1"
          />
        </label>
        <label class="flex items-center gap-2">
          <span class="w-12">Row 2</span>
          <input
            value={two()}
            oninput={({ target }) => set_two(target.value)}
            class="border border-black py-1 px-1.5 flex-1"
          />
        </label>
        <button
          class="border border-black py-1 px-1.5 transition duration-75 cursor-pointer disabled_opacity-50 disabled_cursor-default enabled_bg-black enabled_text-white flex items-center gap-1 justify-center"
          onclick={() => window.print()}
          disabled={!one()}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
          </svg>
          Print
        </button>
      </section>
      <section class="grid grid-cols-2 gap-16">
        <Show when={one()}>
          {(value) => <Document fields={value().split("\t")} />}
        </Show>
        <Show when={two()}>
          {(value) => <Document fields={value().split("\t")} />}
        </Show>
      </section>
    </main>
  );
};
