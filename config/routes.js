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
        'res.serverError(req)': 'http://localhost:1337/serverError/deep',
      },



      '--- res.forbidden() ---': {

        // 0-ary
        'res.forbidden()': 'http://localhost:1337/forbidden/no-arguments',

        // 1-ary
        'res.forbidden({hello:\'world\'})': 'http://localhost:1337/forbidden/object',
        'res.forbidden(true)': 'http://localhost:1337/forbidden/true',
        'res.forbidden(false)': 'http://localhost:1337/forbidden/false',
        'res.forbidden(null)': 'http://localhost:1337/forbidden/null',
        'res.forbidden(undefined)': 'http://localhost:1337/forbidden/undefined',
        'res.forbidden(\'nonexistent/view\')': 'http://localhost:1337/forbidden/string',
        'res.forbidden(\'extant/view\')': 'http://localhost:1337/forbidden/view',
        'res.forbidden({ view: \'extant/view\' })': 'http://localhost:1337/forbidden/object-with-extant-view',
        'res.forbidden({ view: \'nonexistent/view\' })': 'http://localhost:1337/forbidden/object-with-nonexistent-view',

        // 2-nary
        'res.forbidden({hello:\'world1\'}, {hello:\'world\'})': 'http://localhost:1337/forbidden/object/object',
        'res.forbidden({hello:\'world1\'}, true)': 'http://localhost:1337/forbidden/object/true',
        'res.forbidden({hello:\'world1\'}, false)': 'http://localhost:1337/forbidden/object/false',
        'res.forbidden({hello:\'world1\'}, null)': 'http://localhost:1337/forbidden/object/null',
        'res.forbidden({hello:\'world1\'}, undefined)': 'http://localhost:1337/forbidden/object/undefined',
        'res.forbidden({hello:\'world1\'}, \'nonexistent/view\')': 'http://localhost:1337/forbidden/object/string',
        'res.forbidden({hello:\'world1\'}, \'extant/view\')': 'http://localhost:1337/forbidden/object/view',
        'res.forbidden({hello:\'world1\'}, { view: \'extant/view\' })': 'http://localhost:1337/forbidden/object/object-with-extant-view',
        'res.forbidden({hello:\'world1\'}, { view: \'nonexistent/view\' })': 'http://localhost:1337/forbidden/object/object-with-nonexistent-view',

        'res.forbidden(\'hello world\', \'extant/view\')': 'http://localhost:1337/forbidden/string/view',
        'res.forbidden(true, \'extant/view\')': 'http://localhost:1337/forbidden/true/view',
        'res.forbidden(false, \'extant/view\')': 'http://localhost:1337/forbidden/false/view',
        'res.forbidden(null, \'extant/view\')': 'http://localhost:1337/forbidden/null/view',
        'res.forbidden(undefined, \'extant/view\')': 'http://localhost:1337/forbidden/undefined/view',
        'res.forbidden(req)': 'http://localhost:1337/forbidden/deep',
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
  '/serverError/deep'                : function (req, res) { res.serverError(req); },



  //////////////////////// res.forbidden() ////////////////////////

  // 0-ary
  '/forbidden/no-arguments': function (req, res) {
    return res.forbidden();
  },

  // 1-ary
  '/forbidden/object'       : function (req, res) { res.forbidden({hello: 'world'}); },
  '/forbidden/number'       : function (req, res) { res.forbidden(500); },
  '/forbidden/true'         : function (req, res) { res.forbidden(true); },
  '/forbidden/false'        : function (req, res) { res.forbidden(false); },
  '/forbidden/null'         : function (req, res) { res.forbidden(null); },
  '/forbidden/undefined'    : function (req, res) { res.forbidden(undefined); },
  '/forbidden/string'       : function (req, res) { res.forbidden('hello world'); },
  '/forbidden/view'         : function (req, res) { res.forbidden('homepage'); },
  '/forbidden/object-with-extant-view': function (req, res) { res.forbidden({view: 'homepage'}); },
  '/forbidden/object-with-nonexistent-view': function (req, res) { res.forbidden({view:'hello world'}); },


  // 2-ary
  '/forbidden/object/object'       : function (req, res) { res.forbidden({hello: 'world1'}, {hello: 'world'}); },
  '/forbidden/object/number'       : function (req, res) { res.forbidden({hello: 'world1'}, 500); },
  '/forbidden/object/true'         : function (req, res) { res.forbidden({hello: 'world1'}, true); },
  '/forbidden/object/false'        : function (req, res) { res.forbidden({hello: 'world1'}, false); },
  '/forbidden/object/null'         : function (req, res) { res.forbidden({hello: 'world1'}, null); },
  '/forbidden/object/undefined'    : function (req, res) { res.forbidden({hello: 'world1'}, undefined); },
  '/forbidden/object/string'       : function (req, res) { res.forbidden({hello: 'world1'}, 'hello world'); },
  '/forbidden/object/view'         : function (req, res) { res.forbidden({hello: 'world1'}, 'homepage'); },
  '/forbidden/object/object-with-extant-view': function (req, res) { res.forbidden({hello: 'world1'},{view: 'homepage'}); },
  '/forbidden/object/object-with-nonexistent-view': function (req, res) { res.forbidden({hello: 'world1'},{view:'hello world'}); },

  '/forbidden/string/view'         : function (req, res) { res.forbidden('hello world', 'homepage'); },
  '/forbidden/true/view'           : function (req, res) { res.forbidden(true, 'homepage'); },
  '/forbidden/false/view'          : function (req, res) { res.forbidden(false, 'homepage'); },
  '/forbidden/null/view'           : function (req, res) { res.forbidden(null, 'homepage'); },
  '/forbidden/undefined/view'      : function (req, res) { res.forbidden(undefined, 'homepage'); },
  '/forbidden/deep'                : function (req, res) { res.forbidden(req); },




  //////////////////////// res.notFound() ////////////////////////

  // 0-ary
  '/notFound/no-arguments': function (req, res) {
    return res.notFound();
  },

  // 1-ary
  '/notFound/object'       : function (req, res) { res.notFound({hello: 'world'}); },
  '/notFound/number'       : function (req, res) { res.notFound(500); },
  '/notFound/true'         : function (req, res) { res.notFound(true); },
  '/notFound/false'        : function (req, res) { res.notFound(false); },
  '/notFound/null'         : function (req, res) { res.notFound(null); },
  '/notFound/undefined'    : function (req, res) { res.notFound(undefined); },
  '/notFound/string'       : function (req, res) { res.notFound('hello world'); },
  '/notFound/view'         : function (req, res) { res.notFound('homepage'); },
  '/notFound/object-with-extant-view': function (req, res) { res.notFound({view: 'homepage'}); },
  '/notFound/object-with-nonexistent-view': function (req, res) { res.notFound({view:'hello world'}); },


  // 2-ary
  '/notFound/object/object'       : function (req, res) { res.notFound({hello: 'world1'}, {hello: 'world'}); },
  '/notFound/object/number'       : function (req, res) { res.notFound({hello: 'world1'}, 500); },
  '/notFound/object/true'         : function (req, res) { res.notFound({hello: 'world1'}, true); },
  '/notFound/object/false'        : function (req, res) { res.notFound({hello: 'world1'}, false); },
  '/notFound/object/null'         : function (req, res) { res.notFound({hello: 'world1'}, null); },
  '/notFound/object/undefined'    : function (req, res) { res.notFound({hello: 'world1'}, undefined); },
  '/notFound/object/string'       : function (req, res) { res.notFound({hello: 'world1'}, 'hello world'); },
  '/notFound/object/view'         : function (req, res) { res.notFound({hello: 'world1'}, 'homepage'); },
  '/notFound/object/object-with-extant-view': function (req, res) { res.notFound({hello: 'world1'},{view: 'homepage'}); },
  '/notFound/object/object-with-nonexistent-view': function (req, res) { res.notFound({hello: 'world1'},{view:'hello world'}); },

  '/notFound/string/view'         : function (req, res) { res.notFound('hello world', 'homepage'); },
  '/notFound/true/view'           : function (req, res) { res.notFound(true, 'homepage'); },
  '/notFound/false/view'          : function (req, res) { res.notFound(false, 'homepage'); },
  '/notFound/null/view'           : function (req, res) { res.notFound(null, 'homepage'); },
  '/notFound/undefined/view'      : function (req, res) { res.notFound(undefined, 'homepage'); },
  '/notFound/deep'                : function (req, res) { res.notFound(req); },




  //////////////////////// res.badRequest() ////////////////////////

  // 0-ary
  '/badRequest/no-arguments': function (req, res) {
    return res.badRequest();
  },

  // 1-ary
  '/badRequest/object'       : function (req, res) { res.badRequest({hello: 'world'}); },
  '/badRequest/number'       : function (req, res) { res.badRequest(500); },
  '/badRequest/true'         : function (req, res) { res.badRequest(true); },
  '/badRequest/false'        : function (req, res) { res.badRequest(false); },
  '/badRequest/null'         : function (req, res) { res.badRequest(null); },
  '/badRequest/undefined'    : function (req, res) { res.badRequest(undefined); },
  '/badRequest/string'       : function (req, res) { res.badRequest('hello world'); },
  '/badRequest/view'         : function (req, res) { res.badRequest('homepage'); },
  '/badRequest/object-with-extant-view': function (req, res) { res.badRequest({view: 'homepage'}); },
  '/badRequest/object-with-nonexistent-view': function (req, res) { res.badRequest({view:'hello world'}); },


  // 2-ary
  '/badRequest/object/object'       : function (req, res) { res.badRequest({hello: 'world1'}, {hello: 'world'}); },
  '/badRequest/object/number'       : function (req, res) { res.badRequest({hello: 'world1'}, 500); },
  '/badRequest/object/true'         : function (req, res) { res.badRequest({hello: 'world1'}, true); },
  '/badRequest/object/false'        : function (req, res) { res.badRequest({hello: 'world1'}, false); },
  '/badRequest/object/null'         : function (req, res) { res.badRequest({hello: 'world1'}, null); },
  '/badRequest/object/undefined'    : function (req, res) { res.badRequest({hello: 'world1'}, undefined); },
  '/badRequest/object/string'       : function (req, res) { res.badRequest({hello: 'world1'}, 'hello world'); },
  '/badRequest/object/view'         : function (req, res) { res.badRequest({hello: 'world1'}, 'homepage'); },
  '/badRequest/object/object-with-extant-view': function (req, res) { res.badRequest({hello: 'world1'},{view: 'homepage'}); },
  '/badRequest/object/object-with-nonexistent-view': function (req, res) { res.badRequest({hello: 'world1'},{view:'hello world'}); },

  '/badRequest/string/view'         : function (req, res) { res.badRequest('hello world', 'homepage'); },
  '/badRequest/true/view'           : function (req, res) { res.badRequest(true, 'homepage'); },
  '/badRequest/false/view'          : function (req, res) { res.badRequest(false, 'homepage'); },
  '/badRequest/null/view'           : function (req, res) { res.badRequest(null, 'homepage'); },
  '/badRequest/undefined/view'      : function (req, res) { res.badRequest(undefined, 'homepage'); },
  '/badRequest/deep'                : function (req, res) { res.badRequest(req); },




  //////////////////////// res.negotiate() ////////////////////////

  // 0-ary
  '/negotiate/no-arguments': function (req, res) {
    return res.negotiate();
  },

  // 1-ary
  '/negotiate/object'       : function (req, res) { res.negotiate({hello: 'world'}); },
  '/negotiate/number'       : function (req, res) { res.negotiate(500); },
  '/negotiate/true'         : function (req, res) { res.negotiate(true); },
  '/negotiate/false'        : function (req, res) { res.negotiate(false); },
  '/negotiate/null'         : function (req, res) { res.negotiate(null); },
  '/negotiate/undefined'    : function (req, res) { res.negotiate(undefined); },
  '/negotiate/string'       : function (req, res) { res.negotiate('hello world'); },
  '/negotiate/view'         : function (req, res) { res.negotiate('homepage'); },
  '/negotiate/object-with-extant-view': function (req, res) { res.negotiate({view: 'homepage'}); },
  '/negotiate/object-with-nonexistent-view': function (req, res) { res.negotiate({view:'hello world'}); },


  // 2-ary
  '/negotiate/object/object'       : function (req, res) { res.negotiate({hello: 'world1'}, {hello: 'world'}); },
  '/negotiate/object/number'       : function (req, res) { res.negotiate({hello: 'world1'}, 500); },
  '/negotiate/object/true'         : function (req, res) { res.negotiate({hello: 'world1'}, true); },
  '/negotiate/object/false'        : function (req, res) { res.negotiate({hello: 'world1'}, false); },
  '/negotiate/object/null'         : function (req, res) { res.negotiate({hello: 'world1'}, null); },
  '/negotiate/object/undefined'    : function (req, res) { res.negotiate({hello: 'world1'}, undefined); },
  '/negotiate/object/string'       : function (req, res) { res.negotiate({hello: 'world1'}, 'hello world'); },
  '/negotiate/object/view'         : function (req, res) { res.negotiate({hello: 'world1'}, 'homepage'); },
  '/negotiate/object/object-with-extant-view': function (req, res) { res.negotiate({hello: 'world1'},{view: 'homepage'}); },
  '/negotiate/object/object-with-nonexistent-view': function (req, res) { res.negotiate({hello: 'world1'},{view:'hello world'}); },

  '/negotiate/string/view'         : function (req, res) { res.negotiate('hello world', 'homepage'); },
  '/negotiate/true/view'           : function (req, res) { res.negotiate(true, 'homepage'); },
  '/negotiate/false/view'          : function (req, res) { res.negotiate(false, 'homepage'); },
  '/negotiate/null/view'           : function (req, res) { res.negotiate(null, 'homepage'); },
  '/negotiate/undefined/view'      : function (req, res) { res.negotiate(undefined, 'homepage'); },
  '/negotiate/deep'                : function (req, res) { res.negotiate(req); }

};
