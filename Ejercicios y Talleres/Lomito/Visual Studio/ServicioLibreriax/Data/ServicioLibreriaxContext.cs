#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using LibreriaDominio;

namespace ServicioLibreriax.Data
{
    public class ServicioLibreriaxContext : DbContext
    {
        public ServicioLibreriaxContext (DbContextOptions<ServicioLibreriaxContext> options)
            : base(options)
        {
        }

        public DbSet<LibreriaDominio.Libro> Libro { get; set; }
    }
}
