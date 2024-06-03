const Page = require('../models/Page');

// Save a page design
exports.savePage = async (req, res) => {
  try {
    const page = new Page(req.body);
    await page.save();
    res.status(201).json(page);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Load a page design
exports.getPage = async (req, res) => {
    console.log("req.params", req.params.pageId)
  try {
    const page = await Page.findOne({pageId : req.params.pageId  });
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }
    res.json(page);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
