# Revisão com prioridade para celular — 22/10/2026

## Alterações

- Corrigida a transição diagonal da faixa azul para os planos, eliminando a área reta de fundo preto.
- Diagonais das seções desenhadas por fundos e sobreposição; o conteúdo não é recortado. Banners fotográficos mantêm a diagonal na própria imagem.
- Cards inteiros das modalidades são links, incluindo a imagem. Criadas as páginas pré-renderizadas `/musculacao` e `/hiit`, com metadados próprios e acesso por todos os menus de modalidades.
- Recepção ilustrativa com a assinatura INSIST na parede; legenda afastada da borda diagonal.
- Cada plano informa “Incluso musculação, dança, pilates e HIIT.”
- Duathlon com imagem vertical própria de 1024 × 1536, selecionada por `<picture>` e `getImageProps` no celular. A imagem horizontal secundária oculta usa lazy loading e não foi carregada na observação mobile.
- Heroes e banners adaptados ao celular com áreas de fotografia e texto; enquadramentos preservam rostos e controles. Cards recebem tamanhos de imagem que consideram o recorte vertical.
- Animações de 8 px e 460 ms ao entrar na tela, com um IntersectionObserver, sem listeners de scroll, sem ocultar conteúdo e com respeito a `prefers-reduced-motion`.

## Validação

- Lint, TypeScript e build: aprovados. Dez páginas pré-renderizadas.
- Script `scripts/check-site.mjs`: aprovado contra o servidor de produção local, incluindo as duas rotas novas, inclusão em cada plano, links internos, quatro mensagens de planos, todas as imagens, otimizador Next Image e página 404.
- Teste responsivo: dez rotas em 320, 375, 430, 768 e 1440 px, total de 50 combinações. Nenhuma rolagem horizontal, imagem quebrada ou título/botão/texto de inclusão excedendo seu bloco.
- Rodada adicional na versão de produção: dez rotas em 390 e 1440 px, sem erros ou avisos novos no console nem imagens quebradas.
- Clique diretamente nas imagens de Musculação e HIIT: navegação para as respectivas páginas confirmada. Menu mobile atualizado e fechamento por Escape conferidos.
- Conferência visual adicional em 1920 px: diagonal da recepção, marca na parede, legenda e rostos no banner de cronograma.
- Medição HTTP local, variante 828 px e qualidade 85 com AVIF: home 30.434 bytes; Duathlon mobile 33.429 bytes. Esses valores são das imagens, não representam o tamanho total das páginas nem uma pontuação Lighthouse.

Capturas e relatórios locais estão em `output/qa-revisao/`, ignorado pelo Git. A prévia de produção local foi atualizada na porta 3000. Não houve publicação externa.

As duas imagens novas permanecem ilustrativas. Origens e prompts estão em `docs/IMAGENS-REVISAO.md`.
