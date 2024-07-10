const Notification = require('../../models/Notification');

const notificationController = {
  getNotifications: async (req, res) => {
    try {
      const notifications = await Notification.find({ user: req.user.id });
      res.json(notifications);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  },

  markAsRead: async (req, res) => {
    try {
      const notification = await Notification.findById(req.params.id);

      if (!notification) {
        return res.status(404).json({ message: 'Notification not found' });
      }

      notification.read = true;
      await notification.save();

      res.json({ message: 'Notification marked as read' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  }
};

module.exports = notificationController;