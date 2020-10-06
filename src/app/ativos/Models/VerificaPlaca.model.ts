export interface VerificaPlaca {

  marca: string;
  modelo: string;
  cor: string;

}

export interface Baixa {

  placa?: string;
  marca?: string;
  modelo?: string;
  cor?: string;
  entrada?: Date;
  saida?: Date;
  tempo?: number;
  valor?: number;
}
