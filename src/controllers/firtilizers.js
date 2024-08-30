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


const fertilizersArray = [
    {
      fertilizerName: "urea",
      fertilizerImage: "http://iffco-public-assets.s3.ap-south-1.amazonaws.com/s3fs-public/2020-04/UREA_0.png"
    },
    {
      fertilizerName: "10-26-26",
      fertilizerImage: "http://iffco-public-assets.s3.ap-south-1.amazonaws.com/s3fs-public/2020-06/10-26-26-%28NPK%29.png"
    },
    {
      fertilizerName: "14-35-14",
      fertilizerImage: "https://5.imimg.com/data5/IY/KA/MY-72537108/npk-fertilizer-14-3a35-3a14-500x500.png"
    },
    {
      fertilizerName: "17-17-17",
      fertilizerImage: "https://5.imimg.com/data5/SV/IS/WY/SELLER-16199489/greenstar-50-kg-spic-17-17-17-granulated-fertilizer.jpg"
    },
    {
      fertilizerName: "20-20",
      fertilizerImage: "https://www.slngroup.in/wp-content/uploads/2021/02/sl35.jpg"
    },
    {
      fertilizerName: "28-28",
      fertilizerImage: "https://cdn.shortpixel.ai/spai/q_+w_450+to_webp+ret_img/parshwaorgano.com/wp-content/uploads/2021/05/veer-npk-28-28-00.jpg"
    },
    {
      fertilizerName: "DAP",
      fertilizerImage: "http://iffco-public-assets.s3.ap-south-1.amazonaws.com/s3fs-public/2020-04/18-46-0-%28DAP%29_1.png"
    }
  ];
  
  exports.getImage = (req, res) => {
    const { name } = req.body; // Get the 'name' query parameter from the request
  
    // Find the fertilizer in the array based on the fertilizerName
    const fertilizer = fertilizersArray.find(f => f.fertilizerName.toLowerCase() === name.toLowerCase());
  
    if (fertilizer) {
      // If fertilizer is found, return the image URL
      res.status(200).json({ fertilizerImage: fertilizer.fertilizerImage });
    } else {
      // If fertilizer is not found, return a 404 error
      res.status(404).json({ message: "Fertilizer not found" });
    }
  };
  
