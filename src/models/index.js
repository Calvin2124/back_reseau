const User = require('./User');
const Message = require('./Message');

// Définition des associations

// Un UTILISATEUR peut créer plusieurs MESSAGES, COMMENTS, et LIKES
User.hasMany(Message);

// Associations inverses pour faciliter les requêtes
Message.belongsTo(User);

module.exports = {
    User, 
    Message
}