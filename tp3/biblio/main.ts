import { bibliotheque } from './services/bibliotheque.js';
import { utilisateur, role } from './models/utilisateur.js';
import { creerlivre } from './models/livre.js';
import { apiservice } from './services/api.js';
async function main() {
  console.log('Demarrage\n');
  const mabibliotheque = new bibliotheque();

  const admin = new utilisateur(1, 'Alice', 'admin');
  const user1 = new utilisateur(2, 'Bob', 'user');
  const user2 = new utilisateur(3, 'Charlie', 'user');
  mabibliotheque.ajouterutilisateur(admin);
  mabibliotheque.ajouterutilisateur(user1);
  mabibliotheque.ajouterutilisateur(user2);
  console.log('\n--- CHARGEMENT DES LIVRES ---');
  try {
    const livres = await apiservice.obtenirlivres();
    livres.forEach(livre => mabibliotheque.ajouterlivre(livre));
    console.log('✅ Livres chargés avec succès!\n');
  } catch (erreur) {
    console.log('❌ Erreur lors du chargement des livres');
  }

  const livremannual = creerlivre(6, 'Dune', 'Frank Herbert', 1965);
  mabibliotheque.ajouterlivre(livremannual);

  console.log('--- EMPRUNTS ---');
  mabibliotheque.emprunterlivre(1, 2); 
  mabibliotheque.emprunterlivre(2, 3);

  console.log('\n--- RECHERCHE ---');
  const resultats = mabibliotheque.rechercherlivres('harry');
  console.log('Résultats pour "harry":');
  resultats.forEach(livre => {
    console.log(`📖 ${livre.titre} par ${livre.auteur}`);
  });

  console.log('\n--- RENDU ---');
  mabibliotheque.rendrelivre(1);


main().catch(erreur => {
  console.error('💥 Erreur:', erreur);
});