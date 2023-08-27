class Bicicleta {
  private id: number;
  private modelo: string;
  private valor: number;
  private disponivel: boolean;

  constructor(id: number, modelo: string, valor: number) {
    this.id = id;
    this.modelo = modelo;
    this.valor = valor;
    this.disponivel = true;
  }

  estaDisponivel(): boolean {
    return this.disponivel;
  }

  reservar(): void {
    this.disponivel = false;
  }

  devolver(): void {
    this.disponivel = true;
  }

  getId(): number {
    return this.id;
  }

  getModelo(): string {
    return this.modelo;
  }

  getValor(): number {
    return this.valor;
  }
}

export default Bicicleta;
