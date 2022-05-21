/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package puj.as.negocio.wslibreria;

import java.net.URI;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;

import puj.as.libreriadomain.entities.Book;
import puj.as.negocio.wslibreria.facades.BookFacade;


/**
 * REST Web Service
 *
 * @author Estudiante
 */
@Path("managerbook")
@RequestScoped
public class WSManagerBook {

    @Inject
    BookFacade bookFacade;

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of WSManagerBook
     */
    public WSManagerBook() {
    }

    /**
     * Retrieves representation of an instance of
     * puj.as.negocio.wslibreria.WSManagerBook
     * 
     * @param id
     * @return an instance of puj.as.libreriadomain.entities.Book
     */
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findBybookId(@PathParam("id") String id) {
        //Book book = bookFacade.find(id);
        List<Book> books = bookFacade.findAll();
        for (Book book : books) {
            if(book.getBookId().equals(id))
            {
                return Response.ok(book).build();
            }
        }
        return Response.status(Response.Status.NOT_FOUND).build();
    }

    /**
     * POST method for updating or creating an instance of WSManagerBook
     * 
     * @param book
     * @param content representation for the resource
     * @return 
     */
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response addBook(Book book) {
        bookFacade.create(book);
        //URI createdURI = context.getBaseUriBuilder()
        //        .path(book.getBookId())
        //        .build();
        return Response
                .ok(book.getBookId())
                .build();
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response changeBook(Book book) {
        bookFacade.edit(book);
        return Response.ok().build();
    }

    @GET
    @Path("/rating/{rating}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findByRating(@PathParam("rating") Integer rating) {
        final List<Book> books = bookFacade.findByRating(rating);
        if (books.size() > 0) {
            return Response
                    .ok(books)
                    .build();
        }
        return Response
                .status(Response.Status.NO_CONTENT)
                .build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response findAll() {
        final List<Book> books = bookFacade.findAll();
        if (books.size() > 0) {
            return Response
                    .ok(books)
                    .build();
        }
        return Response
                .status(Response.Status.NO_CONTENT)
                .build();
    }
}
