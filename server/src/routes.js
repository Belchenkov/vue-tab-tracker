const AuthenticationController = require('./controllers/AuthenticationController');
const SongsController = require('./controllers/SongsController');
const BookmarksController = require('./controllers/BookmarksController');
const HistorysController = require('./controllers/HistorysController');

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = app => {
    // Auth
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register);
    app.post('/login',
        AuthenticationController.login);

    // Songs
    app.get('/songs',
        SongsController.index);
    app.get('/songs/:songId',
        SongsController.show);
    app.post('/songs',
        SongsController.post);
    app.put('/songs/:songId',
        SongsController.put);

    // Bookmarks
    app.get('/bookmarks',
        BookmarksController.index);
    app.post('/bookmarks',
        BookmarksController.post);
    app.delete('/bookmarks/:bookmarkId',
        BookmarksController.delete);

    // History
    app.get('/historys', HistorysController.index);
    app.post('/historys', HistorysController.post);
};