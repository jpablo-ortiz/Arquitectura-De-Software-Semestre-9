/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package puj.es.librerianegocio.timers;

import java.util.Date;

import javax.ejb.Schedule;
import javax.ejb.Stateless;
import javax.inject.Inject;

import puj.es.libreriadomain.entities.Book;
import puj.es.librerianegocio.facades.FacadeListarLibros;

/**
 *
 * @author Estudiante
 */
@Stateless
public class TimerListarTodosLosLibros {

    @Inject
    FacadeListarLibros facadeListarLibros;


    //@Schedule(dayOfWeek = "Mon-Fri", month = "*", hour = "9-17", dayOfMonth = "*", year = "*", minute = "*", second = "0", persistent = false)
    @Schedule(second = "*/2", minute = "*", hour = "*", persistent = false)
    public void myTimer() {
        System.out.println("Timer event: " + new Date());
        for (Book book : facadeListarLibros.findAllBooks()) {
            System.out.println(book.getTitle());
        }
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method") 

}
