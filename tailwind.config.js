module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: () => ({
        person1:
          "url('https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg')",
        person2:
          "url('https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg')",
        person3:
          "url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg')",
        person4:
          "url('https://st.depositphotos.com/2309453/3449/i/600/depositphotos_34490345-stock-photo-confident-casual-unshaven-young-man.jpg')",
        customerHero: "url('https://i.ibb.co/0fBM725/Rectangle-111.png')",
        cta: "url('/assets/cta/bg-cta.png')",
        "hero-5": "url('/assets/heros/hero5background.svg')",
        "register-page":
          "url('https://images.idgesg.net/images/article/2020/05/home-office-ideal-setup-angle-100843210-large.jpg?auto=webp&quality=85,70');",
        "3d-mockup": "url('/assets/features/mockupbackground.svg');",
        "trans-grad": "url('/assets/features/transparentgrad.svg');",
        cta6: "url('/assets/cta/cta6back.jpg')",
      }),
      cursor: {
        grab: "grabbing",
      },
      fontFamily: {
        "dm-sans": ["DMSans", "sans-serif"],
        // 'kn-sans': ['Kronshtadt', 'sans-serif']
      },
      colors: {
        // Configuration theme colors
        "slate-light": "#F9F9F9", // theme: slate, background color
        "slate-orange": "#FF5930", // theme: slate, primary orange
        "slate-headline": "#0D172C", // theme: slate, headline color
        "slate-body": "#2C3242", // theme: slate, body text color
        "slate-blue": "rgba(67, 83, 255, 1)", // theme: slate, primary blue
        "feeling-moody-start": "#E1ECF6", // theme: slate, start of gradient
        "feeling-moody-end": "#F0E3E3", // theme: slate, end of gradient
        "slate-border": "rgba(25, 49, 60, 0.1)", // theme: slate, end of the border
        bursementMainBG:
          "linear-gradient(0deg,rgba(255, 255, 255, 0.93),rgba(255, 255, 255, 0.93)),#4d49ff",
      },
      boxShadow: {
        slight: "0px 13px 19px 8px #C8DDE53B",
      },
      fontSize: {
        "desktop-h1": "48px;",
        "desktop-h2": "42px",
        "desktop-subheading": "21px",
        "desktop-h4": "20px",
        "desktop-paragraph": "16px",
        "mobile-h2": "32px",
        "mobile-h1": "38px",
        "mobile-h3": "26px",
      },
      maxWidth: {
        default: "1146px",
      },
      padding: {
        mob: "24px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
