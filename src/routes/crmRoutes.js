const routes = (app) => {
  app.route('/contact')
    .get((req, res) => {
      res.send('GET request for contact is successful');
    })
    .post((req, res) => {
      res.send('POST request for contact is successful');
    })
  
  app.route('/contact/:contactID')
    .put((req, res) => {
      res.send('PUT request for specific contact ID is successful');
    })
    .delete((req, res) => {
      res.send('DELETE requesst for specific contact ID successful');
    })
}

export default routes;