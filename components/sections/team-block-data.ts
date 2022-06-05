import imgs from '~/assets/core-team'

export interface Card {
  social: Array<{
    alt: string;
    link: string;
    src: string;
  }>;
  img: string;
  alt: string;
  title: string;
  position: string;
  desc: string;
}

const TeamBlockCards: Array<Card> = [
  {
    social: [
      {
        alt: 'linkedIn',
        link: 'https://www.linkedin.com/in/xander-pokhylenko-9699b3161/',
        src: imgs.social.linked
      },
      {
        alt: 'GitHub',
        link: 'https://github.com/xanderim',
        src: imgs.social.git
      }
    ],
    img: imgs.xanderImg,
    alt: 'Xander Pokhylenko',
    title: 'Xander Pokhylenko',
    position: 'Founder, Full-Stack Developer',
    desc:
      'Skilled Senior Software Developer with more than 5 years of professional experience and a demonstrated history of working in the IT industry. Prefers challenging tasks and a complex approach in solving tasks.  Over the last 5 years developed dozens of projects and business solutions.'
  },

  {
    social: [
      {
        alt: 'GitHub',
        link: 'https://github.com/dlyapun',
        src: imgs.social.git
      }
    ],
    img: imgs.dimanImg,
    alt: 'Dmytro Lyapun',
    title: 'Dmytro Lyapun',
    position: 'CTO, Full-Stack Developer',
    desc:
      'Throughout my career as a developer, I’ve gained a lot of different experiences starting from a junior-level developer and up to the senior full-stack developer and a team leader. I always strive to create high-quality products, improve my programming skills, and ensure every party benefits from our cooperation.'
  },

  {
    social: [
      {
        alt: 'GitHub',
        link: 'https://github.com/skylightxo',
        src: imgs.social.git
      }
    ],
    img: imgs.daniilImg,
    alt: 'Daniil Krutogolov',
    title: 'Daniil Krutogolov',
    position: 'Frontend Developer',
    desc:
      'I love coding. That is my true passion. I even remember myself as a three-year-old kid teaching my grandpa how to use a computer. So, I can say that programming is in my blood. At the age of 12, I tried to develop my first video game, and at the age of 15, I started to learn the basics of programming. Since that time, I have never stopped learning new things - this process is endless.'
  },


  {
    social: [
      {
        alt: 'linkedIn',
        link: 'https://www.linkedin.com/in/nktovs/',
        src: imgs.social.linked
      },
      {
        alt: 'GitHub',
        link: 'https://github.com/NikTovs',
        src: imgs.social.git
      }
    ],
    img: imgs.nikitaImg,
    alt: 'Nik Tov',
    title: 'Nik Tov',
    position: 'Frontend Developer',
    desc:
      'Hey! \n Need a website? Not a problem, I\'m developing websites for more than two years. Our team will provide complex solutions using all our knowledge and experience to help your business stay on top!'
  },

  {
    social: [
      {
        alt: 'linkedIn',
        link: 'https://www.linkedin.com/in/dmitriy-bondarenko-a94ba3216/',
        src: imgs.social.linked
      },
      {
        alt: 'GitHub',
        link: 'https://github.com/doomsday1204',
        src: imgs.social.git
      }
    ],
    img: imgs.dimaImg,
    alt: 'Dmitriy Bondarenko',
    title: 'Dmitriy Bondarenko',
    position: 'Backend Developer',
    desc:
      "I’m very attentive to details, have analytical thinking, know how to set priorities, and am very optimistic! I constantly develop my skills and definitely want steady professional growth. I am very confident in myself (in a good way, of course 😉), and such a soft skill will help me reach all the set goals."
  },

  {
    social: [
      {
        alt: 'GitHub',
        link: 'https://github.com/getWatermelon',
        src: imgs.social.git
      }
    ],
    img: imgs.ivanImg,
    alt: 'Ivan Myasoyedov',
    title: 'Ivan Myasoyedov',
    position: 'Backend Developer',
    desc:
      "For as long as I can remember, I have always been interested in computer science and mathematics. Since my childhood, I have begun my researches in these fields with purpose to expand my knowledges and skills in that fields as far as I can. And now I don’t even have a thought to stop. I think this is the work of my entire life."
  },

  {
    social: [
      {
        alt: 'linkedIn',
        link: 'https://www.linkedin.com/in/danila-kitsanenko-8bb3a11a2/',
        src: imgs.social.linked
      },
      {
        alt: 'GitHub',
        link: 'https://github.com/KiAlki',
        src: imgs.social.git
      },
      {
        alt: 'Facebook',
        link: 'https://www.facebook.com/ki.alkiviad/',
        src: imgs.social.fb
      }
    ],
    img: imgs.danilaImg,
    alt: 'Danila Kitsanenko',
    title: 'Danila Kitsanenko',
    position: 'Full-Stack developer',
    desc:
      'Hello. My name is Danila. I\'ve been programming since 2018. I\'m Full Stack developer, but back end is my greatest love. I fond of working with data, creating server logic and write a beautiful code. I started learning programming with Python. It\'s my main language. Also, I\'m coding in Golang. In XDEVS we work on projects that provide complex and interesting tasks. We look forward to building a strong business relationship in the future with our clients!'
  },
];

export default TeamBlockCards
