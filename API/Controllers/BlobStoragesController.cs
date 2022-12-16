using Data;
using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Services.Contracts;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlobStoragesController : ControllerBase
    {

        private readonly DataContext _context;

        public BlobStoragesController(DataContext context)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] Guid id)
        {
            var blob = await _context.Blobs.FindAsync(id);
            if (blob == null) return NotFound();
            return File(blob.Content, blob.ContentType, blob.FileName);
        }

        [HttpPost]
        public async Task<IActionResult> GetById()
        {
            var folder = this.Request.Form["folder"].FirstOrDefault();
            var name = this.Request.Form["name"].FirstOrDefault();
            var files = this.Request.Form.Files;
            if (!files.Any()) return BadRequest("Không tìm thấy tệp");
            var blobs = new List<Blob>(files.Count);
            foreach (var file in files)
            {
                using (var ms = new MemoryStream())
                {
                    await file.CopyToAsync(ms);
                    var blob = new Blob
                    {
                        Content = ms.ToArray(),
                        ContentType = file.ContentType,
                        FileName = file.FileName,
                        Folder = folder,
                        Name = name ?? file.FileName,
                        Id = Guid.NewGuid()
                    };
                    blobs.Add(blob);
                }
            }
            await _context.Blobs.AddRangeAsync(blobs.ToArray());
            var response = new ServiceResponse<IEnumerable<Guid>>();
            if (await _context.SaveChangesAsync() > 0)
            {
                response.SetValue(blobs.Select(b => b.Id));
            }
            return Ok(response);
        }
    }
}
