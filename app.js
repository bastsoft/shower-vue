import slide from './slide.js';

import slideCoverMd from './slides-example/slide-cover.md.js';
import slideListMd from './slides-example/slide-list.md.js';
import slideText from './slides-example/slide-text.md.js';
import slideTwoCol from './slides-example/slide-two-col.md.js';
import slideListOfList from './slides-example/slide-list-of-list.md.js';
import slideBlockquote from './slides-example/slide-blockquote.md.js';
import slideCode from './slides-example/slide-code.md.js';
import slideTable from './slides-example/slide-table.md.js';
import slidePicture from './slides-example/slide-picture.md.js';
import slideTitle from './slides-example/slide-title.md.js';
import slideListAnimate from './slides-example/slide-list-animate.md.js';
import slideLink from './slides-example/slide-link.md.js';

export default {
  components:{
    slide
  },
    data() {
    return {
      slides:{
        slideCoverMd,
        slideListMd,
        slideText,
        slideTwoCol,
        slideListOfList,
        slideBlockquote,
        slideCode,
        slideTable,
        slidePicture,
        slideTitle,
        slideListAnimate,
        slideLink
      }
    }
  },
  template: `
      <header class="caption">
          <h1>Shower Presentation Engine</h1>
          <p>Yours Truly, Famous Inc.</p>
      </header>
        <slide v-for="(val,name,i) in slides" :data-name="name" :key="name + i" :value="val"/>  

        <footer class="badge">
            <a href="https://github.com/shower/shower">Fork me on GitHub</a>
        </footer>

        <div class="progress"></div>
`
}