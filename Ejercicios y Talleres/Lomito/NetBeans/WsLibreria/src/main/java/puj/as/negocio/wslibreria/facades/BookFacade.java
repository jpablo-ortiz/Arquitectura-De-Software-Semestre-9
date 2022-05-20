/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package puj.as.negocio.wslibreria.facades;

import java.util.List;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import puj.as.libreriadomain.entities.Book;

/**
 *
 * @author Estudiante
 */
@Stateless
public class BookFacade extends AbstractFacade<Book> {

    @PersistenceContext(unitName = "my_persistence_unit")
    private EntityManager em;

    @Override
    protected EntityManager getEntityManager() {
        return em;
    }
    
    public List<Book> findByRating(Integer rating) {
        TypedQuery<Book> query = em
                .createQuery("SELECT b FROM Book b WHERE b.rating = :rating", Book.class);
        query.setParameter("rating", rating);
        return query.getResultList();
    }

    public BookFacade() {
        super(Book.class);
    }
    
}
