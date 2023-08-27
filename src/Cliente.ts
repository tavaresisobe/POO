class Cliente {
  private nome: string;
  private cpf: number;
  private telefone: number;

  constructor(nome: string, cpf: number, telefone: number) {
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
  }

  getNome(): string {
    return this.nome;
  }

  getCpf(): number {
    return this.cpf;
  }

  getTelefone(): number {
    return this.telefone;
  }

  alterarDados(novoNome: string, novoCpf: number, novoTelefone: number): void {
    this.nome = novoNome;
    this.cpf = novoCpf;
    this.telefone = novoTelefone;
  }
}

export default Cliente;
