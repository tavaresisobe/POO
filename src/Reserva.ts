import Cliente from './Cliente';
import Bicicleta from './Bicicleta';

class Reserva {
  private id: number;
  private cliente: Cliente;
  private bicicleta: Bicicleta;
  private horario: string;
  private data: Date;

  constructor(id: number, cliente: Cliente, bicicleta: Bicicleta, horario: string, data: Date) {
    this.id = id;
    this.cliente = cliente;
    this.bicicleta = bicicleta;
    this.horario = horario;
    this.data = data;
    this.bicicleta.reservar();
  }

  cancelar(): void {
    this.bicicleta.devolver();
  }

  calcularValor(duracao: number): number {
    return this.bicicleta.getValor() * duracao;
  }

  getId(): number {
    return this.id;
  }

  getCliente(): Cliente {
    return this.cliente;
  }

  getBicicleta(): Bicicleta {
    return this.bicicleta;
  }

  getHorario(): string {
    return this.horario;
  }

  getData(): Date {
    return this.data;
  }
}

export default Reserva;
