using System;
using API.Entities;

namespace API.Interfaces;

public interface ItokenService
{
    string  CreateToken(AppUser user);
}
