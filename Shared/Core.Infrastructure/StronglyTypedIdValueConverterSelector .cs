using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

namespace Core.Infrastructure
{
    public class StronglyTypedIdValueConverterSelector : ValueConverterSelector
    {
        // The dictionary in the base type is private, so we need our own one here.
        private readonly ConcurrentDictionary<(Type ModelClrType, Type ProviderClrType), ValueConverterInfo> _converters
            = new ConcurrentDictionary<(Type ModelClrType, Type ProviderClrType), ValueConverterInfo>();

        public StronglyTypedIdValueConverterSelector(ValueConverterSelectorDependencies dependencies) : base(dependencies)
        { }

        public override IEnumerable<ValueConverterInfo> Select(Type modelClrType, Type providerClrType = null)
        {
            var baseConverters = base.Select(modelClrType, providerClrType);
            foreach (var converter in baseConverters)
            {
                yield return converter;
            }

            // Extract the "real" type T from Nullable<T> if required
            var underlyingModelType = UnwrapNullableType(modelClrType);
            var underlyingProviderType = UnwrapNullableType(providerClrType);

            // 'null' means 'get any value converters for the modelClrType'
            if (underlyingProviderType is null || underlyingProviderType == typeof(int))
            {
                // Try and get a nested class with the expected name. 
                var converterType = underlyingModelType.BaseType?.GetNestedType("StronglyTypedIdEfValueConverter");

                if (converterType is not null)
                {
                    var name = converterType.Name;
                    if (name.Contains("TypedIdValueBase"))
                    {
                        Console.WriteLine();

                    }

                    converterType = converterType.MakeGenericType(new Type[] { underlyingModelType });
                }

                if (converterType is not null)
                {
                    yield return _converters.GetOrAdd(
                        (underlyingModelType, typeof(int)),
                        k =>
                        {
                            // Create an instance of the converter whenever it's requested.
                            Func<ValueConverterInfo, ValueConverter> factory =
                                    info => (ValueConverter)Activator.CreateInstance(converterType, info.MappingHints);

                            // Build the info for our strongly-typed ID => Guid converter
                            return new ValueConverterInfo(modelClrType, typeof(int), factory);
                        }
                    );
                }
            }
        }

        private static Type UnwrapNullableType(Type type)
        {
            if (type is null) { return null; }

            return Nullable.GetUnderlyingType(type) ?? type;
        }
    }
}
