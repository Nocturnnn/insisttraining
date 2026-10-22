# Insist Training

Site em português brasileiro com dez páginas, construído em **Next.js App Router, React, TypeScript, Tailwind CSS e Lucide React**. As páginas são pré-renderizadas; menu e cronograma usam componentes de cliente para as interações.

## Executar

Requer Node.js 20.9 ou superior. Ambiente validado com Node.js 24 e npm 11.

```powershell
npm ci
npm run dev
```

Acesse [http://127.0.0.1:3000](http://127.0.0.1:3000).

Para executar a versão de produção local:

```powershell
npm run build
npm start
```

Não execute `dev` e `start` na mesma porta ao mesmo tempo. Para outra porta: `npm run dev -- --port 3001`.

## Verificações

```powershell
npm run typecheck
npm run lint
npm run build
```

Com o servidor em execução, `node scripts/check-site.mjs` confere as dez rotas, metadados, destinos internos, links dos planos, imagens e 404. Para outra porta no PowerShell: `$env:SITE_TEST_URL='http://127.0.0.1:3001'; node scripts/check-site.mjs`.

O Next.js 16 não executa ESLint durante o build; o lint é verificado separadamente. O arquivo `package-lock.json` fixa as versões instaladas. ESLint 9.39.5 foi mantido por compatibilidade com os plugins React, acessibilidade e importação fornecidos pelo `eslint-config-next`; esses plugins ainda não declaram compatibilidade com ESLint 10.

## Páginas

| Rota                     | Conteúdo                                              |
| ------------------------ | ----------------------------------------------------- |
| `/`                      | Apresentação, planos, modalidades, endereço e contato |
| `/cronograma`            | Grade parcial e filtros por dia e modalidade          |
| `/danca`                 | Dança, benefícios, galeria e horários                 |
| `/pilates`               | Pilates no solo, controle, mobilidade e equilíbrio    |
| `/bike-in`               | Ciclismo indoor, galeria e contato                    |
| `/eventos`               | CarnaIN, encontros, aulas especiais e Instagram       |
| `/duathlon`              | Apresentação de corrida e ciclismo                    |
| `/circuito-das-estacoes` | Apresentação conceitual das quatro estações           |

Rotas inexistentes mostram uma página 404. A navegação oferece links para `/#academia`, `/#modalidades` e `/#planos` a partir de qualquer página. Os quatro botões de plano abrem o WhatsApp com o preço e a condição específicos, sem cadastro ou checkout. Nenhuma mensagem é enviada automaticamente.

## Editar conteúdo

- `src/lib/data.ts`: contatos, endereço, horários de funcionamento, preços, links de navegação, grade de aulas e configuração de URL/metadados.
- `src/lib/pages.ts`: textos e blocos das páginas de dança, Pilates e Bike IN.
- `src/components/community-pages.tsx`: composição e textos de eventos, Duathlon e Circuito.
- `src/components/ui.tsx`: componentes visuais e assinatura provisória da marca em `Logo`.
- `src/app/globals.css`: tipografia e estilos dos componentes.
- `src/app/composition.css`: diagonais, enquadramentos e composição com prioridade para celular.
- `src/components/section-motion.tsx`: animações discretas por IntersectionObserver, sem ocultar conteúdo e respeitando movimento reduzido.
- `public/images/`: fotografias ilustrativas locais em WebP. O componente `next/image` gera variantes otimizadas; imagens abaixo da primeira dobra usam lazy loading.

As fontes Anton e Inter são carregadas com `next/font`, baixadas durante o build e servidas pelo próprio site. O build precisa de acesso ao Google Fonts.

## Horários e informações pendentes

A grade de aulas reproduz somente o recorte do mockup fornecido: segunda, quarta e sexta, Pilates às 07h, 08h e 17h e dança às 09h; Bike IN segunda e quarta às 19h; sábado, Pilates às 08h e Bike IN/dança às 09h. O material não comprova a programação completa. Terça e quinta são exibidas como horários não informados neste recorte, sem afirmar que não existem aulas nesses dias.

Bike IN, Duathlon e Circuito das Estações não são apresentados como inclusos nos planos. Eventos e Circuito não possuem datas, inscrições, locais ou condições inventadas. A participação é consultada com a equipe.

## Publicar na Vercel

1. Envie este repositório para uma conta GitHub autorizada.
2. Na Vercel, selecione **Add New → Project**, importe o repositório e escolha o preset **Next.js**.
3. Mantenha a raiz do projeto neste diretório, comando de instalação `npm ci` e comando de build `npm run build`. Não configure uma pasta de saída estática; a Vercel oferece o otimizador de imagens do Next.js.
4. Use Node.js 24, ou outra versão LTS compatível com as dependências fixadas.
5. Faça o deploy. Quando o endereço definitivo estiver confirmado, configure `NEXT_PUBLIC_SITE_URL` com a origem HTTPS real e faça um novo deploy.
6. Confira o WhatsApp, endereço, programação completa e materiais oficiais antes do lançamento público.

O domínio não está definido no código. Sem `NEXT_PUBLIC_SITE_URL`, o site omite canonical, URL de produção e imagens Open Graph absolutas. Com a variável configurada, cada página recebe canonical e compartilhamento com título, descrição e imagem próprios. `.env.example` mostra a única variável opcional. Não é necessário banco de dados, token, checkout ou chave de API.

Referências oficiais: [deploy do Next.js na Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [variáveis de ambiente](https://vercel.com/docs/environment-variables).

## Materiais provisórios

- Assinatura `IN / INSIST` desenhada em SVG: substituir pelo logo oficial no componente `Logo` e no favicon.
- Fotografias geradas por IA para esta apresentação: **não são registros reais da Insist, de seus alunos ou de seus espaços**. Substituir pelos arquivos oficiais com autorização de uso. A indicação de imagens ilustrativas está visível no rodapé e nas galerias.
- Grade parcial: substituir pela programação completa confirmada em `lessons`.
- Programação de eventos, Duathlon e Circuito: completar somente com informações oficiais.
- URL definitiva: configurar depois da escolha da hospedagem/domínio.

Origem, nomes de arquivo e prompts finais das imagens estão em [docs/IMAGENS.md](docs/IMAGENS.md) e [docs/IMAGENS-REVISAO.md](docs/IMAGENS-REVISAO.md). O site usa HTML e CSS reais; nenhum mockup completo é usado como imagem de fundo.

## Dependências de desenvolvimento

Na verificação de 22/10/2026, `npm audit --omit=dev` não apresentou vulnerabilidades. A auditoria completa identificou cinco alertas altos na cadeia de desenvolvimento `eslint-config-next → fast-glob → micromatch → braces`, sem correção compatível publicada para `braces`. O comando sugerido pelo npm retrocede o Next ESLint para a versão 14 e não deve ser executado com `--force` neste projeto. Esses pacotes não são enviados como código do site ao navegador. Reavaliar quando houver correção dos mantenedores.

O projeto não foi publicado nem recebeu domínio de produção nesta implementação.

## Composição e desempenho no celular

O Duathlon usa art direction com `getImageProps` e `<picture>`: a imagem vertical de 1024 × 1536 é selecionada no celular; a imagem horizontal secundária permanece oculta com lazy loading. As diagonais são desenhadas no fundo das seções, sem recortar textos ou botões. Os banners mobile usam áreas de imagem e texto adaptadas ao espaço disponível. Os cards completos são links e cada plano exibe as quatro modalidades inclusas.

As animações de entrada movem os elementos apenas 8 px, duram 460 ms, usam um único IntersectionObserver e não adicionam listeners de scroll. O conteúdo nunca depende da animação para aparecer.
