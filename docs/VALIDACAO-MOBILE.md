# Desempenho mobile e animações — 22/10/2026

## Implementação

- As fotos usam `getImageProps` no servidor, mantendo o otimizador, `srcSet`, enquadramentos, resoluções e valores de qualidade anteriores. Eliminada a hidratação dos componentes de imagem e separado o código dos controles usado pelo menu e pelos filtros.
- Os 18 arquivos em `public/images` permaneceram idênticos, conferidos por SHA-256 antes e depois. Nenhuma imagem foi redimensionada ou recomprimida nesta revisão.
- Foto principal com carregamento imediato e prioridade alta; demais fotos continuam com lazy loading. A seleção da imagem vertical do Duathlon foi preservada.
- Grade completa do cronograma no HTML pré-renderizado, incluindo a lista mobile. Apenas a leitura do filtro da URL fica em uma pequena fronteira Suspense. A grade não depende mais do JavaScript para aparecer.
- Entradas de 28 px, opacidade inicial de 0,62, duração de 720 ms e intervalo de 85 ms entre cards, limitado a 255 ms. Hero com entrada de 24 px e 750 ms. A foto da recepção usa escala suave, preservando suas bordas.
- Um IntersectionObserver, sem loop ou listener de scroll. O MutationObserver examina somente novos trechos de conteúdo. Animações canceladas em aba oculta ou ao ativar a preferência de movimento reduzido. Nenhum conteúdo fica oculto aguardando JavaScript.
- Controles de filtros e links de atividades com área de toque mínima de 44 px; select de dia com fonte de 16 px no celular para evitar zoom automático no iOS. Retirado o desfoque do fundo do menu em dispositivos de toque.

## Validação

- Lint sem avisos, TypeScript e build aprovados. Dez páginas permanecem pré-renderizadas.
- Teste HTTP das dez rotas, metadados, planos, links, imagens, otimizador e 404 aprovado. Acrescentada verificação de que a grade desktop e mobile está no HTML inicial.
- Teste no navegador da versão de produção em 320, 390, 430 e 1440 px: 40 combinações sem rolagem horizontal, imagens carregadas quebradas ou títulos e controles fora da tela.
- Filtro inicial `?modalidade=Pilates` confirmado. Bike IN no sábado retorna uma aula; terça retorna estado vazio; limpar filtros restaura 17 aulas. Menu mobile abre e fecha com Escape.
- Sem novos erros ou avisos no console durante os testes. Preferência de movimento reduzido preservada por CSS e pela verificação de `matchMedia` no código; não houve emulação dessa preferência no navegador.
- Comparação dos arquivos JavaScript referenciados pelo HTML, somados após gzip local: home de 186.798 para 181.336 bytes (menos 5.462); cronograma de 188.417 para 183.020 bytes (menos 5.397). A soma inclui o script legado `nomodule` nas duas versões; representa uma comparação de bundles, não transferência total medida em aparelho real nem pontuação Lighthouse.

Relatórios, hashes e capturas em `output/qa-mobile/` (ignorado pelo Git). Prévia local na porta 3000. Sem publicação externa.
