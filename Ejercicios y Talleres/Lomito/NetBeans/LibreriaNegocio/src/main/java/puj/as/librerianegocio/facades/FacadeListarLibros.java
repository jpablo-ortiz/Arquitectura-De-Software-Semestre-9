/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package puj.as.librerianegocio.facades;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;

import puj.as.libreriadomain.entities.Book;

/**
 *
 * @author Estudiante
 */
@Stateless
public class FacadeListarLibros {

    public List<Book> findAllBooks() {
        List<Book> books = new ArrayList<>();
        
        Book book = new Book();
        book.setTitle("El señor de los anillos");
        book.setAuthorFirstName("J.R.R");
        book.setAuthorLastName("Tolkien");
        book.setRating(5);

        Book book2 = new Book();
        book2.setTitle("El señor de los anillos 2");

        books.add(book);
        books.add(book2);

        return books;
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")
    
}
