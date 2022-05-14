<template>
  <section class="cr" id="#core-team">
    <dark-bg />
    <stripe-wrapper :color-strip="'dark'" />
    <div class="cr__container container">
      <title-block
        :title="'Core Team'"
        :color-icon="'light'"
        :desc-right="titleSubData"
      />

      <h4 class="custom-description mobile">
        {{ titleSubData }}
      </h4>

      <div class="cr__card-container">
        <custom-modal :is-open="isShowModal" :close="closeModal">
          <div class="cr__modal">
            <div class="cr__modal-container container">
              <img
                width="278"
                height="320"
                v-if="dataModalCard.img"
                class="cr__modal-left"
                :src="dataModalCard.img"
                :alt="dataModalCard.alt"
              />
              <div class="cr__modal-right">
                <div class="cr__modal-right_text">
                  <div class="cr__modal-right_text-wrapper">
                    <p class="cr__modal-right_title">
                      {{ dataModalCard.title }}
                    </p>
                    <p class="cr__modal-right_subtitle">
                      {{ dataModalCard.position }}
                    </p>
                  </div>
                  <div class="cr__modal-right_social">
                    <template v-for="(social, i) in dataModalCard.social">
                      <a :href="social.link" :key="i">
                        <img :src="social.src" :alt="social.alt"/>
                      </a>
                    </template>
                  </div>
                </div>
                <div class="cr__modal-right_desc">
                  {{ dataModalCard.desc }}
                </div>
              </div>
            </div>
          </div>
        </custom-modal>

        <div v-for="(item, i) in cardList" :key="i" class="cr__card-wrapper">
          <div class="cr__card-icon">
            <img
              v-if="item.img"
              :src="item.img"
              :alt="item.alt"
              width="270"
              class="cr__card-icon_preview"
            />
            <p class="cr__card-icon_preview-text" @click="showModal(item)">
              profile
            </p>
          </div>
          <div class="cr__card-text">
            <div v-if="item.title" class="cr__card-text-title">
              {{ item.title }}
            </div>
            <div v-if="item.position" class="cr__card-text-desc">
              {{ item.position }}
            </div>
            <a class="cr__card-text-btn" @click="showModal(item)">profile</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleBlock from '~/components/elements/title.vue';
import StripeWrapper from '~/components/elements/strip-bg.vue';
import DarkBg from '~/components/elements/dark-bg.vue';
import CustomModal from '~/components/elements/custom-modal.vue';
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

@Component({
  components: {
    TitleBlock,
    StripeWrapper,
    DarkBg,
    CustomModal
  }
})
export default class CoreTeam extends Vue {
  cardList: Array<Card> = [
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
      img: null,
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

  isShowModal = false;
  isCloseModal = false;
  dataModalCard = {};

  titleSubData =
      'To stay on top of our game, every member of our team constantly works on self-improving his professional skills';

  showModal(item: any) {
    this.dataModalCard = item;
    this.isShowModal = true;
  }

  closeModal() {
    this.dataModalCard = {};
    return (this.isShowModal = false);
  }
}
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

.cr {
  &__card {
    &-icon {
      max-height: 310px;
      transition: all 0.6s ease-out;
      position: relative;

      @media screen and (max-width: 1300px) {
        max-height: 240px;
      }

      @media screen and (max-width: 560px) {
        max-width: 120px;
      }

      &:hover {
        .cr__card-icon_preview-text {
          opacity: 1;
        }
      }

      &_preview {
        &-text {
          position: absolute;
          opacity: 0;
          top: 50%;
          left: 50%;
          margin: 0 auto;
          transform: translate(-50%, -50%);
          text-transform: uppercase;
          font-weight: 600;
          color: $dark-f;
          background-color: $white-f;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease-out;
          cursor: pointer;
        }
      }
    }

    &-container {
      display: flex;
      justify-content: flex-start;
      padding-bottom: 70px;

      @media screen and (max-width: 1300px) {
        flex-wrap: wrap;
        padding-top: 30px;
      }
    }

    &-text,
    &-wrapper {
      display: flex;
      flex-direction: column;
      padding: 0 30px 30px 0;
      transition: all 0.4s ease-out;

      @media screen and (max-width: 560px) {
        flex-direction: row;
        padding: 0 0 20px 0;
        width: 100%;
      }

      &-icon {
        cursor: pointer;
      }
    }

    &-text {
      padding: 0;

      @media screen and (max-width: 560px) {
        flex-direction: column;
        padding-left: 10px;
        align-self: center;
      }
    }

    &-text-title {
      font-size: 20px;
      color: $white-f;
      padding: 20px 0 5px;

      @media screen and (max-width: 560px) {
        padding-top: 0;
      }
    }

    &-text-desc {
      color: $grey-f;
      font-weight: 300;
    }

    &-text-btn {
      display: none;
      background-color: $white-f;
      text-transform: uppercase;
      font-size: 14px;
      padding: 8px 10px;
      max-width: max-content;
      margin-top: 8px;

      @include for-middle() {
        display: block;
      }
    }

    &-icon_preview {
      max-width: 270px;
      max-height: 310px;

      cursor: pointer;

      @media screen and (max-width: 1300px) {
        max-width: 210px;
        max-height: 240px;
      }

      @include for-small() {
        max-width: 120px;
      }
    }
  }

  &__modal {
    &-container.container {
      display: flex;

      @include for-large() {
        align-items: flex-start;
      }

      @include for-middle() {
        flex-direction: column;
      }

      @include for-smallmedium() {
        padding: 0;
      }
    }

    &-right {
      display: flex;
      flex-direction: column;
      text-align: left;
      padding-left: 50px;
      max-width: 470px;

      @include for-middle() {
        padding-left: 0;
      }

      &_text-wrapper {
        padding-right: 10px;
      }

      &_social,
      &_text {
        display: flex;
        justify-content: space-between;
      }

      &_social {
        max-width: 94px;
        width: 100%;
      }

      &_title,
      &_subtitle,
      &_desc {
        line-height: 150%;
        color: $grey-f;
      }

      &_title {
        color: $white-f;
        font-size: 18px;
        font-weight: 700;
        padding-bottom: 10px;

        @include for-smallmedium() {
          padding: 0;
          font-size: 18px;
        }
      }

      &_subtitle {
        font-size: 16px;
        padding-bottom: 30px;
        font-weight: 300;
        color: $white-f;
        opacity: 0.5;

        @include for-smallmedium() {
          padding-bottom: 10px;
          font-size: 16px;
        }
      }

      &_desc {
        font-size: 16px;
        opacity: 0.8;
        color: $white-f;
        font-weight: 300;

        @include for-smallmedium() {
          font-size: 14px;
        }
      }
    }

    &-left {
      @include for-large() {
        width: 60%;
        height: 60%;
        margin-bottom: 20px;
      }

      @include for-smallmedium() {
        width: 40%;
        height: 60%;
      }
    }
  }
}

::v-deep .custom-description.right {
  color: #6d6d6d;
}

.custom-description.mobile {
  display: none;
  color: #6d6d6d;
  @include for-average() {
    display: block;
  }
}
</style>
