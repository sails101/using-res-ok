/**
 * Route Mappings
 * (sails.config.routes)
 */

module.exports.routes = {


  '/user': {
    target: 'UserController.find'
  },



  '/': function (req, res) {
    res.json({

      '--- res.ok() ---': {

        // 0-ary
        'res.ok()': 'http://localhost:1337/ok/no-arguments',

        // 1-ary
        'res.ok({hello:\'world\'})': 'http://localhost:1337/ok/object',
        'res.ok(true)': 'http://localhost:1337/ok/true',
        'res.ok(false)': 'http://localhost:1337/ok/false',
        'res.ok(null)': 'http://localhost:1337/ok/null',
        'res.ok(undefined)': 'http://localhost:1337/ok/undefined',
        'res.ok(\'nonexistent/view\')': 'http://localhost:1337/ok/string',
        'res.ok(\'extant/view\')': 'http://localhost:1337/ok/view',
        'res.ok({ view: \'extant/view\' })': 'http://localhost:1337/ok/object-with-extant-view',
        'res.ok({ view: \'nonexistent/view\' })': 'http://localhost:1337/ok/object-with-nonexistent-view',

        // 2-nary
        'res.ok({hello:\'world1\'}, {hello:\'world\'})': 'http://localhost:1337/ok/object/object',
        'res.ok({hello:\'world1\'}, true)': 'http://localhost:1337/ok/object/true',
        'res.ok({hello:\'world1\'}, false)': 'http://localhost:1337/ok/object/false',
        'res.ok({hello:\'world1\'}, null)': 'http://localhost:1337/ok/object/null',
        'res.ok({hello:\'world1\'}, undefined)': 'http://localhost:1337/ok/object/undefined',
        'res.ok({hello:\'world1\'}, \'nonexistent/view\')': 'http://localhost:1337/ok/object/string',
        'res.ok({hello:\'world1\'}, \'extant/view\')': 'http://localhost:1337/ok/object/view',
        'res.ok({hello:\'world1\'}, { view: \'extant/view\' })': 'http://localhost:1337/ok/object/object-with-extant-view',
        'res.ok({hello:\'world1\'}, { view: \'nonexistent/view\' })': 'http://localhost:1337/ok/object/object-with-nonexistent-view',

        'res.ok(\'hello world\', \'extant/view\')': 'http://localhost:1337/ok/string/view',
        'res.ok(true, \'extant/view\')': 'http://localhost:1337/ok/true/view',
        'res.ok(false, \'extant/view\')': 'http://localhost:1337/ok/false/view',
        'res.ok(null, \'extant/view\')': 'http://localhost:1337/ok/null/view',
        'res.ok(undefined, \'extant/view\')': 'http://localhost:1337/ok/undefined/view',
      },

      '--- res.serverError() ---': {

        // 0-ary
        'res.serverError()': 'http://localhost:1337/serverError/no-arguments',

        // 1-ary
        'res.serverError({hello:\'world\'})': 'http://localhost:1337/serverError/object',
        'res.serverError(true)': 'http://localhost:1337/serverError/true',
        'res.serverError(false)': 'http://localhost:1337/serverError/false',
        'res.serverError(null)': 'http://localhost:1337/serverError/null',
        'res.serverError(undefined)': 'http://localhost:1337/serverError/undefined',
        'res.serverError(\'nonexistent/view\')': 'http://localhost:1337/serverError/string',
        'res.serverError(\'extant/view\')': 'http://localhost:1337/serverError/view',
        'res.serverError({ view: \'extant/view\' })': 'http://localhost:1337/serverError/object-with-extant-view',
        'res.serverError({ view: \'nonexistent/view\' })': 'http://localhost:1337/serverError/object-with-nonexistent-view',

        // 2-nary
        'res.serverError({hello:\'world1\'}, {hello:\'world\'})': 'http://localhost:1337/serverError/object/object',
        'res.serverError({hello:\'world1\'}, true)': 'http://localhost:1337/serverError/object/true',
        'res.serverError({hello:\'world1\'}, false)': 'http://localhost:1337/serverError/object/false',
        'res.serverError({hello:\'world1\'}, null)': 'http://localhost:1337/serverError/object/null',
        'res.serverError({hello:\'world1\'}, undefined)': 'http://localhost:1337/serverError/object/undefined',
        'res.serverError({hello:\'world1\'}, \'nonexistent/view\')': 'http://localhost:1337/serverError/object/string',
        'res.serverError({hello:\'world1\'}, \'extant/view\')': 'http://localhost:1337/serverError/object/view',
        'res.serverError({hello:\'world1\'}, { view: \'extant/view\' })': 'http://localhost:1337/serverError/object/object-with-extant-view',
        'res.serverError({hello:\'world1\'}, { view: \'nonexistent/view\' })': 'http://localhost:1337/serverError/object/object-with-nonexistent-view',

        'res.serverError(\'hello world\', \'extant/view\')': 'http://localhost:1337/serverError/string/view',
        'res.serverError(true, \'extant/view\')': 'http://localhost:1337/serverError/true/view',
        'res.serverError(false, \'extant/view\')': 'http://localhost:1337/serverError/false/view',
        'res.serverError(null, \'extant/view\')': 'http://localhost:1337/serverError/null/view',
        'res.serverError(undefined, \'extant/view\')': 'http://localhost:1337/serverError/undefined/view',
      }

    });
  },



  //////////////////////// res.ok() ////////////////////////

  // 0-ary
  '/ok/no-arguments': function (req, res) {
    return res.ok();
  },

  // 1-ary
  '/ok/object'       : function (req, res) { res.ok({hello: 'world'}); },
  '/ok/number'       : function (req, res) { res.ok(500); },
  '/ok/true'         : function (req, res) { res.ok(true); },
  '/ok/false'        : function (req, res) { res.ok(false); },
  '/ok/null'         : function (req, res) { res.ok(null); },
  '/ok/undefined'    : function (req, res) { res.ok(undefined); },
  '/ok/string'       : function (req, res) { res.ok('hello world'); },
  '/ok/view'         : function (req, res) { res.ok('homepage'); },
  '/ok/object-with-extant-view': function (req, res) { res.ok({view: 'homepage'}); },
  '/ok/object-with-nonexistent-view': function (req, res) { res.ok({view:'hello world'}); },


  // 2-ary
  '/ok/object/object'       : function (req, res) { res.ok({hello: 'world1'}, {hello: 'world'}); },
  '/ok/object/number'       : function (req, res) { res.ok({hello: 'world1'}, 500); },
  '/ok/object/true'         : function (req, res) { res.ok({hello: 'world1'}, true); },
  '/ok/object/false'        : function (req, res) { res.ok({hello: 'world1'}, false); },
  '/ok/object/null'         : function (req, res) { res.ok({hello: 'world1'}, null); },
  '/ok/object/undefined'    : function (req, res) { res.ok({hello: 'world1'}, undefined); },
  '/ok/object/string'       : function (req, res) { res.ok({hello: 'world1'}, 'hello world'); },
  '/ok/object/view'         : function (req, res) { res.ok({hello: 'world1'}, 'homepage'); },
  '/ok/object/object-with-extant-view': function (req, res) { res.ok({hello: 'world1'},{view: 'homepage'}); },
  '/ok/object/object-with-nonexistent-view': function (req, res) { res.ok({hello: 'world1'},{view:'hello world'}); },

  '/ok/string/view'         : function (req, res) { res.ok('hello world', 'homepage'); },
  '/ok/true/view'           : function (req, res) { res.ok(true, 'homepage'); },
  '/ok/false/view'          : function (req, res) { res.ok(false, 'homepage'); },
  '/ok/null/view'           : function (req, res) { res.ok(null, 'homepage'); },
  '/ok/undefined/view'      : function (req, res) { res.ok(undefined, 'homepage'); },




  //////////////////////// res.serverError() ////////////////////////


  // 0-ary
  '/serverError/no-arguments': function (req, res) {
    return res.serverError();
  },

  // 1-ary
  '/serverError/object'       : function (req, res) { res.serverError({hello: 'world'}); },
  '/serverError/number'       : function (req, res) { res.serverError(500); },
  '/serverError/true'         : function (req, res) { res.serverError(true); },
  '/serverError/false'        : function (req, res) { res.serverError(false); },
  '/serverError/null'         : function (req, res) { res.serverError(null); },
  '/serverError/undefined'    : function (req, res) { res.serverError(undefined); },
  '/serverError/string'       : function (req, res) { res.serverError('hello world'); },
  '/serverError/view'         : function (req, res) { res.serverError('homepage'); },
  '/serverError/object-with-extant-view': function (req, res) { res.serverError({view: 'homepage'}); },
  '/serverError/object-with-nonexistent-view': function (req, res) { res.serverError({view:'hello world'}); },


  // 2-ary
  '/serverError/object/object'       : function (req, res) { res.serverError({hello: 'world1'}, {hello: 'world'}); },
  '/serverError/object/number'       : function (req, res) { res.serverError({hello: 'world1'}, 500); },
  '/serverError/object/true'         : function (req, res) { res.serverError({hello: 'world1'}, true); },
  '/serverError/object/false'        : function (req, res) { res.serverError({hello: 'world1'}, false); },
  '/serverError/object/null'         : function (req, res) { res.serverError({hello: 'world1'}, null); },
  '/serverError/object/undefined'    : function (req, res) { res.serverError({hello: 'world1'}, undefined); },
  '/serverError/object/string'       : function (req, res) { res.serverError({hello: 'world1'}, 'hello world'); },
  '/serverError/object/view'         : function (req, res) { res.serverError({hello: 'world1'}, 'homepage'); },
  '/serverError/object/object-with-extant-view': function (req, res) { res.serverError({hello: 'world1'},{view: 'homepage'}); },
  '/serverError/object/object-with-nonexistent-view': function (req, res) { res.serverError({hello: 'world1'},{view:'hello world'}); },

  '/serverError/string/view'         : function (req, res) { res.serverError('hello world', 'homepage'); },
  '/serverError/true/view'           : function (req, res) { res.serverError(true, 'homepage'); },
  '/serverError/false/view'          : function (req, res) { res.serverError(false, 'homepage'); },
  '/serverError/null/view'           : function (req, res) { res.serverError(null, 'homepage'); },
  '/serverError/undefined/view'      : function (req, res) { res.serverError(undefined, 'homepage'); },

  '/serverError/deep': function (req, res) {
    res.serverError(req);
  }

  //////////////////////// res.forbidden() ////////////////////////


  //////////////////////// res.notFound() ////////////////////////


  //////////////////////// res.badRequest() ////////////////////////


  //////////////////////// res.negotiate() ////////////////////////

};
