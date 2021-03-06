/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */



using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Runtime.CompilerServices;



namespace SharedLibrary.Application.Extensions.SystemExtensions.ReflectionExtensions.MethodInfoExtensions
{
    public static class GetMethodArgumentsSignatureAsListExension
    {
        public static List<string> GetMethodArgumentsSignatureAsList(this MethodInfo method, bool invokable)
        {
            var isExtensionMethod = method.IsDefined(attributeType: typeof(ExtensionAttribute), inherit: false);
            var methodParameters = method.GetParameters().AsEnumerable();

            // If this signature is designed to be invoked and it's an extension method
            if (isExtensionMethod && invokable)
                // Skip the first argument
                methodParameters = methodParameters.Skip(count: 1);

            var methodParameterSignatures = methodParameters.Select(selector: param =>
            {
                var signature = string.Empty;

                if (param.ParameterType.IsByRef)
                    signature = "ref ";
                else if (param.IsOut)
                    signature = "out ";
                else if (isExtensionMethod && param.Position == 0)
                    signature = "this ";

                if (!invokable) signature += param.ParameterType.GetSignature() + " ";

                signature += param.Name;

                return signature;
            }).ToList();

            return methodParameterSignatures;
        }
    }
}