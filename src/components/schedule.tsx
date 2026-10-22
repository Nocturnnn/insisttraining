"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CalendarDays, Info, Clock3 } from "lucide-react";
import { days, lessons, whatsappUrl } from "@/lib/data";
import { Button } from "./controls";
function ActivityFromQuery({
  onChange,
}: {
  onChange: (activity: string) => void;
}) {
  const searchParams = useSearchParams();
  const requestedActivity = searchParams.get("modalidade") ?? "Todas";
  useEffect(() => {
    onChange(
      ["Pilates", "Dança", "Bike IN"].includes(requestedActivity)
        ? requestedActivity
        : "Todas",
    );
  }, [requestedActivity, onChange]);
  return null;
}

export function Schedule() {
  const [activity, setActivity] = useState("Todas");
  const [day, setDay] = useState("Todos os dias");
  const filtered = lessons.filter(
    (l) =>
      (activity === "Todas" || l.activity === activity) &&
      (day === "Todos os dias" || l.day === day),
  );
  const shownDays = days.filter((d) => day === "Todos os dias" || d === day);
  return (
    <section className="schedule-section light-section angled" id="aulas">
      <Suspense fallback={null}>
        <ActivityFromQuery onChange={setActivity} />
      </Suspense>
      <div className="container">
        <div className="schedule-heading">
          <div>
            <p className="eyebrow">Cronograma · grade parcial</p>
            <h2>Nossas aulas</h2>
          </div>
          <label className="day-filter">
            <CalendarDays size={18} />{" "}
            <span className="sr-only">Filtrar por dia da semana</span>
            <select value={day} onChange={(e) => setDay(e.target.value)}>
              <option>Todos os dias</option>
              {days.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </label>
        </div>
        <div
          className="schedule-filters"
          role="group"
          aria-label="Filtrar por modalidade"
        >
          {["Todas", "Pilates", "Dança", "Bike IN"].map((name) => (
            <button
              key={name}
              aria-pressed={activity === name}
              onClick={() => setActivity(name)}
            >
              {name}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status" aria-live="polite">
          {filtered.length} aulas encontradas.
        </p>
        <div className="schedule-desktop">
          <table>
            <caption className="sr-only">
              Horários parciais das aulas da Insist Training
            </caption>
            <thead>
              <tr>
                <th scope="col">Horário</th>
                {shownDays.map((d) => (
                  <th scope="col" key={d}>
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {["07:00", "08:00", "09:00", "17:00", "19:00"].map((time) => (
                <tr key={time}>
                  <th scope="row">{time}</th>
                  {shownDays.map((d) => {
                    const matches = filtered.filter(
                      (l) => l.day === d && l.time === time,
                    );
                    return (
                      <td className={matches.length ? "has-class" : ""} key={d}>
                        {matches.length ? (
                          matches.map((l) => l.activity).join(" / ")
                        ) : (
                          <span aria-label="Sem aula informada neste recorte">
                            —
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="schedule-mobile">
          {shownDays.map((d) => {
            const dayLessons = filtered
              .filter((l) => l.day === d)
              .sort((a, b) => a.time.localeCompare(b.time));
            return (
              <section key={d}>
                <h3>{d}</h3>
                {dayLessons.length ? (
                  dayLessons.map((l) => (
                    <div className="lesson" key={`${l.time}-${l.activity}`}>
                      <span>
                        <Clock3 size={15} />
                        {l.time}
                      </span>
                      <strong>{l.activity}</strong>
                    </div>
                  ))
                ) : (
                  <p className="no-class">
                    Nenhuma aula informada neste recorte.
                  </p>
                )}
              </section>
            );
          })}
        </div>
        {filtered.length === 0 && (
          <div className="schedule-empty">
            <p>
              Nenhuma aula encontrada neste recorte para os filtros
              selecionados.
            </p>
            <button
              onClick={() => {
                setActivity("Todas");
                setDay("Todos os dias");
              }}
            >
              Limpar filtros
            </button>
          </div>
        )}
        <div className="schedule-note">
          <Info size={20} />
          <p>
            Grade parcial para consulta. Os horários podem ser confirmados com a
            equipe.
            <br />
            <strong>Confirme a programação completa com a equipe.</strong>
          </p>
        </div>
        <Button
          href={whatsappUrl(
            "Olá! Gostaria de confirmar a programação completa das aulas da Insist.",
          )}
          external
          variant="dark"
        >
          Consultar programação
        </Button>
      </div>
    </section>
  );
}
