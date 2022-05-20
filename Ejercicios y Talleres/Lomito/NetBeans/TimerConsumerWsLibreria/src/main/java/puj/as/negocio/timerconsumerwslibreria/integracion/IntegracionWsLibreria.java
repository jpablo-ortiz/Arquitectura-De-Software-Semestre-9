/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package puj.as.negocio.timerconsumerwslibreria.integracion;

import java.util.List;

import javax.ejb.Stateless;
import javax.ws.rs.core.Response;

import puj.as.libreriadomain.entities.Book;
import puj.as.negocio.timerconsumerwslibreria.proxy.ProxyWsLibreria;

/**
 *
 * @author Estudiante
 */
@Stateless
public class IntegracionWsLibreria {

    public List<Book> ConsultarTodosLosLibros() {
        ProxyWsLibreria proxy = new ProxyWsLibreria();
        return proxy.findAll_JSON();
    }

    public String AgregarLibro(Book book) {
        ProxyWsLibreria proxy = new ProxyWsLibreria();
        Response addBookResult = proxy.addBook(book);
        return addBookResult.readEntity(String.class);
    }
}
