import {Vue, Component} from "vue-property-decorator";

@Component({})

export default class PegaMixin extends Vue {
    scrollingLinks: any = [];
    test: any = [];
    isNotIndex = false;

    mounted() {
        this.scrollToHash();

        this.scrollingLinks = document.querySelectorAll(
            "a[href^='#to_'], section[id]"
        );

        this.scrollingLinks.forEach((item: any) => {
            item.addEventListener("click", this.notChangedHash);
        });

        window.addEventListener("hashchange", (e) => {
            this.scrollToHash();
        })
    }

    notChangedHash(e: any) {
        if (location.hash === e.currentTarget.getAttribute("href")) {
            e.preventDefault();
            this.scrollToHash();
        }

        // if (e === 'hashchange') {
        //     this.scrollToHash();
        // }
    }

    scrollToHash() {
        if (location.hash) {
            setTimeout(() => {
                const fullPath = this.$route.path.replace(/^\/[a-z]{2}\//, "/");
                const replaceStr =
                    fullPath.indexOf("/help/manuals/") === 0 ? "#id" : "#to_";
                const el = document.getElementById(
                    location.hash.replace(replaceStr, "#")
                );

                const test = document.getElementById('#our-projects');
                if (el) {
                    const headerSize = 90;
                    const viewportY = el.getBoundingClientRect().top;
                    const scrollTop = window.pageYOffset;
                    window.scrollTo({
                        top: viewportY + scrollTop,
                        behavior: "smooth",
                    });
                }
            }, 50);
        }
    }
};



