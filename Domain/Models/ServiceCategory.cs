using System;
using System.Collections.Generic;

namespace API.Models;

public partial class ServiceCategory
{
    public int Id { get; set; }

    public string? CategoryName { get; set; }

    public DateTime? CreateAt { get; set; }

    public DateTime? UpdateAt { get; set; }

    public bool? IsActive { get; set; }

    public bool? IsDelete { get; set; }
}
