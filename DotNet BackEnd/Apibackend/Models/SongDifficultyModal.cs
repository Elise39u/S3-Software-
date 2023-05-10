using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Models;

public class SongDifficultyModals
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }
    public int SongId { get; set; }
    public int DifficultyId { get; set; }
    public float DifficultyRating { get; set; }

    public SongDifficultyModals()
    {
        
    }

    public SongDifficultyModals(int id, int songId, int difficultyId,
        float difficultyRating)
    {
        Id = id;
        SongId = songId;
        DifficultyId = difficultyId;
        DifficultyRating = difficultyRating;
    }
}