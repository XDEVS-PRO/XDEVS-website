import { ref, onMounted } from '@nuxt/bridge/dist/runtime';

// TODO: Check if scroll works
const PageMixin = {

   setup() {
     let initElementListenersTimeout = null;
     const scrollingLinks = ref<any>([]);

     function clearElementsListeners() {
       scrollingLinks.value &&
       scrollingLinks.value.forEach((item: any) =>
         item.removeEventListener("click", notChangedHash)
       );

       window.removeEventListener("hashchange", notChangedHash);

       clearTimeout(initElementListenersTimeout);
     }

     function notChangedHash(e) {
       if (location.hash === e.currentTarget.getAttribute("href")) {
         e.preventDefault();
         scrollToHash();
       }
     }

     function scrollToHash() {
       if (location.hash) {
         setTimeout(() => {
           const fullPath = this.$route.path.replace(/^\/[a-z]{2}\//, "/");
           const replaceStr =
             fullPath.indexOf("/help/manuals/") === 0 ? "#id" : "#to_";
           const el = document.getElementById(
             location.hash.replace(replaceStr, "#")
           );

           if (el) {
             const headerSize = 90;
             const viewportY = el.getBoundingClientRect().top;
             const scrollTop = window.pageYOffset;
             window.scrollTo({
               top: viewportY + scrollTop,
               behavior: "smooth"
             });
           }
         }, 50);
       }
     }

     onMounted(() => {
       scrollToHash();
       clearElementsListeners();
       initElementListenersTimeout = setTimeout(() => {
         scrollingLinks.value = document.querySelectorAll(
           "a[href^='#to_'], section[id]"
         );

         scrollingLinks.value.forEach((item: any) => {
           item.addEventListener("click", this.notChangedHash);
         });

         window.addEventListener("hashchange", e => {
           scrollToHash();
         });
       }, 200);
     })

     return {
       initElementListenersTimeout,
       scrollingLinks,
     }
   }


}

export default PageMixin
