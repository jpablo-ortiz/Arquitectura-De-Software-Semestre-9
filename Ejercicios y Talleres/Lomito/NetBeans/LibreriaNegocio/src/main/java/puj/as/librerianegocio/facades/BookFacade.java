/*

- To change this license header, choose License Headers in Project Properties.
- To change this template file, choose Tools | Templates
- and open the template in the editor.
*/
package puj.as.librerianegocio.facades;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import puj.as.libreriadomain.entities.Book;

/**
 *
 * 
 * - @author Estudiante
 */
@Stateless
public class BookFacade extends AbstractFacade<Book> {

    @PersistenceContext(unitName = "my_persistence_unit")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }

    public BookFacade() {
        super(Book.class);
    }

}