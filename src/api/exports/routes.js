const routes = (handler) => [
  {
    method: 'POST',
    path: '/exports/playlists/{id}',
    handler: handler.postExportPlaylistsHandler,
    options: {
      auth: 'songsapp_jwt',
    },
  },
];

module.exports = routes;
