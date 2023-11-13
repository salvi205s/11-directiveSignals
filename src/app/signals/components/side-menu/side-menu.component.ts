import { Component, signal } from '@angular/core';

interface menuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  public menuItems = signal<menuItem[]>([
    { title: 'Contador', router: 'counter' },
    { title: 'usuario', router: 'user-info' },
    { title: 'mutaciones', router: 'properties' },
  ]);

  // public menuItems: menuItem[] = [
  //   { title: 'Contador', router: 'counter'},
  //   { title: 'usuario', router: 'user-info'},
  //   { title: 'mutaciones', router: 'properties'},
  // ];
}
