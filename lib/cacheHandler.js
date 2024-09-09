const NodeCache = require("node-cache");

const cache = new NodeCache();

module.exports = {
	set: (key, value, ttl) => {
		cache.set(key, value, ttl || 60 * 5); 
	},

	get: (key) => cache.get(key),

	has: (key) => cache.has(key),

	del: (key) => cache.del(key),
};
