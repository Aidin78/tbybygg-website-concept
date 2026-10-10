"use client";

import { useId, useState } from "react";
import { rot } from "@/content/rot";
import { cx } from "@/lib/cx";

const kr = new Intl.NumberFormat("sv-SE", { style: "currency", currency: "SEK", maximumFractionDigits: 0 });

export function RotCalculator() {
  const id = useId();
  const [rawCost, setRawCost] = useState("100 000");
  const [persons, setPersons] = useState<1 | 2>(1);

  const cost = Number(rawCost.replace(/\D/g, "")) || 0;
  const deduction = Math.min(Math.round(cost * rot.rate), rot.maxPerPerson * persons);
  const toPay = cost - deduction;

  return (
    <div className="bg-paper p-6 sm:p-8">
      <p className="eyebrow text-slate">Räkneexempel {rot.year}</p>

      <label htmlFor={`${id}-cost`} className="mt-6 block font-semibold">
        Arbetskostnad inklusive moms
      </label>
      <div className="mt-2 flex items-center border-b-2 border-navy focus-within:border-terracotta-ink">
        <input
          id={`${id}-cost`}
          inputMode="numeric"
          autoComplete="off"
          value={rawCost}
          onChange={(event) => {
            const digits = event.target.value.replace(/\D/g, "").slice(0, 8);
            setRawCost(digits ? Number(digits).toLocaleString("sv-SE") : "");
          }}
          className="w-full bg-transparent py-2 font-display text-[2rem] tracking-[-0.02em] tabular-nums outline-none"
        />
        <span className="font-display text-xl text-ink-muted">kr</span>
      </div>

      <fieldset className="mt-6">
        <legend className="font-semibold">Hur många delar på avdraget?</legend>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {([1, 2] as const).map((value) => (
            <label
              key={value}
              className={cx(
                "flex min-h-12 cursor-pointer items-center justify-center border text-[0.95rem] font-medium transition-colors has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-terracotta",
                persons === value ? "border-navy bg-navy text-ivory" : "border-navy/25 hover:border-navy",
              )}
            >
              <input
                type="radio"
                name={`${id}-persons`}
                value={value}
                checked={persons === value}
                onChange={() => setPersons(value)}
                className="sr-only"
              />
              {value === 1 ? "En person" : "Två personer"}
            </label>
          ))}
        </div>
      </fieldset>

      <dl className="mt-8 grid grid-cols-2 gap-px bg-line" aria-live="polite">
        <div className="bg-paper pr-4">
          <dt className="text-sm text-ink-muted">Möjligt ROT-avdrag</dt>
          <dd className="mt-1 font-display text-display-s text-terracotta-ink tabular-nums">{kr.format(deduction)}</dd>
        </div>
        <div className="bg-paper pl-4">
          <dt className="text-sm text-ink-muted">Du betalar för arbetet</dt>
          <dd className="mt-1 font-display text-display-s tabular-nums">{kr.format(toPay)}</dd>
        </div>
      </dl>

      <p className="mt-6 text-[0.8125rem] leading-relaxed text-ink-muted">
        Förenklat exempel som förutsätter att årets utrymme för rot- och rutavdrag inte redan är använt. Material och
        resor ger inte rätt till avdrag. Skatteverket bedömer alltid den enskilda rätten till avdrag.
      </p>
    </div>
  );
}
