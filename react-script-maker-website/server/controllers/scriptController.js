import Script from '../models/Script';
import User from '../models/User';
import RatingAndReview from '../models/RatingAndReview';

const scriptController = {
  getScriptById: async (req, res) => {
    try {
      const script = await Script.findById(req.params.id);
      res.json(script);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getAllScripts: async (req, res) => {
    try {
      const scripts = await Script.find();
      res.json(scripts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createScript: async (req, res) => {
    try {
      const { title, description, price, category } = req.body;
      const newScript = new Script({
        title,
        description,
        price,
        category,
      });
      await newScript.save();
      res.status(201).json(newScript);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateScript: async (req, res) => {
    try {
      const script = await Script.findById(req.params.id);
      if (req.body.title) {
        script.title = req.body.title;
      }
      if (req.body.description) {
        script.description = req.body.description;
      }
      if (req.body.price) {
        script.price = req.body.price;
      }
      if (req.body.category) {
        script.category = req.body.category;
      }
      await script.save();
      res.json(script);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteScript: async (req, res) => {
    try {
      const script = await Script.findById(req.params.id);
      await script.remove();
      res.json({ message: 'Script deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getScriptReviews: async (req, res) => {
    try {
      const reviews = await RatingAndReview.find({ scriptId: req.params.id });
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createScriptReview: async (req, res) => {
    try {
      const { userId, scriptId, rating, review } = req.body;
      const newReview = new RatingAndReview({
        userId,
        scriptId,
        rating,
        review,
      });
      await newReview.save();
      res.status(201).json(newReview);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};

export default scriptController;