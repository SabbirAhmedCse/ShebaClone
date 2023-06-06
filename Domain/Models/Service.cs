using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace API.Models;

public partial class Service
{
    [Key]
    public int Id { get; set; }

    public int ServicesCategoryId { get; set; }

    public string? SubCategory { get; set; }

    public string Description { get; set; }

    public decimal? Price { get; set; }

    public string? ImageUrl { get; set; }

    public long CreateBy { get; set; }
    public DateTime CreateAt { get; set; }

    public long? UpdateBy { get; set; }
    public DateTime? UpdateAt { get; set; }

    public bool? IsActive { get; set; }

    public bool? IsDelete { get; set; }

    
}
