class Amq_menu extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <nav class="col-md-2 d-none d-md-block bg-light sidebar" style="background-color: #4D4F5C;">
        <div class="sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="analizar.html">
                Analizar
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pacientes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Calendario
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Ajustes
              </a>
            </li>
          </ul>
        </div>
    </nav>
      `
    }
}
customElements.define('amq-menu', Amq_menu)