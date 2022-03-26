package puj.es.librerianegocio.resources;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import puj.es.librerianegocio.facades.FacadeListarLibros;

/**
 *
 * @author
 */
@Path("javaee8")
public class JavaEE8Resource {

    @Inject
    FacadeListarLibros facade;

    @GET
    public Response ping() {
        return Response
                .ok(facade.findAllBooks())
                .build();
    }
}
