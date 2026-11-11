const summaryService = require('../services/summary.service');
const ApiResponse = require('../utils/ApiResponse');
const asyncHandler = require('../utils/asyncHandler');

const getSummary = asyncHandler(async (req, res) => {
    const data = await summaryService.getSummary(req.user._id, req.query);

    res.set('Cache-Control', 'no-store')
    res.status(200).json(new ApiResponse(200, data, 'Summary fetched successfully'));
});

module.exports = { getSummary };