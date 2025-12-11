export class repository<T extends { id: number }> {
  private elements: T[] = [];

  ajouter(element: T): void {
    this.elements.push(element);
  }

  supprimer(id: number): boolean {
    const index = this.elements.findIndex(e => e.id === id);
    if (index > -1) {
      this.elements.splice(index, 1);
      return true;
    }
    return false;
  }

  trouverparid(id: number): T | undefined {
    return this.elements.find(e => e.id === id);
  }

  trouvertous(): T[] {
    return [...this.elements];
  }

  rechercher(critere: (element: T) => boolean): T[] {
    return this.elements.filter(critere);
  }

  compter(): number {
    return this.elements.length;
  }
}