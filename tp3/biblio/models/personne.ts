export abstract class personne {
  constructor(
    public id: number,
    public nom: string
  ) {}
  abstract getrole(): string;
  sepresenter(): string {
    return `esmi ${this.nom} (${this.getrole()})`;
  }
}