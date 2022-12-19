using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Utils.Extensions
{
    public static class DependencyInjectExteions
    {
        public static IServiceCollection Validate(this IServiceCollection services)
        {
            services.Clear();
            return services;
        }
    }
}
