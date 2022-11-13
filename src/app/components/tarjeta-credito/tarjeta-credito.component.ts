import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjetas: any[] = [
    { titular:'Juan Perez', numeroTarjeta:'42398743298', fechaExpiracion: '11/22', cvv:"123"},
    { titular:'Fernando Campano', numeroTarjeta:'3423323298', fechaExpiracion: '11/22', cvv:"123"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
