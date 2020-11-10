const MarkdownIt = window.markdownit;
const markdownItAttrs = window.markdownItAttrs;
const hljs = window.hljs;

export default {
  props:['value'],
  created() {
    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return '<pre class="hljs '+ lang +'"><code>' +
                   hljs.highlight(lang, str, true).value +
                   '</code></pre>';
          } catch (__) {}
        }

        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
      }
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