# Landing Page para Escritório de Advocacia

Esta é uma landing page profissional e responsiva para escritórios de advocacia especializados em INSS e BPC para autistas, desenvolvida com HTML, CSS e JavaScript.

## Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Integração WhatsApp**: Botões configurados para contato direto via WhatsApp
- **Animações Suaves**: Efeitos visuais modernos e profissionais
- **Efeito de Esmaecer**: A foto do advogado esmae suavemente ao rolar a página
- **Scroll Otimizado**: Navegação suave sem quebra de formatação
- **Formulário de Contato**: Sistema de contato integrado
- **SEO Otimizado**: Estrutura semântica e meta tags apropriadas
- **Espaço para Logo**: Área dedicada para o símbolo/logo da empresa

## Personalização

### 1. Logo da Empresa
- Substitua o arquivo `logo-empresa.png` pelo logo da empresa
- Recomendações: formato PNG ou SVG, fundo transparente, resolução mínima 200x80px
- O logo será automaticamente ajustado e responsivo

### 2. Imagem do Advogado
- Substitua o arquivo `placeholder-lawyer.jpg` pela foto do profissional
- Recomendações: formato JPG ou PNG, resolução mínima 400x500px
- A imagem será automaticamente ajustada e responsiva
- Possui efeito de esmaecer ao rolar a página para baixo

### 3. Configuração do WhatsApp
No arquivo `script.js`, altere a linha:
```javascript
const phoneNumber = '5511999999999'; // Substitua pelo número real
```
- Use o formato: DDI + DDD + Número (sem espaços ou caracteres especiais)
- Exemplo: 5511987654321 para um número de São Paulo

### 4. Informações de Contato
No arquivo `index.html`, atualize:
- Endereço na seção de contato
- Telefone e e-mail
- Links das redes sociais no rodapé

### 5. Conteúdo Textual
Personalize os textos em `index.html`:
- Título principal na seção hero
- Descrição sobre o escritório
- Especialidades (já configuradas para INSS e BPC para autistas)
- Informações de contato

### 6. Cores e Estilo
No arquivo `styles.css`, você pode alterar:
- Cores principais (variáveis CSS no topo do arquivo)
- Fontes (links do Google Fonts no HTML)
- Espaçamentos e tamanhos

## Estrutura de Arquivos

```
landing-page-advocacia/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
├── logo-empresa.png    # Logo da empresa (substitua)
├── placeholder-lawyer.jpg  # Imagem do advogado (substitua)
└── README.md           # Este arquivo
```

## Funcionalidades Especiais

### Efeito de Esmaecer
- A foto do advogado esmae gradualmente conforme você rola a página
- Começa a esmaecer aos 30% da altura da seção hero
- Termina de esmaecer aos 80% da altura da seção hero

### Scroll Suave
- Navegação otimizada que não quebra a formatação
- Transições suaves entre seções
- Performance otimizada para dispositivos móveis

### Layout Responsivo
- Logo da empresa se adapta automaticamente em dispositivos móveis
- Área da foto é reposicionada em telas menores
- Formulário de contato se ajusta para melhor usabilidade

## Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com Flexbox e Grid
- JavaScript ES6+
- Font Awesome (ícones)
- Google Fonts (tipografia)

## Compatibilidade

- Todos os navegadores modernos
- Internet Explorer 11+
- Dispositivos móveis (iOS e Android)

## Instalação

1. Faça o download de todos os arquivos
2. Substitua as imagens placeholder pelo logo da empresa e foto do advogado
3. Configure o número do WhatsApp no script.js
4. Personalize o conteúdo conforme necessário
5. Hospede os arquivos em um servidor web

## Suporte

Para dúvidas sobre personalização ou problemas técnicos, consulte a documentação dos arquivos ou entre em contato com o desenvolvedor.
