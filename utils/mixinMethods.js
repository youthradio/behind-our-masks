import Modal from '~/components/Modal.vue'
import icons from '~/utils/icons'

const mixinMethods = {
  components: {
    Modal,
  },
  data() {
    return {
      modelBioData: null,
    }
  },
  methods: {
    toggleBioModal(authordata) {
      if (authordata) {
        this.modelBioData = authordata
        return
      }
      this.modelBioData = null
    },
    toggleBioModalSlug(slug) {
      if (slug) {
        this.modelBioData = this.biosData.find((e) => e.authorslug === slug)
        return
      }
      this.modelBioData = null
    },
    randomImage(element) {
      const height = element.parentNode.getBoundingClientRect().height

      const randomImgs = Array(12)
        .fill()
        .map((_, i) => i + 1)
        .sort(() => Math.random() - 0.5) // array possible images
      const nimgs = ~~(height / 900)
      for (let i = 0; i < nimgs; i++) {
        const img = new Image()
        const r = randomImgs.pop()
        img.setAttribute('data-src', `images/grid/${r}.jpg`)
        img.style.cssText = `
        top:${10 + (i * 60) / nimgs}%;
        right: ${i % 2 === 0 ? '0px' : 'unset'};
        left: ${i % 2 ? '0px' : 'unset'};
        `
        img.classList.add('img-texture', 'img-texture-ns', 'lazyload')
        element.appendChild(img)
      }
    },
    randomIcons(element, num = 5, randh = false, randv = false, empty = 0) {
      // const vh = window.innerHeight
      // const width = element.getBoundingClientRect().width
      const scale = 0.5
      // const marg = 0
      // const step = 100 / num
      for (let i = 0; i < empty; i++) {
        const div = document.createElement('div')
        div.style.cssText = `
          display:flex;
          justify-content: space-between;
          height: 60px;
        `
        element.appendChild(div)
      }
      for (let i = 0; i < num; i++) {
        const div = document.createElement('div')
        div.style.cssText = `
          display:flex;
          justify-content: space-between;
        `
        const vrand = 1 + ~~(2 * Math.random())
        for (let l = 0; l < vrand; l++) {
          const ico = icons[~~(Math.random() * icons.length)]

          const svg = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
          )
          const randx = randh ? 20 - 2 * (Math.random() * 20) : 0
          const randy = randv ? 100 - 2 * (Math.random() * 100) : 0

          svg.setAttribute('width', ico.width * scale)
          svg.setAttribute('height', ico.height * scale)
          svg.setAttribute('viewBox', `0 0 ${ico.width} ${ico.height}`)
          svg.innerHTML = ico.path
          svg.style.cssText = `
          pointer-events: none;
          margin-right: ${randx}px;
          margin-top: ${randy}px;
          transform-origin: center;
          transform: rotate(${~~(Math.random() * 360)}deg);
          margin-left: ${
            vrand === 1 && Math.random() > 0.5 ? 'auto ' : randx + 'px'
          };
          z-index: 0;
        `
          div.appendChild(svg)
        }
        element.appendChild(div)
      }
    },
  },
}

export default mixinMethods
