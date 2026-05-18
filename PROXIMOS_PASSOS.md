# Próximos passos — Adriano Ademicon Site

## 1️⃣ Rodar localmente

```bash
npm install
npm run dev
```

Abrir http://localhost:3000 — você verá o site completo rodando!

## 2️⃣ Customizar conteúdo

Abra cada arquivo em `src/components/` e atualize:
- Textos, títulos, descrições
- Links de WhatsApp (busque `5541999999999`)
- Email (busque `contato@adrianoademicon.com`)
- Instagram (busque `adrianoademicon`)

## 3️⃣ Deploy (publicar na internet)

### Opção A: Vercel (recomendado)
```bash
npm install -g vercel
vercel
```

### Opção B: Netlify
1. Conectar seu GitHub
2. Selecionar este repositório
3. Deixar configuração padrão
4. Deploy automático a cada push

## 4️⃣ Adicionar logo personalizado

No arquivo `src/components/Header.tsx` linha 13:
```jsx
<div className="w-10 h-10 bg-brand-red rounded-sm flex items-center justify-center text-white font-bold text-lg">
  A
</div>
```

Substitua por uma imagem SVG ou PNG do logo Adriano.

## 5️⃣ Adicionar formulário de contato (opcional)

Integrar com Formspree:
1. Criar conta em formspree.io
2. Adicionar form action na seção CTA
3. Teste recebimento de emails

## 6️⃣ Analytics (saber quantas visitas tem)

Adicionar Google Analytics em `src/app/layout.tsx`:
```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

## 7️⃣ Gerador de Posts (próxima etapa)

Quando estiver pronto, vamos:
1. Criar skill `/carrossel` pra gerar posts Instagram automáticos
2. Integrar com seu Instagram via Meta Graph API
3. Agendar publicações semanais

## 📋 Checklist antes de ir pro ar

- [ ] Customizar WhatsApp, email, Instagram
- [ ] Adicionar logo
- [ ] Revisar todos os textos
- [ ] Testar no celular
- [ ] Deploy em Vercel/Netlify
- [ ] Compartilhar link no Instagram
- [ ] Monitorar analytics

## 🎨 Design customizations

Se quiser mudar cores:
1. Abra `tailwind.config.js`
2. Altere `#FF0000` (vermelho) pra sua cor
3. Rode `npm run dev` pra ver mudanças

## 📞 Contato

Qualquer dúvida, é só chamar! O site está 100% funcional e pronto pra captar leads.
