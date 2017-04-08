const funcs = {
    page404: function(req, res, next) {
    	res.render('404');
    },

    page502: function(err, req, res, next) {
    	res.render('502');
    }
};

module.exports = funcs;