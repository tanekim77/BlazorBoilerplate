using Material.Blazor;
using Microsoft.AspNetCore.Components.WebAssembly.Authentication;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Presentation.Infrastructure.Shared.Services.MaterialServices;
using SharedCore.Infrastructure.Extensions.MicrosoftExtensions.IServiceCollectionExtensions;
using SharedPresentation.Application.Interfaces.MatherialThemeServiceInterfaces;
using System;
using System.Net.Http;
using System.Reflection;

namespace SharedCore.Infrastructure.Extensions.MicrosoftExtensions.AspNetCoreExtensions.WebAssemblyHostBuilderExtensions
{
    public static class BuildClientExtension
    {
        public static WebAssemblyHostBuilder BuildClient(this WebAssemblyHostBuilder builder)
        {

            var services = builder.Services;

            services.AddCustomNewtonsoftJson();

            services.AddHttpClient("GraphqlClient", (services, client) =>
            {
                client.BaseAddress = new Uri("https://localhost:4001");
                //client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", "");
            });

            Assembly[] allAssemblies = AppDomain.CurrentDomain.GetAssemblies();
            //services.AddCustomServices();
            services.AddHttpClient("BlazorApp.ServerAPI", client => client.BaseAddress =
                 new Uri(builder.HostEnvironment.BaseAddress)).AddHttpMessageHandler<BaseAddressAuthorizationMessageHandler>();

            // Supply HttpClient instances that include access tokens when making requests to the server project
            services.AddScoped(sp =>
                 sp.GetRequiredService<IHttpClientFactory>().CreateClient("BlazorApp.ServerAPI"));

            //builder.services.AddHttpClient<IIdentityServerService, IdentityServerService>(client =>
            //{
            //    client.BaseAddress = new Uri("https://localhost:5001");
            //});



            services.AddMBServices(
                 toastServiceConfiguration: new MBToastServiceConfiguration()
                 {
                     InfoDefaultHeading = "Info",
                     SuccessDefaultHeading = "Success",
                     WarningDefaultHeading = "Warning",
                     ErrorDefaultHeading = "Error",
                     Timeout = 5000,
                     MaxToastsShowing = 5
                 },
                 animatedNavigationManagerServiceConfiguration: new MBAnimatedNavigationManagerServiceConfiguration()
                 {
                     ApplyAnimation = true,
                     AnimationTime = 300
                 },
                 snackbarServiceConfiguration: new MBSnackbarServiceConfiguration() {
                     CloseMethod = MBNotifierCloseMethod.TimeoutAndDismissButton,
                     Leading = false,
                     Stacked = false,
                     Timeout = 5000
                 }
                 //loggingServiceConfiguration: new MBLoggingServiceConfiguration() {
                 //    LoggingLevel = MBLoggingLevel.Warning
                 //}
             );
            services.AddSingleton<IMaterialThemeSharedUiService, MaterialThemeSharedUiService>();
     
            //services.AddScoped<AuthenticationStateProvider, IdentityAuthenticationStateProvider>();
            //services.AddCustomServices();
            services.AddLocalization();
            services.AddOptions();
            services.AddAuthorizationCore();

            //services.AddSingleton<MaterialThemeService>();

            //services.TryAddSingleton<IStringLocalizerFactory, SqlStringLocalizerFactory>();
            //services.AddTransient(typeof(IStringLocalizer<>), typeof(StringLocalizer<>));



            //builder.Services.AddCustomClientExtensions();

            return builder;
        }
    }
}
