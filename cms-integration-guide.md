# Guia de Integração com Headless CMS (Sanity.io)

Este guia mostra como conectar seu portfólio a um Headless CMS para permitir que o conteúdo seja gerenciado por um cliente através de uma interface amigável. Usaremos o **Sanity.io** como exemplo, pois é poderoso e possui um excelente plano gratuito.

## Passo 1: Configurar o Projeto no Sanity.io

1.  **Crie uma Conta:** Vá para [sanity.io/get-started](https://sanity.io/get-started) e crie uma conta.

2.  **Inicie um Novo Projeto:** No seu terminal, execute o seguinte comando e siga as instruções:
    ```bash
    npm create sanity@latest
    ```
    - Escolha "Create new project", dê um nome a ele (ex: `meu-portfolio-backend`).
    - Use as configurações padrão e selecione o template "Blog" para começar, pois ele já vem com uma boa estrutura.

3.  **Acesse o Sanity Studio:** Após a instalação, navegue para a pasta do projeto (`cd meu-portfolio-backend`) e inicie o ambiente de desenvolvimento local:
    ```bash
    npm run dev
    ```
    - Acesse `http://localhost:3333`. Este é o seu painel de administração local.

## Passo 2: Modelar o Conteúdo

Agora, vamos definir a estrutura do conteúdo (os "schemas") para corresponder aos dados do seu portfólio. Dentro da pasta do seu projeto Sanity, edite os arquivos na pasta `schemas/`.

**Exemplo de Schema para "Projetos" (`schemas/project.ts`):**

```typescript
// schemas/project.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'liveUrl',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'repoUrl',
      title: 'Repository URL',
      type: 'url',
    }),
  ],
})
```
*Crie schemas semelhantes para `userInfo`, `skills`, etc.*

## Passo 3: Publicar o Conteúdo

-   Com o Sanity Studio rodando, adicione seus projetos, informações pessoais e habilidades usando a interface gráfica.
-   Clique no botão **"Publish"** para tornar o conteúdo disponível via API.

## Passo 4: Conectar o Frontend React ao Sanity

1.  **Instale o Cliente Sanity:** No seu projeto do portfólio (frontend), instale o cliente oficial do Sanity.
    ```bash
    npm install @sanity/client
    ```

2.  **Crie um Cliente de API:** Crie um arquivo `src/sanityClient.ts` para configurar o acesso à sua API.
    ```typescript
    // src/sanityClient.ts
    import { createClient } from '@sanity/client';

    export default createClient({
      projectId: 'SEU_PROJECT_ID', // Encontre em sanity.json ou manage.sanity.io
      dataset: 'production',
      useCdn: true, // `false` se você quer dados sempre frescos
      apiVersion: '2023-05-03',
    });
    ```
    - **Importante:** Adicione `SEU_PROJECT_ID` a uma variável de ambiente (`.env`) para segurança.

3.  **Busque os Dados:** Agora, modifique seus componentes para buscar os dados do Sanity.

**Exemplo no `ProjectsSection.tsx`:**

```tsx
import React, { useState, useEffect } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { Project } from '../types';
import sanityClient from '../sanityClient'; // Importe o cliente

// ...

useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Usa GROQ, a linguagem de query do Sanity
        const query = '*[_type == "project"]'; 
        const data = await sanityClient.fetch<Project[]>(query);
        setProjects(data);
      } catch (err) {
        setError('Falha ao carregar os projetos.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
}, []);

// ... o resto do componente continua igual
```

## Passo 5: Configurar Atualizações Automáticas na Vercel (Webhooks)

Para que o site seja atualizado automaticamente quando sua cliente publica novo conteúdo:

1.  **Crie um Deploy Hook na Vercel:**
    - Vá para o dashboard do seu projeto na Vercel.
    - Vá em `Settings` > `Git`.
    - Role para baixo até `Deploy Hooks`.
    - Crie um novo hook, dê um nome (ex: `sanity-update`) e selecione a branch `main`.
    - Copie a URL do hook gerado.

2.  **Adicione o Webhook no Sanity:**
    - Vá para o painel de gerenciamento do seu projeto Sanity: `manage.sanity.io/projects/SEU_PROJECT_ID`.
    - Vá em `API` > `Webhooks`.
    - Clique em `Add new webhook`.
    - Dê um nome (ex: `vercel-deploy`), cole a URL do hook da Vercel e configure para disparar no evento `Create, update, delete`.

Pronto! Agora, toda vez que sua cliente publicar uma alteração no Sanity, a Vercel irá automaticamente reconstruir e implantar a versão mais recente do seu portfólio.
