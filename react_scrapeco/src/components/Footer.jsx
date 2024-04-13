import React from "react";

function Footer() {
    return <div class="container">
    <footer class="flex flex-wrap justify-between items-center py-3 my-4 border-t">
      <div class="flex items-center md:w-1/2">
        <a href="/" class="mb-3 mr-2 md:mb-0 text-gray-700 text-decoration-none">
          <svg class="w-8 h-6" viewBox="0 0 24 16" fill="currentColor"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <span class="text-gray-700">© 2024 Company, Inc</span>
      </div>
  
      <ul class="flex justify-end w-full md:w-1/2 list-none">
        <li class="ml-3"><a class="text-gray-700" href="#"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ml-3"><a class="text-gray-700" href="#"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ml-3"><a class="text-gray-700" href="#"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </footer>
  </div>
}
export default Footer;