<template>
  <section class="privacy-policy">
    <stripe-wrapper />
    <div class="privacy-policy__container container">
      <div class="privacy-policy__inner">
        <div class="privacy-policy__article">
          <title-block
            :title="'Privacy Policy for XDEVS'"
            :color-icon="'dark'"
            class="title-desc"
          />
          <h2>TERMS OF USE</h2>
          <p>
            This website contains the original content such as the texts,
            templates, charts, and diagrams which are under the protection of
            the copyright that is reserved to XDEVS. This means that the use of
            any indicated content is strictly prohibited and in order to receive
            a specific permission, it is obligatory to address the XDEVS company
            through our e-mail – contact@xdevs.com. The materials placed on this
            website cannot be used in any other personal or commercial website
            without an official permission of XDEVS company. Using the web
            content would be taken as a violation of the trademark and
            copyright. The content on this website, including the illustrations,
            texts, and documents, might include the misprints and technical
            inaccuracies. XDEVS has a legal right to correct, change, and
            enhance the website content with no prior notifications.
          </p>
        </div>

        <div class="privacy-policy__article">
          <h2>Third Party Sites Links</h2>
          <p>
            We place the external links to the third parties for the convenience
            of our clients. Nevertheless, this does not mean that XDEVS supports
            the particular site or location, as well as its content. XDEVS does
            not take the responsibility and liability for any information at any
            other source information
          </p>
        </div>

        <div class="privacy-policy__article">
          <h2>Liability limitations</h2>
          <p>
            XDEVS is not liable for the following stances: Direct or indirect,
            intended or unintended damages caused by the reliance on this
            website Loss of business opportunity, loss of programs, in case of
            negligence or tort XDEVS saves the right to introduce this Copyright
            Statement with no prior notification.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import StripeWrapper from "~/components/elements/strip-bg.vue";
import TitleBlock from "~/components/elements/title.vue";
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

.privacy-policy {
  padding-top: 100px;

  &__inner {
    padding-bottom: 3rem;

    @include for-small() {
      padding-bottom: 0;
    }
  }

  @include for-average() {
    padding-top: 70px;
  }

  &__article {
    padding: 1rem 0 1.5rem;
  }
}

h2 {
  padding: 0.3rem;
  margin-bottom: 0.4rem;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
  background-color: #000;
}

ul {
  list-style: none;
  padding: 0.5rem 0;
}

li {
  padding-left: 24px;
  position: relative;

  &:before {
    position: absolute;
    top: 46%;
    left: 8px;
    width: 8px;
    height: 8px;
    background: linear-gradient(90deg, #4663ff -0.14%, #17a8d3 99.86%);
    border-radius: 50%;
    transform: translateY(-50%);
    content: "";
  }
}

p,
li {
  color: #838383;
  font-size: 1rem;
}

a {
  text-decoration: none;
  color: #232323;
}

p,
li,
a {
  line-height: 1.4;
}
</style>
