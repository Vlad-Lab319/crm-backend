import { 
  addNewContact,
  getContacts,
  getContactByID,
  updateContact,
  deleteContact
 } from '../controllers/crmController.js'

const routes = (app) => {
  
  // All contacts endpoints
  
  app.route('/contact')

    // GET enpoint
    .get((req, res, next) => {
      // middleware
      console.log(`Request from ${req.originalUrl}`);
      console.log(`Request type ${req.method}`);
      next();
    }, getContacts)

    // POST endpoint
    .post(addNewContact);

  // Specific contacts endpoints

  app.route('/contact/:contactID')
    // GET contact  
    .get(getContactByID)
    // Update contact
    .put(updateContact)
    // Delete contact
    .delete(deleteContact)
}

export default routes;