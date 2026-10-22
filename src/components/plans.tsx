import { plans, planMessage, whatsappUrl, planInclusions } from "@/lib/data";
import { Button } from "./ui";
export function Plans() {
  return (
    <section id="planos" className="plans-section light-section angled">
      <div className="container">
        <p className="plans-description">
          {planInclusions} Em todos os planos.
        </p>
        <h2>
          Seu próximo passo
          <br />
          <em>começa aqui.</em>
        </h2>
        <div className="plans-grid">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`plan ${plan.featured ? "featured" : ""}`}
            >
              {plan.featured && (
                <span className="plan-badge">Menor valor mensal</span>
              )}
              <h3>{plan.name}</h3>
              <div className="plan-price">
                {plan.installments && <span>{plan.installments}x de</span>}
                <strong>
                  <small>R$</small> {plan.price}
                </strong>
                {!plan.installments && (
                  <span className="per-month">por mês</span>
                )}
              </div>
              <p className="plan-inclusions">{planInclusions}</p>
              <Button
                href={whatsappUrl(planMessage(plan))}
                variant={plan.featured ? "white" : "dark"}
                external
              >
                Quero este plano<span className="sr-only"> {plan.name}</span>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
