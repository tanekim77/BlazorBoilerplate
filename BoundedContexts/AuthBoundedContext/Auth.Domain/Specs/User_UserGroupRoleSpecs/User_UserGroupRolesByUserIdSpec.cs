//%runIf: Data.Entities.Exists(entity =>  entity.BoundedContext.Name == "Auth" && string.Join(".", entity.Groups.Select(group => group.Name)) == "" && entity.Name == "User_UserGroupRole" && entity.Properties.Exists(property => property.Name == "UserId" && (property.IsSimpleType || property.IsValueObject )))
using Auth.Domain.ValueObjects.Ids;
using Auth.Domain.Entities;
using Auth.Domain.Entities;
using Ardalis.Specification;

namespace Auth.Domain.Specs.User_UserGroupRoleSpecs
{
    public sealed class User_UserGroupRolesByUserIdSpec : Specification<User_UserGroupRole>
    {
        public User_UserGroupRolesByUserIdSpec(UserId userId)
        {
            Query.Where(User_UserGroupRole => User_UserGroupRole.UserId == userId);
        }
    }
}