package puj.as.negocio.librerianegociosbslandtimer.resources;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import puj.as.negocio.librerianegociosbslandtimer.facades.FacadeManagerBook;

/**
 *
 * @author
 */
@Path("javaee8")
public class JavaEE8Resource {
    @Inject
    FacadeManagerBook facade;

    @GET
    public Response ping() {
        return Response
                .ok(facade.findAll())
                .build();
    }
}
