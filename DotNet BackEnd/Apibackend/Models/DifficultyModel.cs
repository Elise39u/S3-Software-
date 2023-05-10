using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models;

public class DifficultyModel
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public string Name { get; set; }
    
    public DifficultyModel()
    {
        
    }

    public DifficultyModel(int id, string name)
    {
        Id = id;
        Name = name;
    }
}