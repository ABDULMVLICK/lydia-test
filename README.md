# Lydia - Recherche de Transactions

Une application React SPA simple et élégante pour rechercher des transactions Lydia par label.

##  Design

L'application utilise les couleurs officielles de Lydia :
- **Bleu principal** : `#1D4ED8`
- **Blanc** : `#FFFFFF` 
- **Gris clair** : `#F3F4F6`

## ✨ Fonctionnalités

-  **Recherche en temps réel** : Filtrage automatique des transactions par label
- 📱 **Responsive** : Optimisé pour mobile et desktop
- 🎭 **Animations fluides** : Transitions et effets visuels avec Framer Motion
- 🎨 **Interface moderne** : Design soigné avec Chakra UI
- 🔒 **Données non sensibles** : Affichage sécurisé des informations de transaction

##  Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner ou télécharger le projet**
   ```bash
   cd "test lydia"
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer l'application en mode développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   L'application s'ouvrira automatiquement sur `http://localhost:3000`

## 📁 Structure du projet

```
test lydia/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx          # Barre de recherche
│   │   ├── TransactionList.jsx    # Liste des transactions
│   │   └── TransactionItem.jsx    # Élément de transaction individuel
│   ├── App.jsx                    # Composant principal
│   ├── main.jsx                   # Point d'entrée React
│   └── index.css                  # Styles globaux
├── transactions.json              # Données des transactions
├── package.json                  # Dépendances et scripts
├── vite.config.js               # Configuration Vite
├── index.html                   # Page HTML principale
└── README.md                    # Ce fichier
```

## 🎯 Utilisation

### Recherche de transactions

1. **Tapez dans la barre de recherche** : Saisissez tout ou partie du label de la transaction
2. **Filtrage automatique** : Les résultats se mettent à jour en temps réel
3. **Recherche insensible à la casse** : Majuscules et minuscules sont ignorées
4. **Affichage des résultats** : Chaque transaction affiche :
   - Le label complet
   - Le montant (en bleu Lydia)
   - La date et l'heure
   - L'expéditeur et le destinataire
   - Le statut (Terminé, En attente, Annulé)
   - Les messages d'erreur si présents

### Exemples de recherche

- `épicerie` → Trouve "Paiement épicerie rue escudier"
- `restau` → Trouve "Restau"
- `facture` → Trouve "facture EDF"
- `lydia` → Trouve toutes les transactions Lydia

## 🛠️ Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Aperçu du build
npm run preview
```

## 📱 Responsive Design

L'application s'adapte automatiquement à toutes les tailles d'écran :

- **Mobile** : Interface optimisée pour les petits écrans
- **Tablette** : Mise en page adaptée aux écrans moyens
- **Desktop** : Expérience complète sur les grands écrans

##  Animations

L'application inclut des animations subtiles :

- **Apparition progressive** : Les transactions apparaissent avec un effet de fondu
- **Hover effects** : Effets au survol des éléments
- **Transitions fluides** : Animations lors des changements d'état
- **Feedback visuel** : Retours visuels lors des interactions

## Technologies utilisées

- **React 18** : Framework JavaScript moderne
- **Chakra UI** : Bibliothèque de composants UI
- **Framer Motion** : Animations et transitions
- **Vite** : Outil de build rapide
- **JavaScript ES6+** : Syntaxe moderne

##  Données

Les transactions sont stockées dans le fichier `transactions.json` et incluent :

- Labels de transaction
- Montants et dates
- Statuts (completed, pending, canceled)
- Informations d'expéditeur et destinataire
- Messages d'erreur si applicable

## 🚀 Déploiement

Pour déployer l'application :

1. **Build de production**
   ```bash
   npm run build
   ```

2. **Déployer le dossier `dist`** sur votre serveur web préféré

##  Contribution

Pour contribuer au projet :

1. Fork le projet
2. Créer une branche feature
3. Commiter les changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT.

---

**Développé avec par abdou malick pour Lydia**
# lydia-test
