class Produit {

    constructor(id, name, marque, prix, quantite) {
        this.id = id;
        this.name = name;
        this.marque = marque;
        this.prix = prix;
        this.quantite = quantite;


    }

    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getMarque() {
        return this.marque;
    }
    getPrix() {
        return this.prix;
    }
    getQuantite() {
        return this.quantite;
    }
    setQuantite(quantite){
        return this.quantite = quantite;
    }
  
    getProduit() {

        return new Produit(this.getId(), this.getName(), this.getMarque(), this.getPrix(),this.getQuantite());
    }
}


let countQuantite = 0;
let produits = [];
let caddy = [];
let total = 0;
let s8 = new Produit(1,"s8","samsung",250,0);
let produit1 = produits.push(s8.getProduit());
let iphone11 = new Produit(2 ,"iphone11","apple",800,0);
let produit2 = produits.push(iphone11.getProduit());
let ipad = new Produit(3,"ipad","apple",450,0);
let produit3 = produits.push(ipad.getProduit())

function listTableau() {
 
    const tbody = document.querySelector( '#table_liste' ).querySelector( 'tbody');
    
    for (const item of produits) {
            
      const ligne = tbody.insertRow();
   
      let cellId= ligne.insertCell();
      cellId.innerHTML = item.getId();
   
      let cellName = ligne.insertCell();
      cellName.innerHTML = item.getName();
   
      let cellMarque = ligne.insertCell();
      cellMarque.innerHTML = item.getMarque();
   

     let cellTarif = ligne.insertCell();
      cellTarif.innerHTML = item.getPrix();

      let cellAjout = ligne.insertCell();
      cellAjout.innerHTML = '<button class="ajouter" id="ajouter" type="button">Ajouter</button>';

      let cellSupprimer = ligne.insertCell();
      cellSupprimer.innerHTML = '<button class="supprimer" id="supprimer" type="button">Supprimer</button>';
    }
}  
  listTableau();
  

  