/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package timers;

import javax.ejb.Schedule;
import javax.ejb.Singleton;
import javax.inject.Inject;

/**
 *
 * @author Estudiante1
 */
@Singleton
public class NewTimerSessionBean {

    @Inject
    facades.FacadeTimer fac;

    @Schedule(second = "*/2", minute = "*", hour = "*", persistent = false)

    public void myTimer() {
        // System.out.println("Timer event: " + new Date());
        fac.businessMethod();
    }

    // Add business logic below. (Right-click in editor and choose
    // "Insert Code > Add Business Method")

}
