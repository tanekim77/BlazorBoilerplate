//%runIf: !Data.Entities.Find(entity => string.Join(".", entity.Groups.Select(group => group.Name)) == "__Entities_Groups_00_Name__" && entity.Name == "__Entities_Name__" && entity.BoundedContext.Name == "__Entities_BoundedContext_Name__").ShouldNotGenerate
using __Entities_BoundedContext_Name__.Domain.Entities.__Entities_Groups_00_Name__Entities;
using __Entities_BoundedContext_Name__.Domain.ValueObjects.Ids.__Entities_Groups_00_Name__Ids;
using Core.Domain.Interfaces;

namespace __Entities_BoundedContext_Name__.Domain.Interfaces.RepositoryInterfaces.__Entities_Groups_00_Name__RepositoryInterfaces
{
    public interface I__Entities_Name__Repository_Gen_ : IRepository<__Entities_Name___Gen_, __Entities_Name__Id_Gen_>
    {
     
    }
}