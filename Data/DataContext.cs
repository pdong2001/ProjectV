using Data.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer;
using System.IO;
using Utils.Constants;

namespace Data
{
    public class DataContext : DbContext
    {
        private readonly IHttpContextAccessor _contextAccessor;

        public DataContext(DbContextOptions<DataContext> options, IHttpContextAccessor contextAccessor) : base(options)
        {
            SavingChanges += DataContext_SavingChanges;
            this._contextAccessor = contextAccessor;
        }

        public DbSet<Blob> Blobs { get; set; }

        public DbSet<User> Users { get; set; }
        public DbSet<Log> Logs { get; set; }
        public DbSet<LoaiSP> LoaiSP { get; set; }
        public DbSet<SanPham> SanPham { get; set; }
        public DbSet<Slide> Slide { get; set; }
        public DbSet<KhachHang> KhachHang { get; set; }
        public DbSet<ThuongHieu> ThuongHieu { get; set; }
        public DbSet<ChiTietSP> ChiTietSP { get; set; }
        public DbSet<HoaDonBan> HoaDonBan { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.UserName).IsUnique();
            });

            modelBuilder.Entity<SanPham>(entity =>
            {
                entity.HasMany(e => e.ChiTietSP)
                .WithOne(e => e.SanPham)
                .HasForeignKey(e => e.IdSanPham)
                .OnDelete(DeleteBehavior.ClientCascade);
            });

            modelBuilder.Entity<DonNhap>(entity =>
            {
                entity.HasOne(e => e.SanPham)
                .WithMany(e => e.DSDonNhap)
                .HasForeignKey(e => e.IdSanPham);
            });

            modelBuilder.Entity<User>()
            .HasData(new User
            {
                Id = Guid.Parse("78f5610c-77be-45a7-be07-effb2bab65ff"),
                UserName = "admin",
                Password = BCrypt.Net.BCrypt.HashPassword("Admin@123"),
                FullName = "Quản trị viên",
                Email = "admin@test.tt",
                PhoneNumber = "0987654321",
                Roles = Roles.Admin,
                CreatedAt = DateTime.Now,
                CreatedBy = "Seeding"
            });

            base.OnModelCreating(modelBuilder);
        }

        private void DataContext_SavingChanges(object? sender, SavingChangesEventArgs e)
        {
            foreach (var item in ChangeTracker.Entries().
                Where(e => e.State == EntityState.Added ||
                e.State == EntityState.Modified ||
                e.State == EntityState.Deleted))
            {
                if (item.Entity is IAuditedEntity entity)
                {
                    if (item.State == EntityState.Added)
                    {
                        entity.CreatedAt = DateTime.Now;
                        entity.CreatedBy = _contextAccessor.HttpContext.User.Identity?.Name ?? "Vô danh";
                    }
                    else if (item.State == EntityState.Modified)
                    {
                        entity.UpdatedAt = DateTime.Now;
                        entity.UpdatedBy = _contextAccessor.HttpContext.User.Identity?.Name ?? "Vô danh";
                    }
                    else if (item.Entity is IFullAuditedEntity fullAudited)
                    {
                        if (fullAudited.IsDeleted == false)
                        {
                            fullAudited.IsDeleted = true;
                            fullAudited.DeletedAt = DateTime.Now;
                            fullAudited.DeletedBy = _contextAccessor.HttpContext.User.Identity?.Name ?? "Vô danh";
                            item.State = EntityState.Modified;
                        }
                    }
                }
            }
        }
    }
}