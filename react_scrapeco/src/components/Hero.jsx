import react from "react";

function Hero() {
  return (
    <div class="container col-span-8 mx-auto px-4 py-5">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center py-5">
    <div class="col-span-1 lg:col-span-1">
      <img src="bootstrap-themes.png" class="mx-auto max-w-full h-auto" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
    </div>
    <div class="col-span-1 lg:col-span-1">
      <h1 class="text-4xl font-bold text-emphasis leading-tight mb-3">Responsive left-aligned hero with image</h1>
      <p class="text-lg leading-relaxed mb-5">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
        <button type="button" class="btn btn-primary btn-lg px-4">Primary</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
      </div>
    </div>
  </div>
</div>
  );
}

export default Hero;
