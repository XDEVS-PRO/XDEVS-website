<template>
  <div class="blog-footer">
    <div class="blog-author-wrapper">
      <div class="blog-author-details">
        <img
          v-if="author && author.img"
          :src="author.img"
          :srcset="author.smallImg"
          class="blog-author-image"
          alt="Author"
        />
        <div class="blog-author-description">
          <h6 v-if="author && author.name" class="blog-author-name">
            {{ author.name }}
          </h6>
          <span v-if="author && author.bio" class="blog-author-position">{{
            author.bio
          }}</span>
        </div>
      </div>
      <nuxt-link to="/" class="blog-author-link">Meet the author</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  author: { img: string; name: string; bio: string; smallImg: string };
}

const { author } = defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "/assets/styles/variables";

.blog-footer {
  max-width: 806px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px 60px;
}

.blog-author-wrapper {
  border-top: 1px solid #ededed;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;

  @include for-small() {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.blog-author-details {
  display: flex;
  align-items: center;
}

.blog-author-image {
  border-radius: 50%;
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.blog-author-description {
  padding-left: 20px;
}

.blog-author-name {
  font-size: 18px;
  color: #232323;
  padding-bottom: 5px;
}

.blog-author-position {
  color: #6d6d6d;
  font-size: 16px;
}

.blog-author-link {
  border: 1px solid #42484f;
  padding: 20px 40px;
  font-size: 16px;
  font-weight: 600;
  color: #232323;

  @include for-small() {
    margin-top: 30px;
  }
}
</style>
