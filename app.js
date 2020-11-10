const Vue = window.Vue;
import slide from "./slide.js";
import presentation from "./slides-example/index.md.js";

const RootComponent = {
  components: {
    app: {
      components: {
        slide
      },
      data() {
        return {
          presentation
        };
      },
      template: `
<header class="caption">
    <h1>{{presentation.title}}</h1>
    <p>{{presentation.author}}</p>
</header>
<slide v-for="(val,name,i) in presentation.slides" :data-name="name" :key="name + i" :value="val"/>  
<div class="progress"></div>
    `
    }
  }
};
const app = Vue.createApp(RootComponent);

const vm = app.mount("#app");
