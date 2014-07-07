/**
 * Route Mappings
 * (sails.config.routes)
 */

module.exports.routes = {

  '/': function (req, res) {
    res.json({

      // 0-ary
      'res.ok()': 'http://localhost:1337/no-arguments',

      // 1-ary
      'res.ok({hello:\'world\'})': 'http://localhost:1337/object',
      'res.ok(true)': 'http://localhost:1337/true',
      'res.ok(false)': 'http://localhost:1337/false',
      'res.ok(null)': 'http://localhost:1337/null',
      'res.ok(undefined)': 'http://localhost:1337/undefined',
      'res.ok(\'hello world\')': 'http://localhost:1337/string',
      'res.ok(\'/hello\')': 'http://localhost:1337/urlish-string',

      // 2-nary
      'res.ok({hello:\'world1\'}, {hello:\'world\'})': 'http://localhost:1337/object/object',
      'res.ok({hello:\'world1\'}, true)': 'http://localhost:1337/object/true',
      'res.ok({hello:\'world1\'}, false)': 'http://localhost:1337/object/false',
      'res.ok({hello:\'world1\'}, null)': 'http://localhost:1337/object/null',
      'res.ok({hello:\'world1\'}, undefined)': 'http://localhost:1337/object/undefined',
      'res.ok({hello:\'world1\'}, \'hello world\')': 'http://localhost:1337/object/string',
      'res.ok({hello:\'world1\'}, \'/hello\')': 'http://localhost:1337/object/urlish-string',
    });
  },

  // 0-ary
  '/no-arguments': function (req, res) {
    return res.ok();
  },

  // 1-ary
  '/object'       : function (req, res) { res.ok({hello: 'world'}); },
  '/number'       : function (req, res) { res.ok(500); },
  '/true'         : function (req, res) { res.ok(true); },
  '/false'        : function (req, res) { res.ok(false); },
  '/null'         : function (req, res) { res.ok(null); },
  '/undefined'    : function (req, res) { res.ok(undefined); },
  '/string'       : function (req, res) { res.ok('hello world'); },
  '/urlish-string': function (req, res) { res.ok('/hello'); },


  // 2-ary
  '/object/object'       : function (req, res) { res.ok({hello: 'world1'}, {hello: 'world'}); },
  '/object/number'       : function (req, res) { res.ok({hello: 'world1'}, 500); },
  '/object/true'         : function (req, res) { res.ok({hello: 'world1'}, true); },
  '/object/false'        : function (req, res) { res.ok({hello: 'world1'}, false); },
  '/object/null'         : function (req, res) { res.ok({hello: 'world1'}, null); },
  '/object/undefined'    : function (req, res) { res.ok({hello: 'world1'}, undefined); },
  '/object/string'       : function (req, res) { res.ok({hello: 'world1'}, 'hello world'); },
  '/object/urlish-string': function (req, res) { res.ok({hello: 'world1'}, '/hello'); },


};
