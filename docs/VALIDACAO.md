# Validação — 22/10/2026

Este relatório registra a primeira versão. A validação das dez páginas e da revisão mobile está em [VALIDACAO-REVISAO.md](VALIDACAO-REVISAO.md).

Ambiente: Windows, Node.js 24.11.0 e npm 11.11.0.

## Resultado

- `npm run lint`: aprovado sem erros ou avisos.
- `npm run typecheck`: aprovado.
- `npm run build`: aprovado; oito páginas pré-renderizadas, além da página 404 e do ícone.
- `node scripts/check-site.mjs`: aprovado contra o servidor de produção local. Conferiu HTTP 200 nas oito rotas, título único com a marca, descrição, Open Graph, um h1 por página, quatro mensagens específicas dos planos com número e valores corretos, destinos internos, âncoras da home, todas as 16 imagens, otimizador Next Image e HTTP 404 para rota inexistente.
- `npm audit --omit=dev`: nenhum alerta. Alertas da cadeia de ferramentas de lint estão detalhados no README.

## Navegador

As oito páginas foram abertas e comparadas visualmente com os mockups em larguras de 1440 px e 390 px. Na verificação final da versão de produção, a largura rolável coincidiu com a largura de conteúdo em todas as 16 combinações. Não foram detectadas imagens quebradas nem mensagens de erro ou aviso no console dessa verificação.

Os ajustes incluíram contraste dos títulos sobre fundos escuros, enquadramento das fotos no celular, hierarquia do plano anual, alinhamento dos cards e separação da fotografia de detalhe da Bike IN.

Interações verificadas:

- Menu mobile: abertura, navegação para Dança, fechamento após navegação, fechamento por Escape, retorno do foco ao botão e contenção do foco após 18 passos de Tab.
- Cronograma: pré-seleção de Pilates pelo link da atividade, filtro Bike IN + sábado com aula às 09h, filtro Bike IN + terça sem resultados e limpeza dos filtros.
- Navegação, links das quatro modalidades e das duas propostas de comunidade, âncoras da home e retorno pela página 404.
- URLs dos planos, Google Maps, e-mail e Instagram. Nenhuma mensagem externa foi enviada.

Capturas locais e medições ficaram em `output/qa/`, ignorado pelo Git. `home-preview.jpg` registra a primeira dobra da home; os arquivos com sufixos `-1440.jpg` e `-390.jpg` registram cada página. `browser-report.json` contém os títulos, larguras e verificação de imagens.

## Limites editoriais

Fotografias geradas por IA e marca tipográfica são provisórias; não representam registros reais da Insist. A grade é parcial. Não foram inventadas datas, inscrições, taxas ou a inclusão de Bike IN, Duathlon e Circuito nos planos. O domínio de produção continua indefinido e não foi realizado deploy externo.
