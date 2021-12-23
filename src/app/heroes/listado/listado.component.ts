import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['SpiderMan', 'IronMan', 'Thor', 'Capitan America', 'Hulk'];
  heroeBorrado: string = '';

  borrarHeroe() {
    console.log('Borrando....');

    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }

}
