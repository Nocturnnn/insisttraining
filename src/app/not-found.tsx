import { Button } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="eyebrow">404 · Página não encontrada</p>
      <h1>
        O movimento
        <br />
        <em>continua.</em>
      </h1>
      <p>
        Essa página não está por aqui. Volte ao início e encontre seu próximo
        passo.
      </p>
      <Button href="/">Voltar para a home</Button>
    </section>
  );
}
