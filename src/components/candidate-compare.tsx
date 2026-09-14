"use client";

import { useState } from "react";
import { MANITOU, candidates, methodNote } from "@/lib/locations";
import { cn } from "@/lib/utils";

const MAX_GRADE = 50;

export function CandidateCompare() {
  const [openId, setOpenId] = useState<string>(candidates[0].id);

  return (
    <div>
      <div className="rounded-[1.6rem] bg-white p-5 shadow-[0_12px_40px_-24px_rgba(18,53,44,0.45)] ring-1 ring-ink/5 sm:p-7">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="font-display text-xl text-ink sm:text-2xl">
            How steep is each one, really
          </h3>
          <p className="text-xs text-ink/55">
            Average grade of the steepest sustained pitch
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          {[...candidates]
            .sort((a, b) => b.gradePct - a.gradePct)
            .map((c) => (
              <li key={c.id}>
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-medium text-ink">{c.name}</span>
                  <span className="tabular-nums text-ink/70">
                    {c.gradePct}% · {c.verticalFt.toLocaleString()} ft
                    {!c.verified && (
                      <span className="ml-1 text-ink/40">(coarse)</span>
                    )}
                  </span>
                </div>
                <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-sky">
                  <div
                    className={cn(
                      "h-full rounded-full",
                      c.verified ? "bg-forest" : "bg-light/70",
                    )}
                    style={{ width: `${(c.gradePct / MAX_GRADE) * 100}%` }}
                  />
                </div>
              </li>
            ))}

          <li className="pt-2">
            <div className="flex items-baseline justify-between gap-3 text-sm">
              <span className="font-medium text-gold">
                {MANITOU.name}{" "}
                <span className="text-ink/50">(for scale)</span>
              </span>
              <span className="tabular-nums text-ink/70">
                {MANITOU.grade}% avg / 68% max · {MANITOU.vertical.toLocaleString()}{" "}
                ft
              </span>
            </div>
            <div className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-sky">
              <div
                className="h-full rounded-full bg-gold"
                style={{ width: `${(MANITOU.grade / MAX_GRADE) * 100}%` }}
              />
            </div>
          </li>
        </ul>

        <p className="mt-5 text-xs leading-6 text-ink/50">{methodNote}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {candidates.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setOpenId(c.id)}
            aria-pressed={openId === c.id}
            className={cn(
              "rounded-full px-4 py-2 text-sm transition-colors",
              openId === c.id
                ? "bg-forest text-snow"
                : "bg-white text-ink/70 shadow-sm ring-1 ring-ink/5 hover:text-ink",
            )}
          >
            {c.name}
          </button>
        ))}
      </div>

      {candidates
        .filter((c) => c.id === openId)
        .map((c) => (
          <article
            key={c.id}
            className="mt-4 rounded-[1.6rem] bg-white p-5 shadow-[0_12px_40px_-24px_rgba(18,53,44,0.45)] ring-1 ring-ink/5 sm:p-7"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-coral uppercase">
              {c.nickname}
            </p>
            <h3 className="font-display mt-2 text-2xl text-ink sm:text-3xl">
              {c.name}
            </h3>

            <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
              {[
                { t: "Sustained grade", v: `${c.gradePct}%` },
                {
                  t: "Vertical on that pitch",
                  v: `${c.verticalFt.toLocaleString()} ft`,
                },
                { t: "Walk from parking", v: `${c.approachMi} mi` },
                {
                  t: "Base elevation",
                  v: `${c.baseElevFt.toLocaleString()} ft`,
                },
              ].map((s) => (
                <div key={s.t}>
                  <dt className="text-xs text-ink/55">{s.t}</dt>
                  <dd className="font-display mt-0.5 text-xl text-ink">{s.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 space-y-5 text-sm leading-7">
              <div>
                <p className="font-semibold text-forest">
                  Who captures the visit
                </p>
                <p className="mt-1 text-ink/75">{c.capturesVisit}</p>
              </div>
              <div>
                <p className="font-semibold text-forest">
                  What it has going for it
                </p>
                <p className="mt-1 text-ink/75">{c.forIt}</p>
              </div>
              <div>
                <p className="font-semibold text-ink">What is hard about it</p>
                <p className="mt-1 text-ink/75">{c.againstIt}</p>
              </div>
              <div>
                <p className="font-semibold text-coral">
                  What we do not know yet
                </p>
                <p className="mt-1 text-ink/75">{c.unknown}</p>
              </div>
            </div>

            <p className="mt-6 border-t border-ink/10 pt-4 text-xs leading-6 text-ink/55">
              Land: {c.landowner} · Main Street: {c.mainStreet}
              {!c.verified ? " · Coarse sampling only" : ""}
            </p>
          </article>
        ))}
    </div>
  );
}
