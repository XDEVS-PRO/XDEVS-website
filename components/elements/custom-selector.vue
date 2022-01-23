<template>
  <div class="custom-select" :tabindex="tabindex" @blur="open = false">
    <span :class="['arrow', { open: open }]"/>
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected.label ? selected.label : selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
          v-for="(option, i) of options"
          :key="i"
          @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        {{ option.label ? option.label : option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomSelector",
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    }
  },
  data() {
    return {
      selected: this.default
          ? this.default
          : this.options.length > 0
              ? this.options[0]
              : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped lang="scss">
.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 56px;
  line-height: 56px;
  max-width: 240px;
}

.custom-select .selected {
  font-size: 16px;
  color: #6D6D6D;
  border: 1px solid #6D6D6D;
  padding-left: 1em;
  cursor: pointer;
  user-select: none;
}

.arrow.open {
  transform: rotate(-135deg) translateY(-50%);
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
}

.custom-select .items {
  overflow: hidden;
  border-right: 1px solid #6D6D6D;
  border-left: 1px solid #6D6D6D;
  border-bottom: 1px solid #6D6D6D;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;
}

.custom-select .items div {
  padding-left: 1em;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  will-change: background-color;
  transition: background-color 0.4s ease-out;
}

.custom-select .items div:hover {
  background-color: rgba(0, 0, 0, 0.2);
}

.selectHide {
  display: none;
}

.arrow {
  position: absolute;
  right: 22px;
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  top: 50%;
  transition: all 0.4s ease-out;
  transform: rotate(45deg) translateY(-50%);
}

</style>
