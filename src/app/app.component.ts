import { Component, OnInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  valor = '0';
  numero1 = null;
  signo = null;
  esperando = false;
  igualRealizado = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:keyup.1', ['$event']) n1(e: KeyboardEvent) {
    this.obtenerNumero('1');
  }
  @HostListener('window:keyup.2', ['$event']) n2(e: KeyboardEvent) {
    this.obtenerNumero('2');
  }
  @HostListener('window:keyup.3', ['$event']) n3(e: KeyboardEvent) {
    this.obtenerNumero('3');
  }
  @HostListener('window:keyup.4', ['$event']) n4(e: KeyboardEvent) {
    this.obtenerNumero('4');
  }
  @HostListener('window:keyup.5', ['$event']) n5(e: KeyboardEvent) {
    this.obtenerNumero('5');
  }
  @HostListener('window:keyup.6', ['$event']) n6(e: KeyboardEvent) {
    this.obtenerNumero('6');
  }
  @HostListener('window:keyup.7', ['$event']) n7(e: KeyboardEvent) {
    this.obtenerNumero('7');
  }
  @HostListener('window:keyup.8', ['$event']) n8(e: KeyboardEvent) {
    this.obtenerNumero('8');
  }
  @HostListener('window:keyup.9', ['$event']) n9(e: KeyboardEvent) {
    this.obtenerNumero('9');
  }
  @HostListener('window:keyup.0', ['$event']) n0(e: KeyboardEvent) {
    this.obtenerNumero('0');
  }
  @HostListener('window:keyup.+', ['$event']) suma(e: KeyboardEvent) {
    this.realizarOperacion('+');
  }
  @HostListener('window:keyup.-', ['$event']) resta(e: KeyboardEvent) {
    this.realizarOperacion('-');
  }
  @HostListener('window:keyup.*', ['$event']) multi(e: KeyboardEvent) {
    this.realizarOperacion('*');
  }
  @HostListener('window:keyup./', ['$event']) div(e: KeyboardEvent) {
    this.realizarOperacion('/');
  }
  @HostListener('window:keyup.Enter', ['$event']) igual(e: KeyboardEvent) {
    this.realizarOperacion('=');
  }
  @HostListener('window:keyup', ['$event']) punto(e: KeyboardEvent) {
   if (e.key === '.') {
     this.decimal();
   }
  }
  @HostListener('window:keyup.Backspace', ['$event']) reset(e: KeyboardEvent) {
    this.borrar();
  }


  public obtenerNumero(v: string){
    console.log(v);
    if (this.esperando)
    {
      if (this.igualRealizado) {
        this.borrar();
        this.valor = v;
      }else{
        this.valor += v;
        this.esperando = false;
      }
    }else{
      this.valor === '0' ? this.valor = v : this.valor += v;

    }
  }

  decimal(){
    if (!this.valor.includes('.')){
        this.valor += '.';
    }
  }

  private operacion(op , numero2){
    switch (op){
      case '+':
      return this.numero1 += numero2;
      case '-':
      return this.numero1 -= numero2;
      case '*':
      return this.numero1 *= numero2;
      case '/':
      return this.numero1 /= numero2;
      case '=':
      return numero2;
    }
  }
  public realizarOperacion(op: string){
    if (this.numero1 === null){
      this.numero1 = Number(this.valor);
    }else if (this.signo){
      console.log(this.valor.substring(String(this.numero1).length + 1 ));
      if (this.valor.includes('+') || this.valor.includes('-') || this.valor.includes('/') || this.valor.includes('*')) {
        const resultado = this.operacion(this.signo , Number(this.valor.substring(String(this.numero1).length + 1 )));
        this.valor = String(resultado);
        this.numero1 = resultado;
      }
    }
    this.signo = op;
    this.esperando = true;

    if (this.signo !== '='){
      this.valor += this.signo;
      this.igualRealizado = false;
    }else{
      this.igualRealizado = true;
    }
    console.log(this.numero1);

  }

  public borrar(){
    this.valor = '0';
    this.numero1 = null;
    this.signo = null;
    this.esperando = false;
    this.igualRealizado = false;
  }
}
