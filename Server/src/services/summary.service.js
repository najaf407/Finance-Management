const mongoose = require('mongoose');
const { DateTime } = require('luxon');
const transactionModel = require('../models/transaction.model');

const TZ = process.env.APP_TIMEZONE || 'Asia/Karachi';

const getSummary = async (userId, query) => {
    const match = { user: new mongoose.Types.ObjectId(userId) };

    // 1. Date filter
    if (query.year) {
        const start = DateTime.fromObject({ year: Number(query.year) }, { zone: TZ });
        match.date = { $gte: start.toJSDate(), $lt: start.plus({ years: 1 }).toJSDate() };
    } else if (query.from || query.to) {
        match.date = {};
        if (query.from) {
            match.date.$gte = DateTime.fromISO(query.from, { zone: TZ }).toJSDate();
        }
        if (query.to) {
            match.date.$lt = DateTime.fromISO(query.to, { zone: TZ }).plus({ days: 1 }).toJSDate();
        }
    }

    // 2. Type filter
    if (query.type) match.type = query.type;

    // 3. Hisaab
    const rows = await transactionModel.aggregate([
        { $match: match },
        { $group: { _id: '$type', total: { $sum: '$amount' } } },
    ]);

    let income = 0;
    let expense = 0;
    rows.forEach((r) => {
        if (r._id === 'income') income = r.total;
        if (r._id === 'expense') expense = r.total;
    });

    const balance = Math.round((income - expense) * 100) / 100;

    return { income, expense, balance };
};

module.exports = { getSummary };