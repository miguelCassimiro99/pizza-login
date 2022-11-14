# Nuxt 3 + Login Page + Supabase

This project was made using Nuxt 3 with the intention to test some features of the new version of this frameword. The deployment was performed on Vercel.


| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Name        | **Nuxt 3 + Login Page + Supabase**
| :label: Technologies | Nuxt 3, TailwindCss, Supabase, Vuelidate, Pug
| :rocket: URL         | https://pizza-login-r9ir4q03a-miguelcassimiro99.vercel.app/
| :fire: Challenge     | Does not apply


### Images
<!-- Inserir imagem com a #vitrinedev ao final do link -->
![](https://raw.githubusercontent.com/miguelCassimiro99/pizza-login/master/public/pizza-login-login.PNG#vitrinedev)

<img src="/public/pizza-login-register.PNG" alt="Register Form"/>

How does it works 🔍

- The online project on the link above has the only purpose to be a design idea for a login page, using tailwind, animations, and some other features.
- During the development I made a integration with supabase using the “@nuxt/supabase” module.
- Notice: if you wan’t to try use the Supabase module you’ll need to:
    - Rename the index page to ‘login’
    - Uncomment the middleware call on “layouts/default”
    - Create a .env file with two variables:  SUPABASE_URL and SUPABASE_KEY. They both you can get the values creating an account on Supabase website (I’ll let the URL below).
    - I’m able to any questions or doubts about this proccess.

### Tools 🛠️

🌐 [Nuxt](https://v3.nuxtjs.org/)

🌐 [@nuxt/supabase](https://supabase.nuxtjs.org/)

🌐 [Supabase](https://supabase.com/)

🌐 [Font-awesome](https://fontawesome.com/)

🌐 [@nuxt/color-mode](https://color-mode.nuxtjs.org/)

🌐 [Tailwind](https://tailwindcss.com/)

🌐 [Typescript](https://www.typescriptlang.org/)

---

## Features 📜

- [x]  Tailwind integration
- [x]  Dark mode (Nuxt Color Mode + Tailwind)
- [x]  Animations
- [x]  Responsible
- [x]  Vuelidate
- [x]  Supabase integration
- [x]  Middleware (auth)
- [x]  Server/api - Nuxt 3
- [x]  Pug

---

## Setup 🏗️

Make sure to install the dependencies:

```
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist

```

- **Development Server**

Start the development server on [http://localhost:3000](http://localhost:3000/)

```
npm run dev

```

- **Production**

Build the application for production:

```
npm run build

```

Locally preview production build:

```
npm run preview

```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

```bash
npm install
```

```bash
npm run dev
```

- ************Supabase************

Create the .env file with the variables: SUPABASE_URL and SUPABASE_KEY
