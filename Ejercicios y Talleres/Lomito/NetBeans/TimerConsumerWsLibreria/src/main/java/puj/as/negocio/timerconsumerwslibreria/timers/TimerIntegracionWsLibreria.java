/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package puj.as.negocio.timerconsumerwslibreria.timers;

import java.util.Date;
import java.util.List;

import javax.ejb.EJB;
import javax.ejb.Schedule;
import javax.ejb.Singleton;

import puj.as.libreriadomain.entities.Book;
import puj.as.negocio.timerconsumerwslibreria.integracion.IntegracionWsLibreria;

/**
 *
 * @author Estudiante
 */
@Singleton
public class TimerIntegracionWsLibreria {

    @EJB
    IntegracionWsLibreria integracionWsLibreria;

    @Schedule(second = "*/5", minute = "*", hour = "*", persistent = false)
    public void myTimer() {
        System.out.println("Timer event: " + new Date());
        List<Book> libros = integracionWsLibreria.ConsultarTodosLosLibros();
        for (Book libro : libros) {
            System.out.println("Libro: " + libro.getTitle());
        }
    }
}
