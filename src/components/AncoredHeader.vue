<script>
export default {
  name: 'AncorHeadings',
  props: {
    level: Number,
    href: String,
  },
  render(createElement) {
    console.log('render');
    console.log(this.href);
    const slot = this.$slots.default;

    const createLink = (url, text) => createElement(
      'a',
      {
        attrs: {
          class: 'anc-header__link',
          href: `#${url}`,
        },
      },
      text,
    );

    const link = createLink(slot.href, 'link text');

    return createElement(
      `h${this.level}`,
      {
        attrs: {
          class: 'anc-header__title',
        },
      },
      [link, slot],

    );
  },
};
</script>
