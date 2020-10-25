const MarkdownIt = window.markdownit;
const markdownItAttrs = window.markdownItAttrs;

export default {
  props:['value'],
  created() {
    const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
});
    md.use(markdownItAttrs, {
      leftDelimiter: '{',
      rightDelimiter: '}',
      allowedAttributes: []
    });
    
    this.contentHtml = md.render(this.value.content);
  },
  template: `
    <section :class="['slide', value.class]" v-html="contentHtml"></section>
`
}