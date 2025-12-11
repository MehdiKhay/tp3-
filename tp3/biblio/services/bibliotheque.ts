import { livre } from '../models/livre.js';
import { utilisateur } from '../models/utilisateur.js';
import { repository } from './repository.js';

export class bibliotheque {
  private livrerepo = new repository<livre>();
  private utilisateurrepo = new repository<utilisateur>();
  private livresempruntes = new Map<number, number>();
  ajouterlivre(livre: livre): void {
    this.livrerepo.ajouter(livre);
    console.log(`livreajou: "${livre.titre}"`);
  }
  supprimerlivre(id: number): boolean {
    const succes = this.livrerepo.supprimer(id);
    if (succes) {
      console.log(`ivresupp ${id}`);
    }
    return succes;
  }
  emprunterlivre(livreid: number, userid: number): boolean {
    const livre = this.livrerepo.trouverparid(livreid);
    const utilisateur = this.utilisateurrepo.trouverparid(userid);

    if (!livre || !utilisateur) {
      console.log('erreur');
      return false;
    }

    if (!livre.disponible) {
      console.log('livre non dispo');
      return false;
    }

    if (!utilisateur.peutemprunter()) {
      console.log('impo a enprunter');
      return false;
    }

    livre.disponible = false;
    this.livresempruntes.set(livreid, userid);
    console.log(`"${livre.titre}" emprunte par ${utilisateur.nom}`);
    return true;
  }

  rendrelivre(livreid: number): boolean {
    const livre = this.livrerepo.trouverparid(livreid);
    if (!livre) {
      console.log('erreur');
      return false;
    }

    if (livre.disponible) {
      console.log('non dispo');
      return false;
    }

    livre.disponible = true;
    this.livresempruntes.delete(livreid);
    console.log(`"${livre.titre}" rendu`);
    return true;
  }

  rechercherlivres(motcle: string): livre[] {
    return this.livrerepo.rechercher(livre => 
      livre.titre.toLowerCase().includes(motcle.toLowerCase()) ||
      livre.auteur.toLowerCase().includes(motcle.toLowerCase()));
  }

  listerlivresdisponibles(): livre[] {
    return this.livrerepo.rechercher(livre => livre.disponible);
  }

  listerlivresempruntes(): livre[] {
    return this.livrerepo.rechercher(livre => !livre.disponible);
  }

  ajouterutilisateur(user: utilisateur): void {
    this.utilisateurrepo.ajouter(user);
  }

}