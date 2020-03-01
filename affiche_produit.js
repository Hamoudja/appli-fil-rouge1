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

function AfficheProduit(produits) {
    console.log("Liste des produits");
    produits.forEach(function (item, index, array) {
        console.log(item.getId() + " " + item.getName() + " " + item.getMarque() + " " + item.getPrix());
    });

}

function AfficheCady(caddy) {
    if(caddy.length == 0){
        console.log("Votre panier est vide")
    }
    else{
        caddy.forEach(function (item, index, array) {
        console.log(item.getId() + " " + item.getName() + " " + item.getMarque() + " " + item.getPrix() + " " + item.getQuantite());
        total = item.getPrix()*item.getQuantite();
    });
    }
}
function AjoutProduit(  ) {
    let idProduit = parseInt(prompt("Saisie l'id du produit", ""))
    if (Number.isNaN(idProduit)) {
        alert("C'est pas un nombre");
    }
    else{
    for (item of produits) {
        if (item.getId() == idProduit) {
            if(item.getQuantite()== 0){
              countQuantite++
              item.setQuantite(countQuantite);
              caddy.push(item);
             console.log("Produit ajouté");
         }
         else{
             countQuantite++
             item.setQuantite(countQuantite);
             console.log("Produit ajouté");
            
         }
          }  
          else{

          }
        }
        }
}

function SupprimerProduit(caddy) {
    let deletProduit = parseInt(prompt("Saisie l'id du produit", ""));
    caddy.forEach(function (item, index, array) {


        if (item.getId() == deletProduit) {
          if(item.getQuantite()== 0 ){
              caddy.splice(item.index, 1);
              console.log("Produit supprimée")
            }
            else {
                countQuantite --;
                item.setQuantite(countQuantite);
                console.log("Produit supprimée")
            }
        }
    });

}

function AfficheCommande() {
    console.log("Total de votre commande" );
    AfficheCady(caddy);
    caddy.forEach(function (item, index, array) {
        total = item.getPrix()*item.getQuantite();
    })
    console.log("Prix total: "+total)

        
}

function Menue() {
    let menue = parseInt(prompt("Que souhaitez-vous-faire\n\n 1: Afficher liste produits\n 2: Voir contenue Cady\n 3: Ajout produits au caddy \n 4: Supprimer produits au caddy  \n 5: Sortir du programme \n 6: Passer commande", ""))


    while (menue !== 5) {
        menue = parseInt(prompt("Que souhaitez-vous-faire\n\n 1: Afficher liste produits\n 2: Voir contenue Cady\n 3: Ajout produits au caddy \n 4: Supprimer produits au caddy  \n 5: Sortir du programme \n 6: Passer commande", ""));
        if (Number.isNaN(menue)) {
            alert("C'est pas un nombre");

        }
        else {

            if (menue == 1) {
                AfficheProduit(produits);
            }
            else if (menue == 2) {
                    AfficheCady(caddy);
            }
            else if (menue == 3) {
              AjoutProduit();
           
            }
            else if (menue == 4) {
                SupprimerProduit(caddy);
            }
            else if (menue == 5) {
                alert("Merci de votre visite");
            }

            else if (menue == 6) {
                AfficheCommande();
            }
            else {
                alert("Cette option n'est pas dans le menue");
            }
        }
    }
}

Menue();
