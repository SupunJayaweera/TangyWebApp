using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tangy_DataAccess
{
    public class OrderDetail
    {
        public int Id { get; set; }

        [Required]
        public int OrderHeaderId { get; set; }

        [Required]
        public int ProductId { get; set; }
        [ForeignKey("ProductId")]
        [NotMapped]
        public virtual Product Product { get; set; }

        [Required]
        public int Count { get; set;}

        [Required]
        public int Price { get; set; }

        [Required]
        public int Size { get; set; }

        [Required]
        public int ProductName { get; set; }
    }
}
