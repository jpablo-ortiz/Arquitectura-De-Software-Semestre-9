/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package facades;

import javax.ejb.Stateless;

/**
 *
 * @author Estudiante
 */
@Stateless
public class FacadeTimer {

    public void businessMethod() {
        System.out.println("En la lógica de negocio");
    }

}
