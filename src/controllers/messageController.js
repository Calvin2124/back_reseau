const { Message, User } = require('../models');

exports.createMessage = async (req, res, next) => {
    try {
        console.log('Données reçues:', req.body);
        const { idUser, content } = req.body;

        if (!idUser) {
            return res.status(400).json({ message: 'idUser est requis' });
        }

        const user = await User.findByPk(idUser);
        console.log('Utilisateur trouvé:', user);

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        // Créez explicitement le message avec userId
        const message = await Message.create({
            content: content,
            UserId: user.id  // Assurez-vous que c'est le nom correct de la colonne dans votre base de données
        });

        console.log('Message créé:', message.toJSON());

        res.status(201).json({ message: 'Message créé avec succès', messageId: message.id });
    } catch (err) {
        console.error('Erreur lors de la création du message:', err);
        next(err);
    }
}

exports.deleteMessage = async (req, res, next) => {
    try{
        const { messageId } = req.params;
        const message = await Message.findByPk(messageId);
        if (!message) {
            return res.status(404).json({ message: 'Message non trouvé' });
        }
        await message.destroy();
        res.status(204).json({ message: 'Message supprimé avec succès' });
    }catch(err) {
        next(err)
;    }
}

exports.getMessage = async (req, res, next) => {
    try{
        const { messageId } = req.params;
        const message = await Message.findByPk(messageId);
        if (!message) {
            return res.status(404).json({ message: 'Message non trouvé' });
        }
        res.status(200).json({ message: 'Message trouvé', messageId: message.id });
    }catch(err) {
        next(err)
;    }
}

exports.getMessages = async (req, res, next) => {
    try{
        const messages = await Message.findAll();
        res.status(200).json({ message: 'Messages trouvés', messages });
    }catch(err) {
        next(err)
;    }
}
