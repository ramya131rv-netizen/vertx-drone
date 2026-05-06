import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What if I'm near an airport or no-fly zone?",
    a: "We assess every site against airspace classification and applicable aviation regulations. We manage all necessary permissions and coordinate with aviation authorities to ensure full compliance — whether near an airport or within a restricted zone.",
  },
  {
    q: "Where can I have a drone show?",
    a: "Open fields, stadiums, beaches, rooftops, urban landmarks, festival grounds. We customize each show to suit the space and offer site assessments to help you pick the venue with the best visual impact.",
  },
  {
    q: "How does the weather affect a drone show?",
    a: "Light wind and clear skies are ideal. We can fly in mild conditions, but heavy rain, strong winds or lightning may cause delays for safety. We monitor forecasts closely and keep you informed.",
  },
  {
    q: "Can I add lasers or fireworks to a drone show?",
    a: "Yes. We integrate lasers, fireworks and live performances — all coordinated carefully with the drone choreography for maximum impact and safety.",
  },
  {
    q: "How long is a drone light show?",
    a: "Typically 10–15 minutes, depending on fleet size and animation complexity. Duration can be customized to suit your event flow.",
  },
  {
    q: "Are drone light shows safe?",
    a: "Extremely. Pre-show checks, planned flight paths, secured airspace and failsafe-equipped drones. Every operation is led by certified pilots and technicians.",
  },
  {
    q: "What is the booking process?",
    a: "Tell us your concept (or none — we'll create one). Once concept and venue are locked, we handle programming, 3D simulations, permits, equipment and logistics. On show day, we set up, test, fly and leave your audience speechless.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-32 md:py-44 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Sticky left intro */}
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <p className="text-[12px] uppercase tracking-[0.6em] text-ember mb-5">◆ Questions</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight uppercase">
              Asked & <br />
              <span className="text-ember normal-case">answered</span>.
            </h2>
            <p className="mt-6 text-sm text-muted-foreground max-w-xs">
              Everything you wanted to know — before you ask.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              <span className="w-10 h-px bg-ember" />
              {FAQS.length} answers
            </div>
          </div>
        </div>

        {/* Right accordion */}
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left font-display text-xl md:text-xl font-medium hover:text-ember hover:no-underline py-6 uppercase tracking-wide">
                  <span className="flex items-baseline gap-5">
                    <span className="text-[20px] text-ember tracking-widest">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pl-12 pb-6 max-w-3xl normal-case">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
