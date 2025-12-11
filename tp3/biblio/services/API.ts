import { livre, creerlivre } from '../models/livre.js';
export class apiservice {
  static async obtenirlivres(): Promise<livre[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const livres: livre[] = [
          creerlivre(1, "abcd", "mehdi", 1943),
          creerlivre(2, "888", "mahdy", 1949),
          creerlivre(3, "lala", "mahdi", 1997),
          creerlivre(4, "abdcbbb", "mahddi", 1954),
          creerlivre(5, "dqdqdqd", "fadhel", 1951)
        ];
        resolve(livres);
      }, 1000);
    });
  }

  static async rechercherlivres(motcle: string): Promise<livre[]> {
    const tousLesLivres = await this.obtenirlivres();
    return tousLesLivres.filter(livre => 
      livre.titre.toLowerCase().includes(motcle.toLowerCase()) ||
      livre.auteur.toLowerCase().includes(motcle.toLowerCase())
    );
  }
}