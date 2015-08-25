using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace WebApplication1
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}"
            );
            config.Routes.MapHttpRoute(
                name: "BreezeDefault",
                routeTemplate: "breeze/{action}",
                defaults: new { Controller = "Metadata" }
            );

            config.Routes.MapHttpRoute(
                name: "BreezeApi",
                routeTemplate: "breeze/{controller}/{action}"
            );
        }
    }
}
