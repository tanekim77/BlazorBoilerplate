//%runIf: Data.Entities.Exists(entity =>  entity.BoundedContext.Name == "Auth" && string.Join(".", entity.Groups.Select(group => group.Name)) == "" && entity.Name == "User" && entity.Properties.Exists(property => property.Name == "NormalizedUserName" && (property.IsSimpleType || property.IsValueObject )))
using System;
using Auth.Domain.ValueObjects.Ids;
using Auth.Domain.Entities;
using Auth.Domain.Entities;
using Ardalis.Specification;

namespace Auth.Domain.Specs.UserSpecs
{
    public sealed class UsersByNormalizedUserNameSpec : Specification<User>
    {
        public UsersByNormalizedUserNameSpec(string normalizedUserName)
        {
            Query.Where(User => User.NormalizedUserName == normalizedUserName);
        }
    }
}