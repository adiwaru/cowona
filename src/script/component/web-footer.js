class WebFooter extends HTMLElement {
  connectedCallback(){
    this.render();
  }

  render()
  {
    this.innerHTML = `
    <div class="fixed-bottom">
    <footer class="page-footer font-small bg-dark">
      <div class="footer-copyright text-center py-3 text-white">© 2020 Copyright:
        <a href="https://instagram.com/adiwaru">Adi Waru</a>
      </div>
    </footer>
    </div>`;
  }
}

customElements.define("web-footer", WebFooter);
