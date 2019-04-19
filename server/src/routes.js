const AuthenticationController = require('./controllers/AuthenticationController');
const SongsController = require('./controllers/SongsController');
const BookmarksController = require('./controllers/BookmarksController');
const HistorysController = require('./controllers/HistorysController');

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const isAuthenticated = require('./policies/isAuthenticated')

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
        isAuthenticated,
        BookmarksController.index);
    app.post('/bookmarks',
        isAuthenticated,
        BookmarksController.post);
    app.delete('/bookmarks/:bookmarkId',
        isAuthenticated,
        BookmarksController.delete);

    // History
    app.get('/historys', isAuthenticated, HistorysController.index);
    app.post('/historys',isAuthenticated, HistorysController.post);
};