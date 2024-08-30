const Fertilizer = require('../models/firtilizers'); 
exports.dataFirtilizer = async (req, res) => {
  // Example array of fertilizers dat
  const fertilizersArray = req.body;     phosphorous: 6
  try {
    // Insert the array of fertilizers using insertMany
    await Fertilizer.insertMany(fertilizersArray);
    // Send success response
    res.status(200).json({
      success: true,
      message: 'All fertilizers have been added successfully!'
    });
  } catch (error) {
    // Handle errors and send failure response
    console.error('Error inserting fertilizers:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while inserting fertilizers',
      error: error.message
    });
  }
};


exports.getImage = async (req, res) => {
  const { name } = req.body; // Get the 'name' query parameter from the request
    console.log(name);
  try {
    // Find the fertilizer in the MongoDB collection based on the fertilizerName
    const fertilizer = await Fertilizer.findOne({ fertilizerName: new RegExp(`^${name}$`, 'i') });

    if (fertilizer) {
      // If fertilizer is found, return the image URL
      res.status(200).json({ fertilizerImage: fertilizer.fertilizerImage });
    } else {
      // If fertilizer is not found, return a 404 error
      res.status(404).json({ message: "Fertilizer not found" });
    }
  } catch (error) {
    // Handle any errors that occur during the database query
    res.status(500).json({ message: "Server error", error });
  }
};
