# Nouveau projet de réseau social pour s'entrainer en API REST
## Installation du projet

### Prérequis
- NodeJS
- PhpMyAdmin

### Installation
1. Cloner le projet
2. Ouvrir le dossier du projet dans un terminal
3. Exécuter la commande `npm install`
4. Exécuter la commande `npm start`
5. Accéder à l'adresse `http://localhost:3000/api/users`


## Structure du projet

backend/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── auth.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── messageController.js
│   │   └── commentController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Message.js
│   │   └── Comment.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── messageRoutes.js
│   │   └── commentRoutes.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── utils/
│   │   └── validation.js
│   └── app.js
├── tests/
│   ├── auth.test.js
│   ├── message.test.js
│   └── comment.test.js
├── .env
├── .gitignore
├── package.json
└── README.md